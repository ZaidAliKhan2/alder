"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/** Text stays readable without JavaScript. Only the first entry reveals the lines. */
export function EditorialHeading({
  lines,
  className = "",
}: {
  lines: ReactNode[];
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  useScrollProgress(ref, { mode: "entry" });
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <h2 ref={ref} className={`editorial-heading ${className}`}>
      {lines.map((line, index) => (
        <span
          className="editorial-line"
          key={index}
          style={{ "--line-index": index } as CSSProperties}
        >
          <span>{line}</span>
          {index < lines.length - 1 && " "}
        </span>
      ))}
    </h2>
  );
}
