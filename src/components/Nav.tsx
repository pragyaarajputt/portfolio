"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { MailIcon } from "./icons";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: profile.resume, label: "Resume", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-violet focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="glass flex items-center gap-1 rounded-full bg-[#100a1c]/90! p-1.5">
        <a
          href="#top"
          aria-label={`${profile.name}, back to top`}
          className="grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-orchid to-violet-deep font-serif text-[0.95rem] italic text-white"
        >
          PR
        </a>
        <ul className="hidden items-center md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="label rounded-full px-3.5 py-2 text-fg/80 transition-colors hover:bg-white/5 hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="label rounded-full px-3.5 py-2 text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <a href={`mailto:${profile.email}`} aria-label="Email Pragya" className="icon-btn ml-1 size-9!">
          <MailIcon />
        </a>
      </nav>

      {open && (
        <div id="mobile-menu" className="glass absolute inset-x-4 top-[4.5rem] rounded-3xl bg-[#100a1c]/95! p-3 md:hidden">
          <ul>
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="heading block rounded-2xl px-4 py-3 text-2xl hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
