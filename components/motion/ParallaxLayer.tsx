"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function ParallaxLayer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!pointer.matches || reduced.matches || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        element.style.setProperty(
          "--pointer-x",
          `${(event.clientX / innerWidth - 0.5) * 3}deg`,
        );
        element.style.setProperty(
          "--pointer-y",
          `${(0.5 - event.clientY / innerHeight) * 2}deg`,
        );
      });
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      element.style.setProperty("--pointer-x", "0deg");
      element.style.setProperty("--pointer-y", "0deg");
    };
    const parent = element.closest("section") ?? element;
    parent.addEventListener("pointermove", move as EventListener);
    parent.addEventListener("pointerleave", reset);
    reduced.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      parent.removeEventListener("pointermove", move as EventListener);
      parent.removeEventListener("pointerleave", reset);
      reduced.removeEventListener("change", reset);
    };
  }, []);
  return (
    <div ref={ref} className={`pointer-layer ${className}`}>
      {children}
    </div>
  );
}
