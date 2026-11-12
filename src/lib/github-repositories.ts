import type { GitHubRepository } from "@/lib/project-types";

const OWNER = "Rohitsakhalkar";
const PAGE_SIZE = 100;
const CACHE_SECONDS = 60 * 60;
const REQUEST_TIMEOUT_MS = 8_000;

type GitHubRepositoryPayload = Record<string, unknown>;

export class GitHubRepositoryFetchError extends Error {
  readonly publicMessage: string;

  constructor(
    message: string,
    publicMessage: string
  ) {
    super(message);
    this.name = "GitHubRepositoryFetchError";
    this.publicMessage = publicMessage;
  }
}

function isRecord(value: unknown): value is GitHubRepositoryPayload {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

function asNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function asBoolean(value: unknown): boolean {
  return value === true;
}

function normalizeRepository(
  value: unknown
): GitHubRepository | null {
  if (!isRecord(value)) return null;

  const id = asNumber(value.id);
  const name = asString(value.name);
  const htmlUrl = asString(value.html_url);
  if (id === null || name === null || htmlUrl === null) return null;

  const topics = Array.isArray(value.topics)
    ? value.topics.filter(
        (topic): topic is string => typeof topic === "string" && topic.length > 0
      )
    : [];

  return {
    id,
    name,
    description: asString(value.description),
    htmlUrl,
    homepageUrl: asString(value.homepage),
    language: asString(value.language),
    topics,
    stars: asNumber(value.stargazers_count),
    forks: asNumber(value.forks_count),
    updatedAt: asString(value.updated_at),
    createdAt: asString(value.created_at),
    defaultBranch: asString(value.default_branch),
    archived: asBoolean(value.archived),
    isFork: asBoolean(value.fork),
    isPrivate: asBoolean(value.private),
    isDisabled: asBoolean(value.disabled),
    size: asNumber(value.size),
  };
}

async function fetchRepositoryPage(page: number): Promise<GitHubRepository[]> {
  const url = new URL(`https://api.github.com/users/${OWNER}/repos`);
  url.searchParams.set("type", "owner");
  url.searchParams.set("sort", "updated");
  url.searchParams.set("direction", "desc");
  url.searchParams.set("per_page", String(PAGE_SIZE));
  url.searchParams.set("page", String(page));

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "ROHIT.EXE-portfolio",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    cache: "force-cache",
    next: { revalidate: CACHE_SECONDS },
  });

  const payload: unknown = await response.json();
  if (!response.ok) {
    const rateLimited =
      response.status === 429 ||
      (response.status === 403 &&
        response.headers.get("x-ratelimit-remaining") === "0");
    const reason =
      isRecord(payload) && typeof payload.message === "string"
        ? payload.message
        : `GitHub returned HTTP ${response.status}.`;

    throw new GitHubRepositoryFetchError(
      reason,
      rateLimited
        ? "GitHub is rate-limiting requests right now. Showing featured projects."
        : "GitHub repositories are temporarily unavailable. Showing featured projects."
    );
  }

  if (!Array.isArray(payload)) {
    throw new GitHubRepositoryFetchError(
      "GitHub returned an unexpected repository response.",
      "GitHub repositories are temporarily unavailable. Showing featured projects."
    );
  }

  return payload
    .map(normalizeRepository)
    .filter((repository): repository is GitHubRepository => repository !== null);
}

export async function fetchGitHubRepositories(): Promise<GitHubRepository[]> {
  const repositories: GitHubRepository[] = [];

  for (let page = 1; ; page += 1) {
    const batch = await fetchRepositoryPage(page);
    repositories.push(...batch);
    if (batch.length < PAGE_SIZE) return repositories;
  }
}
