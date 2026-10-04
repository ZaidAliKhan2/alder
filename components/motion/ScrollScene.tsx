"use client";
import { useRef, type ReactNode } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
export function ScrollScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, { desktopOnly: true });
  return (
    <section ref={ref} className="clarity-scene">
      <div className="clarity-stage">{children}</div>
    </section>
  );
}
