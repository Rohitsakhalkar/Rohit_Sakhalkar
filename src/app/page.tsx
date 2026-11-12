import Link from "next/link";
import QuickProfile from "@/components/QuickProfile";
import { personal, projects, worldLocations } from "@/lib/data";

const featuredProject = projects[0];

export default function Home() {
  return (
    <>
      <section className="world-scene relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-zinc-800">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="world-enter relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/70 bg-[#0b1715]/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              System online
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
              Welcome, explorer.
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              I’m {personal.name}.
            </h1>
            <p className="mt-4 max-w-xl font-mono text-sm leading-6 text-emerald-300 sm:text-base">
              {personal.title}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
              I build software, experiment with ideas, and turn problems into
              working systems.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#world-map"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-[#07100d] transition-colors hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
              >
                Enter world <span aria-hidden="true">→</span>
              </Link>
              <QuickProfile />
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-300"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="hover:text-emerald-300"
              >
                Email
              </a>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-lg grid-cols-1 items-center gap-5 sm:grid-cols-[0.8fr_1.2fr] lg:max-w-none">
            <div className="gate-stage relative order-2 hidden h-64 items-center justify-center sm:order-1 sm:flex lg:h-80">
              <div className="gate-ring gate-ring-outer" aria-hidden="true" />
              <div className="gate-ring gate-ring-inner" aria-hidden="true" />
              <div className="gate-core" aria-hidden="true">
                <span>ROHIT.EXE</span>
                <span>SPAWN POINT</span>
              </div>
              <div className="gate-floor" aria-hidden="true" />
            </div>
            <Link
              href={`/projects/${featuredProject.slug}`}
              className="relative order-1 block rounded-xl border border-emerald-900/70 bg-[#0b1118]/90 p-5 transition-colors hover:border-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400 sm:order-2"
            >
              <div className="mb-5 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-wider">
                <span className="text-emerald-400">Signal / Project District</span>
                <span className="rounded-full border border-amber-900/70 px-2 py-1 text-amber-300">
                  In progress
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Featured dossier
              </p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">
                {featuredProject.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                A social and freelancing platform connecting people who need
                small tasks completed with people who can help.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {featuredProject.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-zinc-800 px-2 py-1 font-mono text-[10px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex text-xs text-emerald-300">
                Open project dossier <span aria-hidden="true" className="ml-2">↗</span>
              </span>
            </Link>
          </div>
        </div>
        <p className="pointer-events-none absolute bottom-4 right-5 hidden font-mono text-[10px] uppercase tracking-wider text-zinc-700 sm:block">
          Spawn point / ROHIT.EXE
        </p>
      </section>

      <section
        id="world-map"
        className="world-map-section scroll-mt-20 px-5 py-14 sm:px-8 sm:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-400">
                World navigation
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
                Choose a destination
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
                Each zone opens a regular, keyboard-accessible page. No gameplay
                is required to reach the portfolio details.
              </p>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              Five locations / one explorer
            </p>
          </div>

          <nav
            aria-label="World destinations"
            className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {worldLocations.map((location) => (
              <Link
                key={location.id}
                href={location.path}
                className="world-node group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-xl border border-zinc-800 bg-[#101720] p-5 transition-colors hover:border-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
              >
                <span className="pointer-events-none absolute right-4 top-1 font-mono text-5xl font-bold text-zinc-800/60 transition-colors group-hover:text-emerald-950">
                  {location.id}
                </span>
                <span className="relative font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                  {location.coordinates}
                </span>
                <div className="relative mt-5">
                  <h3 className="font-medium text-zinc-100">
                    {location.name}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-zinc-500">
                    {location.description}
                  </p>
                </div>
                <span className="absolute bottom-5 right-5 text-sm text-zinc-600 transition-colors group-hover:text-emerald-300">
                  <span className="sr-only">Enter {location.name}</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </Link>
            ))}
          </nav>
          <p className="mt-6 font-mono text-[10px] text-zinc-600">
            TIP / Open the developer console from any location with the control
            at the bottom of the screen.
          </p>
        </div>
      </section>
    </>
  );
}
