"use client";
import { useEffect, type RefObject } from "react";
export const clamp = (value: number) => Math.max(0, Math.min(1, value));

type Options = { mode?: "pinned" | "entry"; desktopOnly?: boolean };
/** Writes a CSS variable without a React render on each animation frame. */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  { mode = "pinned", desktopOnly = false }: Options = {},
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 768px)");
    let frame = 0;
    let visible = true;
    const update = () => {
      frame = 0;
      if (!visible) return;
      const rect = element.getBoundingClientRect();
      const disabled = reduced.matches || (desktopOnly && !desktop.matches);
      const value = disabled
        ? mode === "entry"
          ? 1
          : 0
        : mode === "pinned"
          ? clamp(
              -rect.top /
                Math.max(1, element.offsetHeight - window.innerHeight),
            )
          : clamp(
              (window.innerHeight * 0.8 - rect.top) /
                (window.innerHeight * 0.45),
            );
      element.style.setProperty("--progress", value.toFixed(4));
      element.dataset.active = String(value > 0.12);
    };
    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      },
      { rootMargin: "100px" },
    );
    observer.observe(element);
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    desktop.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      desktop.removeEventListener("change", schedule);
    };
  }, [ref, mode, desktopOnly]);
}
