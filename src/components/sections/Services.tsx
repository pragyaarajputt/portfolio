import { SectionHeading } from "./SectionHeading";

// Four overlapping circles around a glowing centre point, inside a faint hexagon, after the
// "What I do" frame in the reference. Positions are percentages of a square stage.
const SERVICES = [
  {
    n: "01",
    title: "Full-stack web apps",
    detail: "Next.js and React front ends on Node.js APIs, from schema to deploy.",
    pos: "left-1/2 top-[6%] -translate-x-1/2",
  },
  {
    n: "02",
    title: "Backend & APIs",
    detail: "REST APIs, auth, webhooks and job queues on PostgreSQL or MongoDB.",
    pos: "left-[4%] top-1/2 -translate-y-1/2",
  },
  {
    n: "03",
    title: "AI & LLM features",
    detail: "Claude and Gemini features with schema-validated output, in production.",
    pos: "right-[4%] top-1/2 -translate-y-1/2",
  },
  {
    n: "04",
    title: "Workflow automation",
    detail: "Tools that take manual work off a team: payslips, proposals, minutes.",
    pos: "bottom-[6%] left-1/2 -translate-x-1/2",
  },
];

export default function Services() {
  return (
    <section id="services" data-section="services" className="border-b border-white/[0.07] px-5 py-24 sm:px-10 md:py-32">
      <SectionHeading kicker="What I do" title="What I can" em="build for you" center />

      <div className="relative mx-auto mt-14 aspect-square w-full max-w-[34rem]">
        {/* Faint hexagon and a vertical rule behind the circles. */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 size-full text-white/[0.08]" aria-hidden>
          <polygon points="50,2 93,26 93,74 50,98 7,74 7,26" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <polygon points="50,6 89.5,28 89.5,72 50,94 10.5,72 10.5,28" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <line x1="50" y1="2" x2="50" y2="20" stroke="currentColor" strokeWidth="0.3" />
        </svg>

        <ul>
          {SERVICES.map((s) => (
            <li
              key={s.n}
              tabIndex={0}
              className={`group absolute grid aspect-square w-[42%] place-items-center rounded-full border border-white/[0.09] bg-[#0d0815]/85 p-[6%] text-center outline-none backdrop-blur-sm transition-colors duration-300 hover:border-violet/50 hover:bg-[#160c26]/90 focus-visible:border-violet ${s.pos}`}
            >
              <div>
                <p className="label text-[0.6rem] sm:text-[0.68rem]">[{s.n}]</p>
                <h3 className="heading mt-1 text-[clamp(0.95rem,2.6vw,1.35rem)] text-white">{s.title}</h3>
                <p className="mt-2 hidden text-[0.78rem] leading-snug text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                  {s.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <span
          aria-hidden
          className="absolute left-1/2 top-1/2 z-10 size-[5%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-orchid to-violet shadow-[0_0_40px_6px_rgb(155_77_255/0.7)]"
        />
      </div>

      {/* The same four, readable without hovering. */}
      <ul className="mx-auto mt-14 grid max-w-4xl gap-x-10 gap-y-6 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <li key={s.n} className="flex gap-4">
            <span className="label pt-1 text-lavender">[{s.n}]</span>
            <div>
              <h3 className="text-white">{s.title}</h3>
              <p className="mt-1 text-[0.92rem] text-muted">{s.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
