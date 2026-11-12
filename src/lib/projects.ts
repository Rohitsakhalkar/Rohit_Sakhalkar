import { curatedProjects } from "@/lib/curated-projects";
import { buildProjectCollection } from "@/lib/project-catalog";
import { fetchGitHubRepositories } from "@/lib/github-repositories";
import type { Project } from "@/lib/project-types";

export type ProjectCatalogResult = {
  projects: Project[];
  error: string | null;
  repositoryCount: number | null;
};

export function getCuratedProject(slug: string): Project | undefined {
  return buildProjectCollection(curatedProjects, [], "Rohitsakhalkar").find(
    (project) => project.slug === slug
  );
}

export async function getProjectCatalog(): Promise<ProjectCatalogResult> {
  try {
    const repositories = await fetchGitHubRepositories();
    return {
      projects: buildProjectCollection(
        curatedProjects,
        repositories,
        "Rohitsakhalkar"
      ),
      error: null,
      repositoryCount: repositories.length,
    };
  } catch (error) {
    console.error("Unable to load public GitHub repositories.", error);
    return {
      projects: buildProjectCollection(curatedProjects, [], "Rohitsakhalkar"),
      error:
        error instanceof Error && "publicMessage" in error
          ? String(error.publicMessage)
          : "GitHub repositories are temporarily unavailable. Showing featured projects.",
      repositoryCount: null,
    };
  }
}
