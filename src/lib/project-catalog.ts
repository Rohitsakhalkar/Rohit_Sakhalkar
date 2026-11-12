import type {
  CuratedProject,
  GitHubRepository,
  Project,
  ProjectFilters,
} from "./project-types";

const EMPTY_FILTERS: ProjectFilters = {
  query: "",
  technologies: [],
  category: "",
  status: "",
  sort: "featured",
};

export function normalizeRepositoryUrl(value: string): string {
  const trimmed = value.trim();
  const sshMatch = trimmed.match(/^(?:git@|ssh:\/\/git@)github\.com[:/](.+)$/i);
  const candidate = sshMatch ? `https://github.com/${sshMatch[1]}` : trimmed;

  try {
    const url = new URL(
      candidate.includes("://") ? candidate : `https://${candidate}`
    );
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    const segments = url.pathname
      .split("/")
      .filter(Boolean)
      .map((segment) => segment.replace(/\.git$/i, ""));

    if (host === "github.com" && segments.length >= 2) {
      return `https://github.com/${segments[0].toLowerCase()}/${segments[1].toLowerCase()}`;
    }

    return `${host}/${segments.map((segment) => segment.toLowerCase()).join("/")}`;
  } catch {
    return candidate
      .replace(/\.git\/?$/i, "")
      .replace(/\/+$/, "")
      .toLowerCase();
  }
}

export function normalizeRepositoryName(value: string): string {
  const leaf = value
    .trim()
    .replace(/\.git\/?$/i, "")
    .split(/[/:]/)
    .filter(Boolean)
    .pop();

  return (leaf ?? "").toLowerCase();
}

