import { Suspense } from "react";
import LocationHeader from "@/components/LocationHeader";
import ProjectBrowser from "@/components/ProjectBrowser";
import { getProjectCatalog } from "@/lib/projects";

export const metadata = {
  title: "Projects | Rohit Sakhalkar",
  description:
    "Explore four featured projects and Rohit's other public GitHub repositories.",
};

export default function ProjectsPage() {
  return (
    <div className="location-scene mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <LocationHeader
        sector="01 / 05"
        name="Projects"
        title="Selected projects and repositories"
        description="Four selected projects lead, followed by public GitHub repositories. Search and combine technology, category, and status filters, then choose a sort order."
      />
      <Suspense fallback={<ProjectBrowserFallback />}>
        <ProjectCatalogSection />
      </Suspense>
    </div>
  );
}

async function ProjectCatalogSection() {
  const { projects, error } = await getProjectCatalog();
  return <ProjectBrowser projects={projects} error={error} />;
}

function ProjectBrowserFallback() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading project collection"
      className="space-y-5"
    >
      <p role="status" className="font-mono text-xs text-zinc-400">
        Loading project index from GitHub...
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-20 animate-pulse rounded-lg border border-zinc-800 bg-[#101720] motion-reduce:animate-none"
          />
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="h-64 animate-pulse rounded-xl border border-zinc-800 bg-[#101720] motion-reduce:animate-none"
          />
        ))}
      </div>
    </section>
  );
}
