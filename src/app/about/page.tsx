import { personal, timeline, skills } from "@/lib/data";

export const metadata = {
  title: "About — Rohit Sakhalkar",
};

function TerminalBlock({ prompt, output }: { prompt: string; output: string | string[] }) {
  const lines = Array.isArray(output) ? output : [output];
  return (
    <div className="mb-5 font-mono">
      <div className="text-emerald-400 text-sm">$ rohit {prompt}</div>
      {lines.map((l, i) => (
        <div key={i} className="text-zinc-300 text-sm pl-2 leading-relaxed">
          {l}
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">
      {/* Header */}
      <div className="font-mono">
        <div className="text-zinc-500 text-xs mb-1">— about.sh</div>
        <h1 className="text-2xl font-bold text-zinc-100">{personal.name}</h1>
        <p className="text-emerald-400 text-sm">{personal.title}</p>
      </div>

      {/* Terminal blocks */}
      <section className="bg-zinc-950 border border-zinc-800 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>

        <TerminalBlock prompt="--bio" output={personal.summary} />
        <TerminalBlock
          prompt="--stack"
          output={categories.map(
            (cat) =>
              `${cat}: ${skills
                .filter((s) => s.category === cat)
                .map((s) => s.name)
                .join(", ")}`
          )}
        />
        <TerminalBlock
          prompt="--contact"
          output={[
            `email: ${personal.email}`,
            `github: ${personal.github}`,
            `location: ${personal.location}`,
          ]}
        />
      </section>

      {/* Git log timeline */}
      <section>
        <div className="font-mono text-zinc-500 text-xs mb-4">$ git log --oneline</div>
        <div className="space-y-3 font-mono">
          {timeline.map((entry) => (
            <div key={entry.hash} className="flex gap-4 group">
              <span className="text-yellow-600 text-xs pt-0.5 shrink-0">{entry.hash}</span>
              <div>
                <div className="text-zinc-200 text-sm group-hover:text-white transition-colors">
                  {entry.message}
                </div>
                <div className="text-zinc-600 text-xs">{entry.detail} · {entry.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
