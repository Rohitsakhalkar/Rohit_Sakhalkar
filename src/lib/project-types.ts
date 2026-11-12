export type ProjectDossier = {
  problem: string;
  architecture: string;
  implemented: string[];
  inProgress: string[];
  planned: string[];
  testing?: string;
  notes: string[];
};

export type CuratedProject = {
  id: string;
  slug: string;
  name: string;
  description: string;
  repositoryUrl: string;
  homepageUrl?: string;
  technologies: string[];
  topics: string[];
  category: string;
  status?: string;
  featuredPriority: number;
  dossier: ProjectDossier;
};

export type GitHubRepository = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepageUrl: string | null;
  language: string | null;
  topics: string[];
  stars: number | null;
  forks: number | null;
  updatedAt: string | null;
  createdAt: string | null;
  defaultBranch: string | null;
  archived: boolean;
  isFork: boolean;
  isPrivate: boolean;
  isDisabled: boolean;
  size: number | null;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  repositoryUrl: string;
  homepageUrl: string | null;
  technologies: string[];
  topics: string[];
  category: string | null;
  status: string | null;
  featuredPriority: number | null;
  language: string | null;
  stars: number | null;
  forks: number | null;
  updatedAt: string | null;
  createdAt: string | null;
  defaultBranch: string | null;
  archived: boolean;
  isFork: boolean;
  source: "curated" | "github" | "merged";
  dossier?: ProjectDossier;
};

export type ProjectFilters = {
  query: string;
  technologies: string[];
  category: string;
  status: string;
  sort: "featured" | "recent" | "stars" | "alphabetical";
};
