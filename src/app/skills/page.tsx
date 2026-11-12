import { skills } from "@/lib/data";

export const metadata = {
  title: "Skills — Rohit Sakhalkar",
};

const categories = [...new Set(skills.map((s) => s.category))];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between font-mono text-xs mb-1">
        <span className="text-zinc-300 group-hover:text-emerald-400 transition-colors">{name}</span>
        <span className="text-zinc-600">{level}%</span>
      </div>
      <div className="h-1 bg-zinc-800 rounded overflow-hidden">
        <div
          className="h-full bg-emerald-700 group-hover:bg-emerald-500 transition-colors rounded"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
      <div className="font-mono">
        <div className="text-zinc-500 text-xs mb-1">$ rohit --stack --verbose</div>
        <h1 className="text-2xl font-bold text-zinc-100">Skills</h1>
        <p className="text-zinc-500 text-sm mt-1">What I work with and how much I trust myself with it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((cat) => (
          <div key={cat}>
            <div className="font-mono text-xs text-emerald-500 mb-4 border-b border-zinc-800 pb-2">
              — {cat}
            </div>
            <div className="space-y-4">
              {skills
                .filter((s) => s.category === cat)
                .map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="font-mono text-xs text-zinc-700 border-t border-zinc-900 pt-6">
        # percentages are self-assessed estimates, not gospel. take them with appropriate skepticism.
      </p>
    </div>
  );
}
