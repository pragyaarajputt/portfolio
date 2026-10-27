import { education } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" data-section="education" className="px-5 py-24 sm:px-10 md:py-28">
      <SectionHeading kicker="Education" title="Where I" em="studied" />
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.school} className="card p-6">
            <p className="label text-lavender">{e.years}</p>
            <h3 className="heading mt-3 text-[1.6rem] text-white">{e.degree}</h3>
            <p className="mt-1 text-muted">{e.school}</p>
            {e.detail && <p className="mt-3 text-[0.95rem] text-fg/80">{e.detail}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
