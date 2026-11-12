import assert from "node:assert/strict";
import test from "node:test";
import {
  buildProjectCollection,
  filterAndSortProjects,
  normalizeRepositoryName,
  normalizeRepositoryUrl,
} from "../src/lib/project-catalog.ts";
import { fetchGitHubRepositories } from "../src/lib/github-repositories.ts";

function curatedProject({
  id,
  name = id,
  url,
  priority,
  category = "Backend",
  technologies = ["Python"],
  status = "Built",
}) {
  return {
    id,
    slug: id,
    name,
    description: `Curated description for ${name}.`,
    repositoryUrl: url,
    technologies,
    topics: [],
    category,
    status,
    featuredPriority: priority,
    dossier: {
      problem: "Verified problem.",
      architecture: "Verified architecture.",
      implemented: ["Verified feature."],
      inProgress: [],
      planned: [],
      notes: [],
    },
  };
}

function repository(overrides = {}) {
  const name = overrides.name ?? "sample";
  return {
    id: 1,
    name,
    description: "A sample backend API.",
    htmlUrl: `https://github.com/owner/${name}`,
    homepageUrl: null,
    language: "Python",
    topics: ["api"],
    stars: 2,
    forks: 1,
    updatedAt: "2026-01-01T00:00:00Z",
    createdAt: "2025-01-01T00:00:00Z",
    defaultBranch: "main",
    archived: false,
    isFork: false,
    isPrivate: false,
    isDisabled: false,
    size: 12,
    ...overrides,
  };
}

test("normalizes GitHub URL variants and repository names", () => {
  const expected = "https://github.com/rohit/get_it_done";
  assert.equal(
    normalizeRepositoryUrl("https://www.GitHub.com/Rohit/Get_It_Done.git/"),
    expected
  );
  assert.equal(normalizeRepositoryUrl("git@github.com:Rohit/Get_It_Done.git"), expected);
  assert.equal(normalizeRepositoryUrl("https://github.com/Rohit/Get_It_Done/tree/main"), expected);
  assert.equal(normalizeRepositoryName("https://github.com/Rohit/Get_It_Done.git/"), "get_it_done");
});

test("merges featured projects, deduplicates repositories, and retains curated data", () => {
  const curated = [
    curatedProject({
      id: "get-it-done",
      name: "Get It Done",
      url: "https://github.com/Owner/get_it_done",
      priority: 1,
      technologies: ["Python", "FastAPI"],
    }),
    curatedProject({
      id: "learnable",
      name: "LearnAble",
      url: "https://github.com/Owner/learnable.git",
      priority: 2,
      category: "Web Development",
      technologies: ["TypeScript", "Firebase"],
    }),
  ];
  const repositories = [
    repository({
      id: 10,
      name: "get_it_done",
      htmlUrl: "https://www.github.com/owner/get_it_done.git/",
      description: "Live description must not replace the curated one.",
      language: "Python",
      topics: ["fastapi"],
      stars: 4,
    }),
    repository({
      id: 11,
      name: "get_it_done",
      htmlUrl: "https://github.com/OWNER/GET_IT_DONE",
      stars: 99,
    }),
    repository({
      id: 12,
      name: "learnable",
      htmlUrl: "https://github.com/owner/renamed",
      topics: ["accessibility"],
      language: "TypeScript",
    }),
    repository({ id: 13, name: "UsefulTool" }),
  ];

  const projects = buildProjectCollection(curated, repositories, "owner");

  assert.deepEqual(
    projects.slice(0, 2).map((project) => project.name),
    ["Get It Done", "LearnAble"]
  );
  assert.equal(projects.filter((project) => project.name === "Get It Done").length, 1);
  assert.equal(projects[0].description, curated[0].description);
  assert.deepEqual(projects[0].technologies.slice(0, 2), ["Python", "FastAPI"]);
  assert.equal(projects[0].stars, 4);
  assert.equal(projects[0].source, "merged");
  assert.equal(projects[1].repositoryUrl, curated[1].repositoryUrl);
  assert.equal(projects[1].source, "merged");
  assert.equal(projects.at(-1).name, "UsefulTool");
});

test("keeps all curated projects when GitHub is unavailable", () => {
  const curated = [
    curatedProject({ id: "first", url: "https://github.com/owner/first", priority: 1 }),
    curatedProject({ id: "second", url: "https://github.com/owner/second", priority: 2 }),
    curatedProject({ id: "third", url: "https://github.com/owner/third", priority: 3 }),
    curatedProject({ id: "fourth", url: "https://github.com/owner/fourth", priority: 4 }),
  ];

  const projects = buildProjectCollection(curated, [], "owner");

  assert.deepEqual(
    projects.map((project) => project.id),
    ["first", "second", "third", "fourth"]
  );
  assert.ok(projects.every((project) => project.stars === null));
});

