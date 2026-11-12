import Terminal from "@/components/Terminal";
import Link from "next/link";
import { personal } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 gap-10">
      {/* Terminal */}
      <Terminal />

      {/* Quick nav pills */}
      <div className="flex flex-wrap justify-center gap-3 font-mono text-xs">
        {[
          { href: "/about", label: "about" },
          { href: "/projects", label: "projects" },
          { href: "/skills", label: "skills" },
          { href: "/contact", label: "contact" },
          { href: personal.github, label: "github ↗", external: true },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            target={l.external ? "_blank" : undefined}
            className="px-4 py-1.5 border border-zinc-700 rounded text-zinc-400 hover:border-emerald-600 hover:text-emerald-400 transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
