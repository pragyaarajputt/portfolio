import { SectionHeading } from "./SectionHeading";

// In place of testimonials: what the work changed, in numbers from the resume.
const RESULTS = [
  {
    tag: "Payroll",
    stat: "80%",
    quote: "less manual HR effort,",
    rest: "after payslips were generated straight from the payroll database.",
    source: "Payslip automation · CETIZION Verifica",
  },
  {
    tag: "Accuracy",
    stat: "90%",
    quote: "fewer payroll errors,",
    rest: "with payslips generated directly from the database.",
    source: "Payslip automation · CETIZION Verifica",
  },
  {
    tag: "Performance",
    stat: "30%",
    quote: "better performance,",
    rest: "in production React, Node.js and MongoDB applications.",
    source: "Internal products · CETIZION Verifica",
  },
  {
    tag: "Cost",
    stat: "$0.30",
    quote: "for a two-hour meeting,",
    rest: "transcribed and turned into minutes, decisions and action items.",
    source: "PlanetPulse Minutes",
  },
  {
    tag: "Sales",
    stat: "70%",
    quote: "less effort per proposal,",
    rest: "now generated as a PDF and emailed in one step.",
    source: "Sales proposal automation",
  },
  {
    tag: "Frontend",
    stat: "20%",
    quote: "faster page loads,",
    rest: "from frontend performance work on a fire detection platform.",
    source: "Flaresens · Tejo Tech Group",
  },
];

export default function Impact() {
  return (
    <section id="impact" data-section="impact" className="border-b border-white/[0.07] px-5 py-24 sm:px-10 md:py-32">
      <SectionHeading kicker="Results" title="What the work" em="changed" center />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESULTS.map((r) => (
          <li key={r.stat + r.tag} className="card flex flex-col p-6">
            <span className="tag w-fit">“{r.tag}”</span>
            <p className="heading mt-5 text-[1.35rem] leading-snug text-white">
              <span className="text-[2.4rem] leading-none text-lavender">{r.stat}</span> {r.quote}{" "}
              <span className="italic text-muted">{r.rest}</span>
            </p>
            <p className="label mt-auto pt-6">{r.source}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
