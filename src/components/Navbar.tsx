"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "~" },
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/skills", label: "skills" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-mono text-emerald-400 text-sm font-bold tracking-tight">
          rohit.dev<span className="animate-pulse text-zinc-500">_</span>
        </Link>

        <div className="flex gap-1 font-mono text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1 rounded transition-colors ${
                path === l.href
                  ? "text-emerald-400 bg-zinc-800"
                  : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900"
              }`}
            >
              {l.href === "/" ? l.label : `cd /${l.label}`}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
