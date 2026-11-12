import Link from "next/link";
import { personal, worldLocations } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-[#080b10] pb-[calc(3rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="/"
            className="font-mono text-sm font-bold text-zinc-100 hover:text-emerald-300"
          >
            ROHIT<span className="text-emerald-400">.EXE</span>
          </Link>
          <p className="mt-1 text-[10px] text-zinc-600">
            © {personal.name}
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-4 gap-y-2"
        >
          {worldLocations.map((location) => (
            <Link
              key={location.id}
              href={location.path}
              className="text-xs text-zinc-500 hover:text-zinc-200"
            >
              {location.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <a
            href={`mailto:${personal.email}`}
            className="text-zinc-500 hover:text-emerald-300"
          >
            Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-300"
          >
            GitHub ↗
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-emerald-300"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
