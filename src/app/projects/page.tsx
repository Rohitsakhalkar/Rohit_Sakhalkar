import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Rohit Sakhalkar",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
      <div className="font-mono">
        <div className="text-zinc-500 text-xs mb-1">$ ls ~/projects</div>
        <h1 className="text-2xl font-bold text-zinc-100">Projects</h1>
        <p className="text-zinc-500 text-sm mt-1">
          Things I built. Hover a card for a terminal preview.
        </p>
      </div>

      <ProjectCard />
    </div>
  );
}
