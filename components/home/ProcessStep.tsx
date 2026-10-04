"use client";
import { useRef, type ReactNode } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
export function ProcessStep({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, { mode: "entry" });
  return (
    <article ref={ref} className="process-step flex gap-7 py-7 pb-16">
      <div className="step-number relative shrink-0 font-display text-2xl">
        0{index + 1}
        <span aria-hidden="true" />
      </div>
      <div>{children}</div>
    </article>
  );
}