test("filters out private, forked, profile, empty, and disabled repos but labels archived repos", () => {
  const archived = repository({
    id: 20,
    name: "archived-project",
    description: null,
    language: null,
    archived: true,
    topics: [],
  });
  const projects = buildProjectCollection([], [
    repository({ id: 21, name: "private-project", isPrivate: true }),
    repository({ id: 22, name: "forked-project", isFork: true }),
    repository({ id: 23, name: "owner" }),
    repository({ id: 24, name: "empty-project", size: 0 }),
    repository({ id: 25, name: "disabled-project", isDisabled: true }),
    archived,
  ], "owner");

  assert.deepEqual(projects.map((project) => project.name), ["archived-project"]);
  assert.equal(projects[0].description, null);
  assert.equal(projects[0].language, null);
  assert.equal(projects[0].archived, true);
  assert.deepEqual(projects[0].technologies, []);
});

test("searches combined metadata and applies technology, category, and status filters together", () => {
  const projects = buildProjectCollection(
    [
      curatedProject({
        id: "api-project",
        name: "API Project",
        url: "https://github.com/owner/api-project",
        priority: 1,
        category: "Backend",
        technologies: ["Python", "FastAPI"],
        status: "In progress",
      }),
    ],
    [
      repository({
        id: 30,
        name: "frontend-project",
        description: "An accessible web interface.",
        language: "TypeScript",
        topics: ["accessibility", "frontend"],
      }),
    ],
    "owner"
  );

  assert.equal(
    filterAndSortProjects(projects, {
      query: "API FastAPI",
      technologies: ["Python"],
      category: "Backend",
      status: "In progress",
      sort: "featured",
    }).length,
    1
  );
  assert.equal(
    filterAndSortProjects(projects, {
      query: "TypeScript accessibility",
      technologies: ["TypeScript"],
      category: "Web Development",
      status: "",
      sort: "featured",
    })[0].name,
    "frontend-project"
  );
  assert.equal(
    filterAndSortProjects(projects, {
      query: "not present",
      technologies: [],
      category: "",
      status: "",
      sort: "featured",
    }).length,
    0
  );
});

test("keeps curated priority first under every sort order", () => {
  const projects = buildProjectCollection(
    [
      curatedProject({ id: "second-featured", url: "https://github.com/owner/second", priority: 2, name: "Zeta" }),
      curatedProject({ id: "first-featured", url: "https://github.com/owner/first", priority: 1, name: "Alpha" }),
    ],
    [
      repository({
        id: 40,
        name: "newest",
        updatedAt: "2026-03-01T00:00:00Z",
        stars: 0,
      }),
      repository({
        id: 41,
        name: "most-stars",
        updatedAt: "2025-03-01T00:00:00Z",
        stars: 100,
      }),
      repository({
        id: 42,
        name: "AlphabeticallyFirst",
        stars: 1,
      }),
    ],
    "owner"
  );

  for (const sort of ["featured", "recent", "stars", "alphabetical"]) {
    const sorted = filterAndSortProjects(projects, {
      query: "",
      technologies: [],
      category: "",
      status: "",
      sort,
    });
    assert.deepEqual(
      sorted.slice(0, 2).map((project) => project.id),
      ["first-featured", "second-featured"]
    );
  }

  assert.equal(
    filterAndSortProjects(projects, {
      query: "",
      technologies: [],
      category: "",
      status: "",
      sort: "recent",
    })[2].name,
    "newest"
  );
  assert.equal(
    filterAndSortProjects(projects, {
      query: "",
      technologies: [],
      category: "",
      status: "",
      sort: "stars",
    })[2].name,
    "most-stars"
  );
});

test("aborts stalled GitHub repository requests", async () => {
  const originalFetch = globalThis.fetch;
  const originalTimeout = AbortSignal.timeout;
  AbortSignal.timeout = () =>
    AbortSignal.abort(new DOMException("Test timeout", "TimeoutError"));
  globalThis.fetch = async (_url, options) => {
    assert.equal(options.signal.aborted, true);
    throw options.signal.reason;
  };

  try {
    await assert.rejects(fetchGitHubRepositories(), { name: "TimeoutError" });
  } finally {
    globalThis.fetch = originalFetch;
    AbortSignal.timeout = originalTimeout;
  }
});
