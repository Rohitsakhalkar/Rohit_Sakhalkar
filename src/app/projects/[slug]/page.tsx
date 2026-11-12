import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { curatedProjects } from "@/lib/curated-projects";
import { getCuratedProject, getProjectCatalog } from "@/lib/projects";
import type { Project } from "@/lib/project-types";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return curatedProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCuratedProject(slug);

  return {
    title: project
      ? `${project.name} | Rohit Sakhalkar`
      : "GitHub repository | Rohit Sakhalkar",
    description:
      project?.description ??
      "A public GitHub repository by Rohit Sakhalkar.",
  };
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDossierFallback />}>
      <ProjectDetailsContent params={params} />
    </Suspense>
  );
}

async function ProjectDetailsContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const curatedProject = getCuratedProject(slug);
  const project =
    curatedProject ??
    (await getProjectCatalog()).projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return project.dossier ? (
    <CuratedDossier project={project} />
  ) : (
    <RepositoryDossier project={project} />
  );
}

function CuratedDossier({ project }: { project: Project }) {
  const dossier = project.dossier;
  if (!dossier) return null;

  return (
    <article className="location-scene mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <ProjectReturnLink />
      <header className="world-enter relative mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-6 -top-10 font-mono text-[8rem] font-bold leading-none text-zinc-800/35 sm:text-[12rem]">
          {project.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
            {project.category && (
              <span className="text-emerald-400">{project.category} project</span>
            )}
            {project.status && (
              <>
                <span aria-hidden="true" className="text-zinc-700">/</span>
                <span className="rounded-full border border-zinc-700 px-2 py-1 text-zinc-300">
                  {project.status}
                </span>
              </>
            )}
          </div>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            {project.description}
          </p>
          <TagList items={project.technologies} />
        </div>
      </header>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <DossierPanel title="Problem space" marker="01">
          <p className="text-sm leading-6 text-zinc-300">{dossier.problem}</p>
        </DossierPanel>
        <DossierPanel title="Technical approach" marker="02">
          <p className="text-sm leading-6 text-zinc-300">
            {dossier.architecture}
          </p>
        </DossierPanel>
      </div>

      <DossierPanel title="Implemented" marker="03" className="mt-4">
        <ul className="grid gap-3 sm:grid-cols-2">
          {dossier.implemented.map((feature) => (
            <li
              key={feature}
              className="flex gap-2 text-sm leading-6 text-zinc-300"
            >
              <span aria-hidden="true" className="text-emerald-400">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </DossierPanel>

      {(dossier.inProgress.length > 0 || dossier.planned.length > 0) && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {dossier.inProgress.length > 0 && (
            <DossierPanel title="In progress" marker="04">
              <FeatureList items={dossier.inProgress} marker="◷" />
            </DossierPanel>
          )}
          {dossier.planned.length > 0 && (
            <DossierPanel title="Planned" marker="05">
              <FeatureList items={dossier.planned} marker="○" />
            </DossierPanel>
          )}
        </div>
      )}

      {(dossier.testing || dossier.notes.length > 0) && (
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {dossier.testing && (
            <DossierPanel title="Testing" marker="06">
              <p className="text-sm leading-6 text-zinc-300">
                {dossier.testing}
              </p>
            </DossierPanel>
          )}
          {dossier.notes.length > 0 && (
            <DossierPanel title="Current notes" marker="07">
              <FeatureList items={dossier.notes} />
            </DossierPanel>
          )}
        </div>
      )}

      <ProjectActions project={project} />
    </article>
  );
}

function RepositoryDossier({ project }: { project: Project }) {
  const metadata = [
    { label: "Primary language", value: project.language ?? "Not specified" },
    { label: "Default branch", value: project.defaultBranch ?? "Not specified" },
    { label: "Created", value: formatDate(project.createdAt) },
    { label: "Last updated", value: formatDate(project.updatedAt) },
    ...(project.stars === null
      ? []
      : [{ label: "Stars", value: String(project.stars) }]),
    ...(project.forks === null
      ? []
      : [{ label: "Forks", value: String(project.forks) }]),
    ...(project.archived
      ? [{ label: "Repository status", value: "Archived" }]
      : []),
  ];

  return (
    <article className="location-scene mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <ProjectReturnLink />
      <header className="world-enter relative mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-8">
        <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
          GitHub repository
        </p>
        <h1 className="mt-3 wrap-break-word text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
          {project.description ?? "No description provided by GitHub."}
        </p>
        {project.archived && (
          <p className="mt-4 inline-flex rounded-full border border-amber-900/70 px-3 py-1 font-mono text-[10px] text-amber-200">
            Archived repository
          </p>
        )}
        <TagList items={project.topics} />
      </header>

      <DossierPanel title="Repository metadata" marker="01" className="mt-5">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metadata.map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                {item.label}
              </dt>
              <dd className="mt-1 wrap-break-word text-sm text-zinc-200">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </DossierPanel>

      <ProjectActions project={project} />
    </article>
  );
}

function ProjectReturnLink() {
  return (
    <Link
      href="/projects"
      className="inline-flex min-h-10 items-center gap-2 font-mono text-xs text-zinc-400 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
    >
      <span aria-hidden="true">←</span> Projects
    </Link>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={project.repositoryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-[#07100d] transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
      >
        View source on GitHub <span aria-hidden="true">↗</span>
      </a>
      {project.homepageUrl && (
        <a
          href={project.homepageUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Visit website <span aria-hidden="true" className="ml-2">↗</span>
        </a>
      )}
      <Link
        href="/projects"
        className="inline-flex min-h-11 items-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        Back to projects
      </Link>
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-zinc-800 bg-[#0b1118] px-2.5 py-1.5 font-mono text-[11px] text-zinc-300"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureList({
  items,
  marker,
}: {
  items: string[];
  marker?: string;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-300">
          {marker && (
            <span aria-hidden="true" className="text-zinc-400">
              {marker}
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function DossierPanel({
  title,
  marker,
  className = "",
  children,
}: {
  title: string;
  marker: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-6 ${className}`}
    >
      <h2 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-300">
        <span className="text-emerald-500">{marker}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProjectDossierFallback() {
  return (
    <article
      aria-busy="true"
      className="location-scene mx-auto max-w-5xl space-y-4 px-5 py-10 sm:px-8 sm:py-14"
    >
      <p role="status" className="font-mono text-xs text-zinc-400">
        Loading project details...
      </p>
      <div className="h-48 animate-pulse rounded-xl border border-zinc-800 bg-[#101720] motion-reduce:animate-none" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-32 animate-pulse rounded-xl border border-zinc-800 bg-[#101720] motion-reduce:animate-none" />
        <div className="h-32 animate-pulse rounded-xl border border-zinc-800 bg-[#101720] motion-reduce:animate-none" />
      </div>
    </article>
  );
}

function formatDate(value: string | null): string {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not available";
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
