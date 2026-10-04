import { ScrollScene } from "@/components/motion/ScrollScene";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FinancialSculpture } from "./FinancialSculpture";
export function Hero() {
  return (
    <ScrollScene>
      <div className="hero-copy container-shell">
        <Eyebrow className="entrance">Accounting, with perspective.</Eyebrow>
        <h1 className="hero-title">
          <span className="mask-line">
            <span>Less uncertainty.</span>
          </span>
          <span className="mask-line">
            <span>
              More <em>possibility.</em>
            </span>
          </span>
        </h1>
        <div className="hero-intro entrance">
          <p className="max-w-sm text-base leading-relaxed text-muted">
            Behind every number, there’s a bigger picture. We help you see it
            clearly — and move forward with confidence.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ButtonLink href="/contact">Find your clarity</ButtonLink>
            <ButtonLink href="/services" variant="text">
              Explore our services
            </ButtonLink>
          </div>
        </div>
      </div>
      <FinancialSculpture />
      <div className="hero-footer container-shell">
        <span>Thoughtful accounting. Human connection.</span>
        <a href="#perspective">
          Scroll for a clearer picture <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="scene-message">
        <Eyebrow>From complexity to clarity</Eyebrow>
        <h2>
          A little order.
          <br />
          <em>A whole new outlook.</em>
        </h2>
        <p>
          When the details come together,
          <br />
          the way forward comes into focus.
        </p>
      </div>
      <div className="scene-progress" aria-hidden="true">
        <span>Perspective</span>
        <div>
          <i />
        </div>
        <span>Clarity</span>
      </div>
    </ScrollScene>
  );
}
