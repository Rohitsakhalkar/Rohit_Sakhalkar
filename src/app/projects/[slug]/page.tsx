import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} dossier | Rohit Sakhalkar`
      : "Project not found | Rohit Sakhalkar",
    description: project?.description,
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const { dossier } = project;

  return (
    <article className="location-scene mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href="/projects"
        className="inline-flex min-h-10 items-center gap-2 font-mono text-xs text-zinc-400 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
      >
        <span aria-hidden="true">←</span> Project District
      </Link>

      <header className="world-enter relative mt-5 overflow-hidden rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-8">
        <div className="pointer-events-none absolute -right-6 -top-10 font-mono text-[8rem] font-bold leading-none text-zinc-800/35 sm:text-[12rem]">
          {project.id === "get_it_done"
            ? "G"
            : project.id === "forge"
              ? "F"
              : "DS"}
        </div>
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
            <span className="text-emerald-400">
              {project.category} dossier
            </span>
            <span aria-hidden="true" className="text-zinc-700">/</span>
            <span className="rounded-full border border-zinc-700 px-2 py-1 text-zinc-300">
              {project.status}
            </span>
          </div>
          <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-zinc-800 bg-[#0b1118] px-2.5 py-1.5 font-mono text-[11px] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
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
              <ul className="space-y-3">
                {dossier.inProgress.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm leading-6 text-zinc-300"
                  >
                    <span aria-hidden="true" className="text-amber-300">◷</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </DossierPanel>
          )}
          {dossier.planned.length > 0 && (
            <DossierPanel title="Planned" marker="05">
              <ul className="space-y-3">
                {dossier.planned.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-2 text-sm leading-6 text-zinc-300"
                  >
                    <span aria-hidden="true" className="text-zinc-500">○</span>
                    {feature}
                  </li>
                ))}
              </ul>
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
              <ul className="space-y-3">
                {dossier.notes.map((note) => (
                  <li
                    key={note}
                    className="text-sm leading-6 text-zinc-400"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </DossierPanel>
          )}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-[#07100d] transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          View source on GitHub <span aria-hidden="true">↗</span>
        </a>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center rounded-lg border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Back to project district
        </Link>
      </div>
    </article>
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
