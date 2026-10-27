import { profile, projects, type Project } from "@/data/profile";
import { ArrowOutIcon, ArrowRightIcon } from "../icons";
import { SectionHeading } from "./SectionHeading";

function Status({ status }: { status: Project["status"] }) {
  const live = status !== "Delivered";
  return (
    <span className="label inline-flex items-center gap-2">
      <span aria-hidden className={live ? "pulse" : "size-2 rounded-full bg-muted/50"} />
      {status}
    </span>
  );
}

function Notes({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <h4 className="label text-lavender">{title}</h4>
      <ul className="mt-2 space-y-2">
        {items.map((i) => (
          <li key={i} className="grid grid-cols-[1.1rem_minmax(0,1fr)] text-[0.95rem] text-fg/80">
            <span aria-hidden className="text-violet">
              ✦
            </span>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

// The PlanetPulse code is private, so instead of screenshots this draws the
// pipeline it runs, step by step.
const PIPELINE = [
  { step: "Call ends", detail: "Bot has transcribed each speaker" },
  { step: "Webhook", detail: "HMAC checked, duplicates ignored" },
  { step: "Transcript", detail: "Hindi and English, real names" },
  { step: "LLM", detail: "Summary, decisions, actions" },
  { step: "Schema check", detail: "Validated JSON, one retry" },
  { step: "Email", detail: "Only to approved domains" },
];

function Pipeline() {
  return (
    <div className="sunset flex h-full flex-col justify-center p-6 sm:p-8">
      <ol className="grid gap-3 rounded-2xl border border-white/15 bg-night/55 p-5 backdrop-blur-md sm:grid-cols-2 sm:p-6">
        {PIPELINE.map((p, i) => (
          <li key={p.step} className="flex gap-3">
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-violet/50 bg-violet/15 font-mono text-[0.7rem] text-lavender">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block text-[0.92rem] text-white">{p.step}</span>
              <span className="block text-[0.82rem] text-muted">{p.detail}</span>
            </span>
          </li>
        ))}
        <li className="label border-t border-white/10 pt-3 sm:col-span-2">≈ $0.30 per two-hour meeting</li>
      </ol>
    </div>
  );
}

function PostDripShot() {
  return (
    <div className="sunset flex h-full items-center justify-center p-5 sm:p-8">
      <figure className="w-full overflow-hidden rounded-xl border border-white/15 bg-night shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="label ml-2 truncate normal-case tracking-normal">ai-social-platform-nine.vercel.app</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF, served as is */}
        <img
          src="/postdrip-demo.gif"
          alt="Screen recording of the PostDrip dashboard: workspace switcher, connected accounts, scheduled posts and the navigation for posts, calendar, analytics, accounts and team."
          width={1280}
          height={529}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </figure>
    </div>
  );
}

function Featured({ project, visual }: { project: Project; visual: React.ReactNode }) {
  return (
    <article className="card overflow-hidden" aria-labelledby={`${project.id}-title`}>
      <div className="aspect-[16/11] overflow-hidden border-b border-white/[0.07]">{visual}</div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="label">{project.context}</p>
          <Status status={project.status} />
        </div>
        <h3 id={`${project.id}-title`} className="heading mt-3 text-[2rem] text-white">
          {project.name}
        </h3>
        <p className="mt-2 text-fg/85">{project.tagline}</p>
        <p className="mt-3 text-[0.95rem] text-muted">{project.problem}</p>

        <details className="mt-6 border-t border-white/[0.07] pt-4">
          <summary className="label inline-flex items-center gap-2 hover:text-fg">
            Build notes
            <svg viewBox="0 0 16 16" className="chev size-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
              <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="mt-5 space-y-5">
            <p className="text-[0.95rem] text-fg/80">{project.contribution}</p>
            <Notes title="What it does" items={project.features} />
            <Notes title="Decisions worth noting" items={project.decisions} />
            {project.note && <p className="label">{project.note}</p>}
          </div>
        </details>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>

        {(project.live || project.code) && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn-glow">
                Live demo <ArrowOutIcon className="size-3.5" />
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer" className="btn-ghost">
                Source <ArrowOutIcon className="size-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const [postdrip, planetpulse, ...more] = projects;
  return (
    <section id="work" data-section="projects" className="border-b border-white/[0.07] px-5 py-24 sm:px-10 md:py-32">
      <SectionHeading
        kicker="Selected projects"
        title="Work that speaks"
        em="for itself"
        action={
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <span className="btn-ghost">View GitHub</span>
            <span className="icon-btn">
              <ArrowRightIcon />
            </span>
          </a>
        }
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Featured project={postdrip} visual={<PostDripShot />} />
        <Featured project={planetpulse} visual={<Pipeline />} />
      </div>

      <div className="mt-20">
        <p className="label text-lavender">Smaller builds · code is private</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {more.map((p, i) => (
            <li key={p.id} className="card flex flex-col p-6">
              <p className="label">[{String(i + 1).padStart(2, "0")}]</p>
              <h3 className="heading mt-3 text-[1.6rem] text-white">{p.name}</h3>
              <p className="mt-2 text-[0.95rem] text-fg/80">{p.tagline}</p>
              <p className="mt-2 text-[0.88rem] text-muted">{p.features.join(". ")}.</p>
              <p className="label mt-auto pt-5 normal-case tracking-normal">{p.stack.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
