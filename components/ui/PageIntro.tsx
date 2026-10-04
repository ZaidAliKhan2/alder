import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
export function PageIntro({
  eyebrow,
  children,
  description,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <section className="container-shell page-entrance py-16 lg:py-24">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-7 text-[clamp(2.8rem,6.5vw,6.3rem)]">{children}</h1>
      {description && (
        <div className="mt-10 flex max-w-xl items-center gap-8 md:ml-auto">
          <span aria-hidden="true" className="text-7xl text-sage">
            ✳
          </span>
          <p className="leading-relaxed text-muted">{description}</p>
        </div>
      )}
    </section>
  );
}
