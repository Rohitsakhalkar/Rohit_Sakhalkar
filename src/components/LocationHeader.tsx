import Link from "next/link";

export default function LocationHeader({
  sector,
  name,
  title,
  description,
}: {
  sector: string;
  name: string;
  title: string;
  description: string;
}) {
  return (
    <header className="world-enter mb-10 border-b border-zinc-800 pb-7 sm:mb-12 sm:pb-9">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
        <p>
          <span className="text-emerald-400">ROHIT.EXE</span>
          <span className="mx-2 text-zinc-700">/</span>
          {sector} <span className="mx-1 text-zinc-700">·</span> {name}
        </p>
        <Link
          href="/#world-map"
          className="text-zinc-400 transition-colors hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
        >
          Return to world <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
        {description}
      </p>
    </header>
  );
}
