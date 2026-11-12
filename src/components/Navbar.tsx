"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { personal, worldLocations } from "@/lib/data";

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return path === href || path.startsWith(`${href}/`);
  }

  function locationLink(location: (typeof worldLocations)[number], mobile = false) {
    return (
      <Link
        key={location.id}
        href={location.path}
        aria-label={location.name}
        title={location.name}
        aria-current={isActive(location.path) ? "page" : undefined}
        onClick={() => setMenuOpen(false)}
        className={`group rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
          mobile
            ? "flex min-h-11 items-center gap-3 px-3 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white"
            : "flex items-center gap-2 px-2 py-2 text-[11px] text-zinc-400 hover:bg-zinc-900 hover:text-white"
        } ${isActive(location.path) ? "bg-zinc-900 text-emerald-300" : ""}`}
      >
        <span className="font-mono text-[10px] text-emerald-500/80">
          {location.id}
        </span>
        <span>{location.name}</span>
      </Link>
    );
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[60] rounded bg-zinc-100 px-4 py-2 text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-[#080b10]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            aria-label="ROHIT.EXE spawn point"
            className="shrink-0 font-mono text-sm font-bold tracking-tight text-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            ROHIT<span className="text-emerald-400">.EXE</span>
          </Link>

          <p className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-zinc-500 xl:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            System online
          </p>

          <nav
            aria-label="World locations"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {worldLocations.map((location) => locationLink(location))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-zinc-500 hover:text-zinc-200"
            >
              GitHub ↗
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-zinc-500 hover:text-zinc-200"
            >
              LinkedIn ↗
            </a>
          </div>

          <button
            type="button"
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-zinc-700 px-3 text-sm text-zinc-200 hover:border-zinc-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="world-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Zones"}
            <span aria-hidden="true">{menuOpen ? "×" : "⌄"}</span>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="world-menu"
            aria-label="World destinations"
            className="border-t border-zinc-800 bg-[#080b10] px-4 py-3 sm:px-6 lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
              {worldLocations.map((location) =>
                locationLink(location, true)
              )}
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center px-3 text-sm text-zinc-400 hover:text-white"
              >
                GitHub ↗
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center px-3 text-sm text-zinc-400 hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </nav>
        )}
      </header>

      <nav
        aria-label="Mobile world locations"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-5 border-t border-zinc-800 bg-[#080b10]/95 px-1 pb-[env(safe-area-inset-bottom)] pt-1 backdrop-blur lg:hidden"
      >
        {worldLocations.map((location) => (
          <Link
            key={location.id}
            href={location.path}
            aria-label={location.name}
            aria-current={isActive(location.path) ? "page" : undefined}
            className={`flex min-h-12 flex-col items-center justify-center gap-0.5 rounded px-1 text-[10px] leading-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400 ${
              isActive(location.path)
                ? "text-emerald-300"
                : "text-zinc-400 hover:text-zinc-100"
            }`}
          >
            <span className="font-mono text-[9px]">{location.id}</span>
            <span className="truncate">{location.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
