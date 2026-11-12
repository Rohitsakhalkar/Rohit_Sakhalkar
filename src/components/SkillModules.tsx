"use client";

import Link from "next/link";
import { useState } from "react";
import { projects, skillGroups, technologyNotes } from "@/lib/data";

export default function SkillModules() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {skillGroups.map((group, groupIndex) => (
        <section
          key={group.name}
          className="rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-500">
                Workstation {String(groupIndex + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-zinc-100">
                {group.name}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
                {group.description}
              </p>
            </div>
            <span aria-hidden="true" className="font-mono text-xs text-zinc-600">
              {String(group.technologies.length).padStart(2, "0")} modules
            </span>
          </div>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {group.technologies.map((technology) => {
              const selectionId = `${groupIndex}-${technology}`;
              const isSelected = selected === selectionId;
              const panelId = `skill-${groupIndex}-${technology
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`;
              const relatedProjects = projects.filter((project) => {
                const searchable = [
                  ...project.tags,
                  ...project.focus,
                  project.description,
                ]
                  .join(" ")
                  .toLowerCase();
                return searchable.includes(technology.toLowerCase());
              });

              return (
                <li key={technology}>
                  <button
                    type="button"
                    aria-expanded={isSelected}
                    aria-controls={panelId}
                    onClick={() =>
                      setSelected((current) =>
                        current === selectionId ? null : selectionId
                      )
                    }
                    className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
                      isSelected
                        ? "border-emerald-700 bg-emerald-950/30 text-emerald-200"
                        : "border-zinc-800 bg-[#0b1118] text-zinc-300 hover:border-zinc-600 hover:text-white"
                    }`}
                  >
                    <span>{technology}</span>
                    <span aria-hidden="true" className="font-mono text-xs text-zinc-500">
                      {isSelected ? "−" : "+"}
                    </span>
                  </button>
                  {isSelected && (
                    <div
                      id={panelId}
                      className="mt-2 rounded-lg border border-zinc-800 bg-[#0b1118] p-3"
                    >
                      <p className="text-xs leading-5 text-zinc-300">
                        {technologyNotes[technology] ??
                          `${technology} is part of my current technical toolkit.`}
                      </p>
                      {relatedProjects.length > 0 && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {relatedProjects.map((project) => (
                            <li key={project.id}>
                              <Link
                                href={`/projects/${project.slug}`}
                                className="text-xs text-emerald-300 underline decoration-emerald-900 underline-offset-4 hover:text-emerald-200"
                              >
                                {project.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
