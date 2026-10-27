"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { ArrowOutIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" data-section="contact" className="relative isolate overflow-hidden border-t border-white/[0.07]">
      <div className="sunset absolute inset-0 -z-10" aria-hidden />
      <div className="stars absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="mx-auto flex min-h-[80svh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center">
        <p className="script text-lavender">Let’s talk</p>
        <h2 className="display mt-3 text-[clamp(2.6rem,6vw,4.8rem)] text-white">
          Have a role or a project in mind? <em>Let’s build it.</em>
        </h2>
        <p className="lead mt-6 max-w-xl text-fg/85">
          I’m looking for full-stack and AI engineering roles in Delhi NCR or remote. Email is the quickest way to reach
          me.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="heading mt-8 break-all text-[clamp(1.4rem,3.4vw,2.2rem)] italic text-lavender underline decoration-1 underline-offset-[0.2em] hover:text-white"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={copy} className="btn-glow">
            <MailIcon className="size-3.5" />
            {copied ? "Email copied ✓" : "Copy email"}
          </button>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-ghost">
            Resume <ArrowOutIcon className="size-3.5" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="icon-btn">
            <LinkedInIcon className="size-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="icon-btn">
            <GitHubIcon className="size-4" />
          </a>
        </div>
        <p className="sr-only" aria-live="polite">
          {copied ? "Email address copied to the clipboard" : ""}
        </p>
      </div>
    </section>
  );
}
