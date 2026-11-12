"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { filterAndSortProjects } from "@/lib/project-catalog";
import type { Project, ProjectFilters } from "@/lib/project-types";

type ProjectBrowserProps = {
  projects: Project[];
  error: string | null;
};

const SORT_OPTIONS: { value: ProjectFilters["sort"]; label: string }[] = [
  { value: "featured", label: "Featured first" },
  { value: "recent", label: "Recently updated" },
  { value: "stars", label: "Most stars" },
  { value: "alphabetical", label: "Alphabetical" },
];

export default function ProjectBrowser({
  projects,
  error,
}: ProjectBrowserProps) {
  const [query, setQuery] = useState("");
  const [technology, setTechnology] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState<ProjectFilters["sort"]>("featured");

  const technologies = useMemo(
    () =>
      Array.from(new Set(projects.flatMap((project) => project.technologies)))
        .filter(Boolean)
        .sort((left, right) => left.localeCompare(right)),
    [projects]
  );
  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          projects
            .map((project) => project.category)
            .filter((value): value is string => value !== null)
        )
      ).sort((left, right) => left.localeCompare(right)),
    [projects]
  );
  const statuses = useMemo(
    () =>
      Array.from(
        new Set(
          projects
            .map((project) => project.status)
            .filter((value): value is string => value !== null)
        )
      ).sort((left, right) => left.localeCompare(right)),
    [projects]
  );

  const visibleProjects = useMemo(
    () =>
      filterAndSortProjects(projects, {
        query,
        technologies: technology ? [technology] : [],
        category,
        status,
        sort,
      }),
    [projects, query, technology, category, status, sort]
  );
  const featured = visibleProjects.filter(
    (project) => project.featuredPriority !== null
  );
  const otherRepositories = visibleProjects.filter(
    (project) => project.featuredPriority === null
  );
  const hasFilters = Boolean(query || technology || category || status);

  function clearFilters() {
    setQuery("");
    setTechnology("");
    setCategory("");
    setStatus("");
    setSort("featured");
  }

  return (
    <div className="space-y-7">
      {error && (
        <p
          role="status"
          className="rounded-lg border border-amber-900/60 bg-amber-950/20 px-4 py-3 text-sm text-amber-200"
        >
          {error}
        </p>
      )}

      <section
        aria-label="Filter projects and repositories"
        className="rounded-xl border border-zinc-800 bg-[#101720] p-4 sm:p-5"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="sm:col-span-2 lg:col-span-2">
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, description, technology..."
              className="min-h-11 w-full rounded-lg border border-zinc-700 bg-[#0b1118] px-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-900/60"
            />
          </label>

          <FilterSelect
            label="Technology"
            value={technology}
            onChange={setTechnology}
            options={technologies}
          />
          <FilterSelect
            label="Category"
            value={category}
            onChange={setCategory}
            options={categories}
          />
          <FilterSelect
            label="Status"
            value={status}
            onChange={setStatus}
            options={statuses}
          />
          <label>
            <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Sort
            </span>
            <select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value as ProjectFilters["sort"])
              }
              className="min-h-11 w-full rounded-lg border border-zinc-700 bg-[#0b1118] px-3 text-sm text-zinc-200 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-900/60"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800 pt-4">
          <p aria-live="polite" className="text-sm text-zinc-400">
            <span className="font-semibold text-zinc-100">
              {visibleProjects.length}
            </span>{" "}
            {visibleProjects.length === 1 ? "project" : "projects"} found
            <span className="mx-2 text-zinc-700">/</span>
            {featured.length} featured
            <span className="mx-2 text-zinc-700">/</span>
            {otherRepositories.length} other repositories
          </p>
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="min-h-10 rounded-md border border-zinc-700 px-3 text-xs text-zinc-300 hover:border-emerald-800 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Clear filters
            </button>
          )}
        </div>

        {hasFilters && (
          <div
            aria-label="Active filters"
            className="mt-3 flex flex-wrap gap-2"
          >
            {query && (
              <ActiveFilter
                label={`Search: ${query}`}
                onRemove={() => setQuery("")}
              />
            )}
            {technology && (
              <ActiveFilter
                label={`Technology: ${technology}`}
                onRemove={() => setTechnology("")}
              />
            )}
            {category && (
              <ActiveFilter
                label={`Category: ${category}`}
                onRemove={() => setCategory("")}
              />
            )}
            {status && (
              <ActiveFilter
                label={`Status: ${status}`}
                onRemove={() => setStatus("")}
              />
            )}
          </div>
        )}
      </section>

      {visibleProjects.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-700 bg-[#0b1118] px-5 py-12 text-center">
          <h2 className="text-lg font-semibold text-zinc-100">
            No projects match these filters
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Try a different search or clear the active filters.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 min-h-11 rounded-lg border border-zinc-700 px-4 text-sm text-zinc-200 hover:border-emerald-800 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          {featured.length > 0 && (
            <section aria-labelledby="featured-projects-heading">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                    Curated work / fixed priority
                  </p>
                  <h2
                    id="featured-projects-heading"
                    className="mt-1 text-xl font-semibold text-zinc-100"
                  >
                    Featured projects
                  </h2>
                </div>
                <span className="font-mono text-[10px] text-zinc-600">
                  {featured.length} / 4
                </span>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {featured.map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}

          {otherRepositories.length > 0 && (
            <section aria-labelledby="other-repositories-heading">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                    GitHub / public repositories
                  </p>
                  <h2
                    id="other-repositories-heading"
                    className="mt-1 text-xl font-semibold text-zinc-100"
                  >
                    Other repositories
                  </h2>
                </div>
                <span className="font-mono text-[10px] text-zinc-600">
                  Updated from GitHub
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {otherRepositories.map((project) => (
                  <RepositoryCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label>
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-zinc-500">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 w-full rounded-lg border border-zinc-700 bg-[#0b1118] px-3 text-sm text-zinc-200 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-900/60"
      >
        <option value="">
          {label === "Technology"
            ? "All technologies"
            : label === "Category"
              ? "All categories"
              : "All statuses"}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ActiveFilter({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onRemove}
      className="inline-flex min-h-9 items-center gap-2 rounded-full border border-emerald-900/70 bg-emerald-950/30 px-3 text-xs text-emerald-200 hover:border-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      aria-label={`Remove ${label} filter`}
    >
      {label} <span aria-hidden="true">×</span>
    </button>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-emerald-950/80 bg-[#101720] transition-colors hover:border-emerald-800">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-800 bg-[#0d1718] px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
          Featured project / 0{project.featuredPriority}
        </span>
        {project.archived && <ArchivedBadge />}
        {project.status && (
          <span className="rounded-full border border-amber-900/70 px-2.5 py-1 font-mono text-[10px] text-amber-200">
            {project.status}
          </span>
        )}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            {project.category && (
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {project.category}
              </p>
            )}
            <h3 className="mt-1 text-xl font-semibold text-zinc-100">
              {project.name}
            </h3>
          </div>
          {project.language && (
            <span className="rounded-md border border-zinc-700 px-2.5 py-1 font-mono text-[10px] text-zinc-300">
              {project.language}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          {project.description}
        </p>
        <TagList items={project.technologies} />
        {(project.stars !== null || project.forks !== null) && (
          <RepositoryStats stars={project.stars} forks={project.forks} />
        )}
        <div className="mt-5 flex flex-wrap gap-4 border-t border-zinc-800 pt-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-zinc-100 underline decoration-zinc-700 underline-offset-4 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            Additional details
          </Link>
          <ExternalRepositoryLink project={project} />
          {project.homepageUrl && (
            <a
              href={project.homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
            >
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function RepositoryCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-800 bg-[#101720] p-4 transition-colors hover:border-zinc-600">
      <div className="flex items-start justify-between gap-3">
        <div>
          {project.category && (
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              {project.category}
            </p>
          )}
          <h3 className="mt-1 wrap-break-word text-base font-semibold text-zinc-100">
            {project.name}
          </h3>
        </div>
        {project.archived && <ArchivedBadge />}
      </div>
      <p className="mt-2 line-clamp-3 min-h-15 text-sm leading-5 text-zinc-400">
        {project.description ?? "No description provided by GitHub."}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
        {project.language && (
          <span className="rounded border border-zinc-800 px-2 py-1">
            {project.language}
          </span>
        )}
        {project.updatedAt && (
          <span>Updated {formatDate(project.updatedAt)}</span>
        )}
      </div>
      <TagList items={project.topics} compact />
      <div className="mt-auto">
        <RepositoryStats stars={project.stars} forks={project.forks} />
        <div className="mt-4 flex flex-wrap gap-4 border-t border-zinc-800 pt-3 text-xs">
          <Link
            href={`/projects/${project.slug}`}
            className="text-zinc-300 underline decoration-zinc-700 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            Repository details
          </Link>
          <ExternalRepositoryLink project={project} />
        </div>
      </div>
    </article>
  );
}

function TagList({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  if (items.length === 0) return null;
  const visibleItems = compact ? items.slice(0, 5) : items;

  return (
    <ul className="mt-4 flex flex-wrap gap-1.5">
      {visibleItems.map((item) => (
        <li
          key={item}
          className="rounded border border-zinc-800 bg-[#0b1118] px-2 py-1 font-mono text-[10px] text-zinc-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function RepositoryStats({
  stars,
  forks,
}: {
  stars: number | null;
  forks: number | null;
}) {
  if (stars === null && forks === null) return null;

  return (
    <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] text-zinc-500">
      {stars !== null && <span>★ {stars} stars</span>}
      {forks !== null && <span>⑂ {forks} forks</span>}
    </p>
  );
}

function ExternalRepositoryLink({ project }: { project: Project }) {
  return (
    <a
      href={project.repositoryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-300 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
    >
      View on GitHub <span aria-hidden="true">↗</span>
    </a>
  );
}

function ArchivedBadge() {
  return (
    <span className="rounded-full border border-amber-900/70 px-2.5 py-1 font-mono text-[10px] text-amber-200">
      Archived
    </span>
  );
}

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "date unavailable";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
