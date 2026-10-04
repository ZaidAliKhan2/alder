import { processSteps } from "@/lib/content";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProcessStep } from "./ProcessStep";
export function ProcessSection() {
  return (
    <section className="border-y border-line bg-mint/70 py-20 lg:py-28">
      <div className="container-shell grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="self-start md:sticky md:top-16">
          <Eyebrow>A simple way forward</Eyebrow>
          <h2 className="my-6">
            First, we listen.
            <br />
            Then, we{" "}
            <em>
              make
              <br className="hidden md:block" /> things clearer.
            </em>
          </h2>
          <p className="text-muted">
            No complicated handoffs.
            <br />
            No wondering what comes next.
          </p>
          <div className="process-art mt-9 hidden md:block" aria-hidden="true">
            <span />
            <span />
            <span />
            <b>↗</b>
          </div>
        </div>
        <div>
          {processSteps.map((step, index) => (
            <ProcessStep key={step.label} index={index}>
              <Eyebrow>{step.label}</Eyebrow>
              <h3 className="mt-4 font-display text-3xl tracking-tight">
                {step.title}
              </h3>
              <p className="mt-5 max-w-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </ProcessStep>
          ))}
        </div>
      </div>
    </section>
  );
}
