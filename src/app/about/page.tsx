import Link from "next/link";
import LocationHeader from "@/components/LocationHeader";
import { education, personal } from "@/lib/data";

export const metadata = {
  title: "Knowledge Vault | Rohit Sakhalkar",
  description:
    "Rohit's education, engineering interests, and approach to backend and automation projects.",
};

const approach = [
  "Understand the problem before choosing an implementation.",
  "Break requirements into smaller, maintainable parts.",
  "Test expected behavior and pay attention to edge cases.",
  "Improve the solution through iteration.",
];

export default function AboutPage() {
  return (
    <div className="location-scene mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <LocationHeader
        sector="04 / 05"
        name="Knowledge Vault"
        title="Background and engineering interests"
        description="A concise profile beyond the project dossiers: the problems I’m interested in and the way I approach building software."
      />

      <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
            Profile file
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-100">
            {personal.name}
          </h2>
          <p className="mt-1 font-mono text-xs leading-6 text-zinc-400">
            {personal.title}
          </p>
          <p className="mt-5 text-sm leading-7 text-zinc-300">
            I enjoy understanding problems deeply, designing practical
            solutions, and building software that works beyond the happy path.
            My interests include APIs, backend systems, database-backed
            applications, software testing, automation, and developer tools.
          </p>
        </section>

        <section className="rounded-xl border border-emerald-900/60 bg-[#101720] p-5 sm:p-7">
          <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
            Education record
          </p>
          <h2 className="mt-3 text-lg font-semibold leading-7 text-zinc-100">
            {education.qualification}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {education.institution}
          </p>
          <p className="text-sm leading-6 text-zinc-500">
            {education.university}
          </p>
          <p className="mt-5 border-t border-zinc-800 pt-4 font-mono text-xs text-zinc-400">
            CGPA <span className="ml-2 text-zinc-100">{education.cgpa}</span>
          </p>
        </section>
      </div>

      <section className="mt-5 rounded-xl border border-zinc-800 bg-[#101720] p-5 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">
              Working principles
            </p>
            <h2 className="mt-2 text-lg font-semibold text-zinc-100">
              How I approach development
            </h2>
          </div>
          <p className="font-mono text-[10px] text-zinc-600">
            Understand / build / verify / iterate
          </p>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {approach.map((item, index) => (
            <li
              key={item}
              className="flex min-h-14 items-start gap-3 rounded-lg border border-zinc-800 bg-[#0b1118] p-3 text-sm leading-6 text-zinc-300"
            >
              <span className="font-mono text-xs text-emerald-400">
                0{index + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-zinc-800 bg-[#0b1118] p-5 sm:p-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
            Continue exploring
          </p>
          <p className="mt-1 text-sm text-zinc-300">
            See the projects and engineering decisions behind this profile.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-emerald-900 px-4 py-2 text-sm text-emerald-300 hover:border-emerald-600 hover:bg-emerald-950/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Enter Project District <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
