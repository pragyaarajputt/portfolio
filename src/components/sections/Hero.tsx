import Image from "next/image";
import { profile } from "@/data/profile";
import portrait from "../../../public/pragya-cutout.webp";
import LocalTime from "../LocalTime";
import { ArrowRightIcon, GitHubIcon, LinkedInIcon } from "../icons";

// A cut-out portrait standing in front of a violet glow and a thin orbit ring, fading
// into the sky at the bottom like the figure in the reference.
function Portrait() {
  return (
    <div className="hero-rise relative mx-auto w-[min(86vw,25rem)]" style={{ animationDelay: "0.35s" }}>
      <div aria-hidden className="absolute inset-x-[8%] top-[6%] bottom-[10%] rounded-full bg-violet/45 blur-3xl" />
      <div aria-hidden className="absolute left-1/2 top-[4%] aspect-square w-[92%] -translate-x-1/2 rounded-full border border-white/15 bg-gradient-to-b from-orchid/25 to-transparent" />
      <Image
        src={portrait}
        alt="Pragya Rajput, smiling, in a white shirt"
        priority
        sizes="(min-width: 768px) 400px, 86vw"
        className="relative w-full [filter:drop-shadow(0_0_30px_rgb(155_77_255/0.35))] [mask-composite:intersect] [mask-image:linear-gradient(to_bottom,black_68%,transparent_100%),linear-gradient(to_right,transparent_0%,black_14%,black_86%,transparent_100%)]"
      />
      {/* Floating notes over the frame edge, as in the reference. */}
      <span className="glass label absolute -left-6 top-[38%] rotate-[-4deg] rounded-full bg-[#100a1c]/80! px-3 py-1.5 text-lavender sm:-left-14">
        React · Next.js
      </span>
      <span className="glass label absolute -right-4 top-[58%] rotate-[3deg] rounded-full bg-[#100a1c]/80! px-3 py-1.5 text-lavender sm:-right-14">
        Node · FastAPI · LLMs
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" data-section="hero" className="relative isolate overflow-hidden">
      <div className="sky" aria-hidden>
        <div className="stars" />
        <div className="stars-2" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-5 pb-24 pt-28 text-center">
        <p className="label hero-rise flex items-center gap-2.5 text-lavender" style={{ animationDelay: "0.1s" }}>
          <span className="pulse" aria-hidden />
          Open to full-stack &amp; AI roles
        </p>

        <h1 className="display mt-5 text-[clamp(2.4rem,5.4vw,4.6rem)] text-white">
          <span className="hero-line">Hey there! I’m Pragya,</span>
          <span className="hero-line">
            a <em>Full-Stack Developer</em>
          </span>
        </h1>

        <div className="mt-10 grid w-full items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          <div className="hero-rise order-2 lg:order-1 lg:text-left" style={{ animationDelay: "0.5s" }}>
            <p className="label text-lavender">Based in New Delhi, India</p>
            <p className="mx-auto mt-3 max-w-[22rem] text-fg/80 lg:mx-0">
              I build React and Next.js products on Node.js and FastAPI backends, more and more often with a language
              model in the middle, to take chores off people’s plates.
            </p>
            <div className="mt-4 flex justify-center gap-1 lg:justify-start">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="grid size-10 place-items-center rounded-full text-fg/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-10 place-items-center rounded-full text-fg/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Portrait />
          </div>

          <div className="hero-rise order-3 lg:text-right" style={{ animationDelay: "0.6s" }}>
            <p className="mx-auto max-w-[20rem] text-fg/80 lg:ml-auto lg:mr-0">
              1.5 years shipping production apps at CETIZION Verifica, plus PostDrip, an AI SaaS I built solo.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-end">
              <a href="#work" className="btn-glow">
                View my work
              </a>
              <a href="#contact" aria-label="Go to contact" className="icon-btn">
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        <p className="label hero-rise mt-12" style={{ animationDelay: "0.9s" }}>
          <LocalTime />
        </p>
      </div>
    </section>
  );
}