function unique(values: string[]): string[] {
  const seen = new Set<string>();
  return values.filter((value) => {
    const normalized = value.trim().toLowerCase();
    if (!normalized || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function deriveCategory(repository: GitHubRepository): string | null {
  const description = repository.description?.toLowerCase() ?? "";
  const topics = new Set(repository.topics.map((topic) => topic.toLowerCase()));

  if (
    topics.has("data-structures") ||
    /\bdata structures?\b|\balgorithms?\b/.test(description)
  ) {
    return "Data Structures";
  }
  if (
    topics.has("automation") ||
    /\bautomation\b|\bcommand[- ]line\b|\bcli tool\b/.test(description)
  ) {
    return "Automation";
  }
  if (
    topics.has("developer-tools") ||
    /\bdeveloper tools?\b|\bdevelopment tools?\b/.test(description)
  ) {
    return "Developer Tools";
  }
  if (
    topics.has("ai") ||
    topics.has("machine-learning") ||
    /\bmachine learning\b|\bdeep learning\b|\bartificial intelligence\b/.test(
      description
    )
  ) {
    return "AI / ML";
  }
  if (
    topics.has("backend") ||
    topics.has("api") ||
    /\bbackend\b|\brest api\b|\bapi\b|\bserver-side\b/.test(description)
  ) {
    return "Backend";
  }
  if (
    (["javascript", "typescript", "html", "css"].includes(
      repository.language?.toLowerCase() ?? ""
    ) &&
      /\bweb\b|\bwebsite\b|\bweb app\b|\bfrontend\b|\buser interface\b|\bui\b|\bportfolio\b/.test(
        description
      )) ||
    topics.has("web-development") ||
    topics.has("frontend")
  ) {
    return "Web Development";
  }

  return null;
}

function curatedMatch(
  curated: CuratedProject,
  repositories: GitHubRepository[]
): GitHubRepository | undefined {
  const normalizedUrl = normalizeRepositoryUrl(curated.repositoryUrl);
  const exactMatch = repositories.find(
    (repository) =>
      normalizeRepositoryUrl(repository.htmlUrl) === normalizedUrl
  );
  if (exactMatch) return exactMatch;

  const repositoryName = normalizeRepositoryName(curated.repositoryUrl);
  return repositories.find(
    (repository) =>
      normalizeRepositoryName(repository.name) === repositoryName
  );
}

function fromCurated(
  curated: CuratedProject,
  repository?: GitHubRepository
): Project {
  return {
    id: curated.id,
    slug: curated.slug,
    name: curated.name,
    description: curated.description,
    repositoryUrl: curated.repositoryUrl,
    homepageUrl: curated.homepageUrl ?? repository?.homepageUrl ?? null,
    technologies: unique([
      ...curated.technologies,
      ...(repository?.language ? [repository.language] : []),
    ]),
    topics: unique([...curated.topics, ...(repository?.topics ?? [])]),
    category: curated.category,
    status: curated.status ?? null,
    featuredPriority: curated.featuredPriority,
    language: repository?.language ?? null,
    stars: repository?.stars ?? null,
    forks: repository?.forks ?? null,
    updatedAt: repository?.updatedAt ?? null,
    createdAt: repository?.createdAt ?? null,
    defaultBranch: repository?.defaultBranch ?? null,
    archived: repository?.archived ?? false,
    isFork: repository?.isFork ?? false,
    source: repository ? "merged" : "curated",
    dossier: curated.dossier,
  };
}

function fromGitHub(
  repository: GitHubRepository,
  usedSlugs: Set<string>
): Project {
  const baseSlug = slugify(repository.name) || String(repository.id);
  const slug = usedSlugs.has(baseSlug)
    ? `${baseSlug}-${repository.id}`
    : baseSlug;
  usedSlugs.add(slug);

  return {
    id: `github-${repository.id}`,
    slug,
    name: repository.name,
    description: repository.description?.trim() || null,
    repositoryUrl: repository.htmlUrl,
    homepageUrl: repository.homepageUrl,
    technologies: unique([
      ...(repository.language ? [repository.language] : []),
      ...repository.topics,
    ]),
    topics: unique(repository.topics),
    category: deriveCategory(repository),
    status: null,
    featuredPriority: null,
    language: repository.language,
    stars: repository.stars,
    forks: repository.forks,
    updatedAt: repository.updatedAt,
    createdAt: repository.createdAt,
    defaultBranch: repository.defaultBranch,
    archived: repository.archived,
    isFork: repository.isFork,
    source: "github",
  };
}

export function buildProjectCollection(
  curatedProjects: CuratedProject[],
  repositories: GitHubRepository[],
  owner: string
): Project[] {
  const uniqueRepositories: GitHubRepository[] = [];
  const seenUrls = new Set<string>();
  const seenNames = new Set<string>();

  for (const repository of repositories) {
    const normalizedUrl = normalizeRepositoryUrl(repository.htmlUrl);
    const normalizedName = normalizeRepositoryName(repository.name);
    if (
      !normalizedUrl ||
      seenUrls.has(normalizedUrl) ||
      seenNames.has(normalizedName)
    ) {
      continue;
    }

    seenUrls.add(normalizedUrl);
    seenNames.add(normalizedName);
    uniqueRepositories.push(repository);
  }

  const matchedIds = new Set<number>();
  const featured = [...curatedProjects]
    .sort((left, right) => left.featuredPriority - right.featuredPriority)
    .map((curated) => {
      const match = curatedMatch(curated, uniqueRepositories);
      if (match) matchedIds.add(match.id);
      return fromCurated(curated, match);
    });

  const usedSlugs = new Set(featured.map((project) => project.slug));
  const otherRepositories = uniqueRepositories
    .filter((repository) => {
      if (
        matchedIds.has(repository.id) ||
        repository.isPrivate ||
        repository.isDisabled ||
        repository.isFork ||
        repository.size === 0 ||
        repository.name.toLowerCase() === owner.toLowerCase()
      ) {
        return false;
      }

      return true;
    })
    .map((repository) => fromGitHub(repository, usedSlugs));

  return [...featured, ...otherRepositories];
}

function compareUpdated(left: Project, right: Project): number {
  if (!left.updatedAt && !right.updatedAt) return 0;
  if (!left.updatedAt) return 1;
  if (!right.updatedAt) return -1;
  return right.updatedAt.localeCompare(left.updatedAt);
}

function compareStars(left: Project, right: Project): number {
  if (left.stars === null && right.stars === null) return 0;
  if (left.stars === null) return 1;
  if (right.stars === null) return -1;
  return right.stars - left.stars;
}

export function filterAndSortProjects(
  projects: Project[],
  filters: ProjectFilters = EMPTY_FILTERS
): Project[] {
  const queryTerms = filters.query
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  return projects
    .filter((project) => {
      const searchable = [
        project.name,
        project.description ?? "",
        project.language ?? "",
        project.category ?? "",
        project.status ?? "",
        ...project.technologies,
        ...project.topics,
      ]
        .join(" ")
        .toLowerCase();

      if (!queryTerms.every((term) => searchable.includes(term))) return false;
      if (
        filters.technologies.length > 0 &&
        !filters.technologies.every((technology) =>
          project.technologies.some(
            (item) => item.toLowerCase() === technology.toLowerCase()
          )
        )
      ) {
        return false;
      }
      if (filters.category && project.category !== filters.category) return false;
      if (filters.status && project.status !== filters.status) return false;
      return true;
    })
    .sort((left, right) => {
      const leftPriority = left.featuredPriority;
      const rightPriority = right.featuredPriority;
      if (leftPriority !== rightPriority) {
        if (leftPriority === null) return 1;
        if (rightPriority === null) return -1;
        return leftPriority - rightPriority;
      }

      let result = 0;
      switch (filters.sort) {
        case "recent":
          result = compareUpdated(left, right);
          break;
        case "stars":
          result = compareStars(left, right);
          break;
        case "alphabetical":
          result = left.name.localeCompare(right.name);
          break;
        default:
          break;
      }

      return result || left.name.localeCompare(right.name);
    });
}
