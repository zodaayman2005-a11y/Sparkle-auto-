"use client";
import { useEffect, useRef } from "react";

/** Decorative operational marks: never product UI, metrics, or status. */
export function OperationGlyph({ index = 0 }: { index?: number }) {
  const paths = [
    "M9 12h30v28H9z M9 20h30 M16 8v8 M32 8v8 M17 27h5v5h-5z M28 27h4",
    "M8 29l4-13h24l4 13v9H8z M8 27h32 M15 36v5 M33 36v5 M14 31h4 M30 31h4",
    "M12 9h24v32H12z M18 17h12 M18 24h12 M18 31h7 M31 34l4 4 8-9",
    "M24 8a7 7 0 1 0 0 14 7 7 0 1 0 0-14 M10 41v-5c0-7 28-7 28 0v5 M37 12h8 M41 8v8",
    "M10 12h28v29l-7-4-7 4-7-4-7 4z M17 19h14 M17 25h14 M17 31h7",
    "M7 15h34v25H7z M7 23h34 M13 32h8 M31 32h4",
    "M34 14a15 15 0 1 0 5 16 M34 7v9h-9 M19 20l5 5 12-13",
    "M8 10h32v30H8z M15 32V22 M24 32V17 M33 32V25",
  ];
  return (
    <svg className="operation-glyph" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d={paths[index % paths.length]} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ReadingRail() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const range = document.documentElement.scrollHeight - innerHeight;
      ref.current?.style.setProperty("--progress", String(range > 0 ? Math.min(1, scrollY / range) : 0));
    };
    const queue = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", queue, { passive: true });
    addEventListener("resize", queue);
    return () => { cancelAnimationFrame(frame); removeEventListener("scroll", queue); removeEventListener("resize", queue); };
  }, []);
  return <div className="reading-rail" ref={ref} aria-hidden="true"><span /></div>;
}
