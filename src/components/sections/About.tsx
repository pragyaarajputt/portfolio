import { SectionHeading } from "./SectionHeading";

const NOW = [
  { term: "Since 05/25", value: "Jr. Software Developer at CETIZION Verifica, New Delhi. Internal products, end to end." },
  { term: "On the side", value: "PostDrip, my AI social-media scheduler, live on Vercel." },
  { term: "Learning", value: "Retrieval-augmented generation and vector search." },
  { term: "Up for", value: "Full-stack and AI engineering roles in Delhi NCR or remote." },
];

export default function About() {
  return (
    <section id="about" data-section="about" className="border-b border-white/[0.07] px-5 py-24 sm:px-10 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <SectionHeading kicker="About me" title="I like owning a feature" em="end to end" />
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.75] text-fg/80">
            <p>
              I started on the frontend, building a React interface for a fire detection platform at Tejo Tech. At
              CETIZION Verifica I moved across the whole stack, and the work I’m proudest of removed a chore from
              someone’s month: payslips HR used to build by hand, proposals that used to be put together and emailed one
              at a time.
            </p>
            <p>
              I care about the parts users never see: tokens that rotate, jobs that retry, and webhooks that don’t run
              twice. Lately that work has a language model in it, and next I’m learning retrieval, so models can answer
              from a company’s own documents instead of guessing.
            </p>
          </div>
        </div>

        <div className="card h-fit p-6 sm:p-8">
          <p className="label text-lavender">Right now</p>
          <dl className="mt-5 divide-y divide-white/[0.07]">
            {NOW.map((n) => (
              <div key={n.term} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-5">
                <dt className="label pt-1">{n.term}</dt>
                <dd className="text-fg/90">{n.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
