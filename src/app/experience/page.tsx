import Link from "next/link";
import LocationHeader from "@/components/LocationHeader";
import { experience } from "@/lib/data";

export const metadata = {
  title: "Career Archives | Rohit Sakhalkar",
  description:
    "Rohit's verified internship and separate project-based automation work.",
};

export default function ExperiencePage() {
  return (
    <div className="location-scene mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
      <LocationHeader
        sector="03 / 05"
        name="Career Archives"
        title="Experience record"
        description="Professional internship and project-based work are kept separate. Open an archive entry to see the details."
      />

      <div className="relative space-y-5 before:absolute before:bottom-5 before:left-[7px] before:top-5 before:w-px before:bg-zinc-800">
        <section className="relative pl-7">
          <span
            aria-hidden="true"
            className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-emerald-500 bg-[#080b10]"
          />
          <details
            open
            className="group rounded-xl border border-zinc-800 bg-[#101720]"
          >
            <summary className="cursor-pointer list-none p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 sm:p-6 [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                Verified internship
              </span>
              <span className="mt-2 flex flex-wrap items-start justify-between gap-3">
                <span>
                  <span className="block text-lg font-semibold text-zinc-100">
                    {experience.internship.role}
                  </span>
                  <span className="mt-1 block text-sm text-zinc-400">
                    {experience.internship.organization}
                  </span>
                </span>
                <span className="rounded-full border border-zinc-700 px-3 py-1 font-mono text-[11px] text-zinc-300">
                  {experience.internship.period}
                </span>
              </span>
              <span className="mt-4 block font-mono text-[10px] text-zinc-600 group-open:hidden">
                OPEN ARCHIVE +
              </span>
              <span className="mt-4 hidden font-mono text-[10px] text-zinc-600 group-open:block">
                CLOSE ARCHIVE −
              </span>
            </summary>
            <div className="border-t border-zinc-800 px-5 py-5 sm:px-6">
              <h2 className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Associated projects
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {experience.internship.projects.map((project) => (
                  <li
                    key={project}
                    className="rounded-md border border-zinc-800 bg-[#0b1118] px-3 py-2 text-sm text-zinc-300"
                  >
                    {project}
                  </li>
                ))}
              </ul>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
                {experience.internship.details[0]}
              </p>
            </div>
          </details>
        </section>

        <section className="relative pl-7">
          <span
            aria-hidden="true"
            className="absolute left-0 top-5 h-4 w-4 rounded-full border-2 border-zinc-600 bg-[#080b10]"
          />
          <article className="rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-6">
            <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              Project-based work / not employment
            </p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-100">
              {experience.projectBased.title} — {experience.projectBased.organization}
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {experience.projectBased.description}
            </p>
          </article>
        </section>
      </div>

      <Link
        href="/projects"
        className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 hover:border-emerald-800 hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        Explore project dossiers <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
