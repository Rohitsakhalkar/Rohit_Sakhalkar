import ProjectCard from "@/components/ProjectCard";
import LocationHeader from "@/components/LocationHeader";

export const metadata = {
  title: "Project District | Rohit Sakhalkar",
  description:
    "Explore Rohit's Python backend, automation, and data structures projects.",
};

export default function ProjectsPage() {
  return (
    <div className="location-scene mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <LocationHeader
        sector="01 / 05"
        name="Project District"
        title="Project dossiers"
        description="A field guide to the backend system, Python automation toolkit, and data structures package I’ve been working on. Select a dossier for its scope, status, and technical details."
      />
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Repository index / three projects
        </p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-amber-300">
          Get It Done / currently building
        </p>
      </div>
      <ProjectCard />
    </div>
  );
}
