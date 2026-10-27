import { experience } from "@/data/profile";
import { CodeIcon, RocketIcon } from "../icons";
import { SectionHeading } from "./SectionHeading";

const ICONS = [RocketIcon, CodeIcon];

export default function Experience() {
  return (
    <section id="experience" data-section="experience" className="border-b border-white/[0.07] px-5 py-24 sm:px-10 md:py-32">
      <SectionHeading kicker="Experience" title="Where I’ve" em="worked" center />

      {/* A centred timeline: the rail down the middle, a dot per job, and the job and its
          icon on alternate sides. On small screens everything sits to the right of the rail. */}
      <ol className="relative mx-auto mt-16 max-w-4xl">
        <span aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-violet/60 via-white/15 to-transparent md:left-1/2" />
        {experience.map((job, i) => {
          const Icon = ICONS[i % ICONS.length];
          const right = i % 2 === 1;
          return (
            <li key={job.company} className="relative grid pb-16 pl-14 last:pb-0 md:grid-cols-2 md:gap-16 md:pl-0">
              <span
                aria-hidden
                className="absolute left-5 top-2 size-3 -translate-x-1/2 rounded-full border-2 border-night bg-white ring-4 ring-violet/40 md:left-1/2"
              />
              <div className={`md:pt-0 ${right ? "md:order-2" : "md:text-right"}`}>
                <p className="label text-lavender">
                  {job.start} – {job.end}
                </p>
                <h3 className="heading mt-2 text-[1.9rem] text-white">{job.company}</h3>
                <p className="mt-1 text-muted">
                  {job.role} · {job.type}
                </p>
                <p className="mt-4 text-[0.98rem] text-fg/80">{job.summary}</p>
                <details className="mt-4">
                  <summary className={`label inline-flex items-center gap-2 hover:text-fg ${right ? "" : "md:flex-row-reverse"}`}>
                    What I did
                    <svg viewBox="0 0 16 16" className="chev size-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
                      <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <ul className="mt-4 space-y-2.5 text-left">
                    {job.points.map((p) => (
                      <li key={p} className="grid grid-cols-[1.1rem_minmax(0,1fr)] text-[0.95rem] text-fg/80">
                        <span aria-hidden className="text-violet">
                          ✦
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </details>
                <ul className={`mt-5 flex flex-wrap gap-2 ${right ? "" : "md:justify-end"}`} aria-label="Technologies">
                  {job.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`hidden md:flex ${right ? "md:order-1 md:justify-end" : ""}`} aria-hidden>
                <span className="grid size-14 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-lavender shadow-[0_0_40px_-10px_rgb(155_77_255/0.7)]">
                  <Icon className="size-5" />
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
