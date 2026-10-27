import type { ReactNode } from "react";

// A handwritten violet kicker over a serif title, with an optional action on the right.
export function SectionHeading({
  kicker,
  title,
  em,
  intro,
  action,
  center,
}: {
  kicker: string;
  title: ReactNode;
  em?: string;
  intro?: ReactNode;
  action?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "flex flex-col items-center gap-6 text-center" : "flex flex-wrap items-end justify-between gap-6"}>
      <div className={center ? "max-w-2xl" : "max-w-xl"}>
        <p className="script">{kicker}</p>
        <h2 className="heading mt-2 text-[clamp(2.3rem,5vw,3.6rem)] text-white">
          {title}
          {em && (
            <>
              {" "}
              <em>{em}</em>
            </>
          )}
        </h2>
        {intro && <p className="mt-4 text-muted">{intro}</p>}
      </div>
      {action}
    </div>
  );
}
