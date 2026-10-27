import { categories, levels, skills, type Level } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

// Marker shapes so level reads without relying on color alone.
function LevelMark({ level }: { level: Level }) {
  const color = "#c9a6ff";
  const style =
    level === "daily"
      ? { background: color, borderColor: color }
      : level === "shipped"
        ? { background: `linear-gradient(90deg, ${color} 50%, transparent 50%)`, borderColor: color }
        : level === "familiar"
          ? { background: "transparent", borderColor: color }
          : { background: "transparent", borderColor: color, borderStyle: "dashed" as const };
  return <span aria-hidden className="inline-block size-2.5 shrink-0 rounded-full border-[1.5px]" style={style} />;
}

export default function Skills() {
  return (
    <section id="skills" data-section="skills" className="border-b border-white/[0.07] px-5 py-24 sm:px-10 md:py-32">
      <SectionHeading
        kicker="Toolkit"
        title="What I"
        em="work with"
        intro="Everything here is something I have used in real work."
        center
      />

      <ul className="label mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Legend">
        {(Object.keys(levels) as Level[]).map((l) => (
          <li key={l} className="flex items-center gap-2">
            <LevelMark level={l} />
            {levels[l]}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <div
            key={c.id}
            className="card relative overflow-hidden p-6 before:absolute before:-right-16 before:-top-16 before:size-44 before:rounded-full before:border before:border-white/[0.07] before:content-['']"
          >
            <p className="label">[{String(i + 1).padStart(2, "0")}]</p>
            <h3 className="heading mt-2 text-[1.6rem] text-white">{c.name}</h3>
            <ul className="mt-5 space-y-3">
              {skills
                .filter((s) => s.category === c.id)
                .map((s) => (
                  <li key={s.id} className="flex items-start gap-3">
                    <span className="mt-[0.5rem]">
                      <LevelMark level={s.level} />
                    </span>
                    <span>
                      <span className="block text-[0.98rem] text-white">{s.name}</span>
                      <span className="block text-[0.85rem] leading-snug text-muted">
                        <span className="sr-only">{levels[s.level]}. </span>
                        {s.note}
                      </span>
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
