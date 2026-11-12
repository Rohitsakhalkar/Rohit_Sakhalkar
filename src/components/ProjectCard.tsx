"use client";

import { projects } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";

const filters = [
  "All",
  "Backend",
  "Python",
  "Automation",
  "Fundamentals",
] as const;
type Project = (typeof projects)[number];

export default function ProjectCard({
  featuredOnly = false,
}: {
  featuredOnly?: boolean;
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visibleProjects = projects.filter(
    (project) =>
      (!featuredOnly || project.featured) &&
      (filter === "All" ||
        project.category === filter ||
        project.tags.includes(filter))
  );

  return (
    <div className="space-y-5">
      {!featuredOnly && (
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                filter === item
                  ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-300"
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectTile({ project }: { project: Project }) {
  const artifactLabel =
    project.id === "get_it_done"
      ? "API / SOCIAL"
      : project.id === "forge"
        ? "PY / TOOLING"
        : "DATA / TESTS";

  return (
    <article className="project-dossier flex h-full flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[#101720] transition-colors hover:border-zinc-600">
      <div
        className={`project-art project-art-${project.id} relative flex h-28 items-center justify-between overflow-hidden border-b border-zinc-800 px-5`}
        aria-hidden="true"
      >
        <span className="relative z-10 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
          {artifactLabel}
        </span>
        <span className="artifact-mark font-mono text-4xl font-semibold">
          {project.id === "get_it_done"
            ? "G"
            : project.id === "forge"
              ? "F"
              : "DS"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs text-emerald-400">
            {project.category}
          </span>
          <span className="rounded-full border border-zinc-700 px-2.5 py-1 text-xs text-zinc-300">
            {project.status}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {project.description}
        </p>

        <h4 className="mt-4 font-mono text-[10px] uppercase tracking-wider text-zinc-500">
          Project focus
        </h4>
        <ul className="mt-2 space-y-1.5 text-sm text-zinc-300">
          {project.focus.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-emerald-500">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-800 px-2 py-1 font-mono text-[11px] text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <div className="mt-5 flex flex-wrap gap-4 border-t border-zinc-800 pt-4 text-sm">
            <Link
              href={`/projects/${project.slug}`}
              className="text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              Open dossier
            </Link>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 underline decoration-emerald-900 underline-offset-4 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline decoration-emerald-900 underline-offset-4 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
              >
                Live demo <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
