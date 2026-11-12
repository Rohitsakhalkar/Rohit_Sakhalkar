"use client";

import { projects } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectCard({ id }: { id?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  if (id) {
    // Single card mode
    const p = projects.find((pr) => pr.id === id);
    if (!p) return null;
    return <Card project={p} hovered={hovered} setHovered={setHovered} />;
  }

  return (
    <div className="space-y-6">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 font-mono text-xs">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded border transition-colors ${
              filter === tag
                ? "border-emerald-500 text-emerald-400 bg-emerald-950"
                : "border-zinc-700 text-zinc-500 hover:border-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <Card key={p.id} project={p} hovered={hovered} setHovered={setHovered} />
        ))}
      </div>
    </div>
  );
}

function Card({
  project: p,
  hovered,
  setHovered,
}: {
  project: (typeof projects)[0];
  hovered: string | null;
  setHovered: (id: string | null) => void;
}) {
  return (
    <div
      className="relative group border border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 transition-all duration-300 hover:border-zinc-600"
      onMouseEnter={() => setHovered(p.id)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Default view */}
      <div
        className={`p-5 transition-opacity duration-200 ${
          hovered === p.id ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-mono font-bold text-zinc-100">{p.title}</h3>
          {p.featured && (
            <span className="text-xs text-emerald-500 font-mono border border-emerald-800 rounded px-1.5 py-0.5">
              featured
            </span>
          )}
        </div>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{p.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-zinc-500 border border-zinc-800 rounded px-1.5 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-xs font-mono">
          <Link
            href={p.github}
            target="_blank"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            GitHub ↗
          </Link>
          {p.live && (
            <Link
              href={p.live}
              target="_blank"
              className="text-emerald-600 hover:text-emerald-400 transition-colors"
            >
              Live ↗
            </Link>
          )}
        </div>
      </div>

      {/* Terminal hover overlay */}
      <div
        className={`absolute inset-0 bg-zinc-950 p-4 font-mono text-xs transition-opacity duration-200 ${
          hovered === p.id ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-zinc-500 mb-2 text-[10px]">▶ {p.title}</div>
        {p.terminalPreview.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("$")
                ? "text-emerald-400"
                : line.startsWith(">")
                ? "text-zinc-300"
                : "text-zinc-500"
            }
          >
            {line}
          </div>
        ))}
        <div className="mt-3 pt-3 border-t border-zinc-800 flex gap-3">
          <Link
            href={p.github}
            target="_blank"
            className="text-zinc-500 hover:text-zinc-200 transition-colors"
          >
            GitHub ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
