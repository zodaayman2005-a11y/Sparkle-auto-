"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import type { Locale } from "@/content/site";

export type StorySlide = { id: string; label: string; image?: string; media?: ReactNode; content: ReactNode; loading?: "eager" | "lazy" };
const eligibleQuery = "(min-width:1024px) and (min-height:680px) and (prefers-reduced-motion:no-preference)";
// Preserve each story's relative reading time while giving every chapter more dwell.
const readingDistanceScale = 1.4;

/** Native scroll with one interruptible visual state; mobile and overflowing copy stay in flow. */
export function StorySequence({ slides, locale, after, label, className = "", dwell = 100 }: {
  slides: StorySlide[]; locale: Locale; after: string; label: string; className?: string; dwell?: number;
}) {
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const [nearby, setNearby] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const pinnedRef = useRef(false);
  const anchor = useRef<{ id: string; top: number } | null>(null);
  const signature = slides.map(slide => slide.id).join("|");
  const count = slides.length;

  useLayoutEffect(() => {
    pinnedRef.current = pinned;
    const saved = anchor.current;
    anchor.current = null;
    let frame = 0;
    if (saved) {
      // Other stories above this one also change height at a breakpoint. Restore
      // after the shared layout settles, not midway through those React commits.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => {
          const scene = document.getElementById(saved.id);
          if (!scene || !track.current || !stage.current) return;
          if (pinned) {
            const index = Array.from(stage.current.querySelectorAll(".audience-scene")).indexOf(scene);
            scrollToSlide(track.current, stage.current, index, count);
          } else scrollBy({ top: scene.getBoundingClientRect().top - saved.top, behavior: "instant" });
        });
      });
    }
    dispatchEvent(new Event("sparkle:layout"));
    return () => cancelAnimationFrame(frame);
  }, [pinned, count]);

  useEffect(() => {
    const media = matchMedia(eligibleQuery);
    const motion = matchMedia("(prefers-reduced-motion:no-preference)");
    let disposed = false;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!stage.current || disposed) return;
        // Reserve toolbar, step navigation and breathing room. Check actual localized text.
        const header = document.querySelector(".header-wrap");
        const top = Math.ceil(header?.getBoundingClientRect().height ?? 88) + 16;
        stage.current.style.setProperty("--story-top", `${top}px`);
        const available = innerHeight - top - 158;
        const fits = Array.from(stage.current.querySelectorAll<HTMLElement>(".audience-scene-copy"))
          .every(copy => copy.scrollHeight <= available);
        const next = media.matches && count > 1 && fits;
        setEnhanced(motion.matches);
        if (next !== pinnedRef.current && track.current) {
          const bounds = track.current.getBoundingClientRect();
          if (bounds.top < top && bounds.bottom > top) {
            const scene = stage.current.querySelectorAll<HTMLElement>(".audience-scene")[activeRef.current];
            if (scene) anchor.current = { id: scene.id, top: Math.max(top, scene.getBoundingClientRect().top) };
          }
          pinnedRef.current = next;
          setPinned(next);
        }
      });
    };
    const observer = new ResizeObserver(measure);
    stage.current?.querySelectorAll(".audience-scene-copy").forEach(copy => observer.observe(copy));
    media.addEventListener("change", measure);
    motion.addEventListener("change", measure);
    addEventListener("resize", measure);
    void document.fonts.ready.then(measure);
    measure();
    return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); media.removeEventListener("change", measure); motion.removeEventListener("change", measure); removeEventListener("resize", measure); };
  }, [count, locale]);

  useEffect(() => {
    if (!track.current || !stage.current) return;
    let frame = 0;
    let visible = false;
    const eligibility = matchMedia(eligibleQuery);
    const scenes = Array.from(stage.current.querySelectorAll<HTMLElement>(".audience-scene"));
    const update = () => {
      frame = 0;
      if (!track.current || !stage.current) return;
      // A breakpoint resize changes CSS geometry before React changes modes.
      // Keep the last read chapter until its resize anchor has been captured.
      if (pinned && !eligibility.matches) return;
      const range = Math.max(1, track.current.offsetHeight - stage.current.offsetHeight);
      const inset = parseFloat(getComputedStyle(stage.current).top) || 0;
      const distance = inset - track.current.getBoundingClientRect().top;
      let index = 0;
      if (pinned) {
        const step = range / count;
        index = Math.max(0, Math.min(count - 1, Math.floor(distance / step)));
        // Trackpad/touch inertia can oscillate around a boundary. A small dead band
        // prevents flicker without delaying a deliberate jump across several steps.
        const previous = activeRef.current;
        const margin = Math.min(20, step * .04);
        if (index === previous + 1 && distance < index * step + margin) index = previous;
        if (index === previous - 1 && distance > previous * step - margin) index = previous;
      } else {
        const readingLine = innerHeight * .45;
        scenes.forEach((scene, i) => { if (scene.getBoundingClientRect().top <= readingLine) index = i; });
      }
      if (index !== activeRef.current) {
        activeRef.current = index;
        setActive(index);
      }
      stage.current.style.setProperty("--case-progress", String(pinned ? Math.max(0, Math.min(1, distance / range)) : (index + 1) / count));
    };
    const schedule = () => { if (visible && !frame) frame = requestAnimationFrame(update); };
    // The header's anchor restoration owns hash navigation. This observer never scrolls the page.
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; setNearby(visible); if (visible) schedule(); }, { rootMargin: "100% 0px" });
    observer.observe(track.current);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    addEventListener("sparkle:layout", schedule);
    update();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); removeEventListener("sparkle:layout", schedule); };
  }, [pinned, signature, count]);

  useEffect(() => {
    if (pinned || !enhanced || !stage.current) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.entered = "true";
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    stage.current.querySelectorAll(".audience-scene").forEach(scene => observer.observe(scene));
    return () => observer.disconnect();
  }, [pinned, enhanced, signature]);

  function navigate(event: MouseEvent<HTMLAnchorElement>, index: number) {
    if (!pinned || !track.current || !stage.current || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.replaceState(null, "", `#${slides[index].id}`);
    scrollToSlide(track.current, stage.current, index, count);
    activeRef.current = index;
    setActive(index);
  }

  if (!count) return null;
  const style: CSSProperties & { "--story-count": number; "--story-distance": string } = {
    "--story-count": count, "--story-distance": `${count * dwell * readingDistanceScale}svh`,
  };
  return (
    <div className={`audience-story ${className}`} data-pinned={pinned} data-enhanced={enhanced} data-active={active + 1} style={style}>
      <div className="audience-track" ref={track}>
        <div className="audience-stage" ref={stage}>
          <div className="audience-toolbar">
            <span className="audience-position" dir="ltr"><b>{String(active + 1).padStart(2, "0")}</b> / {count}</span>
            <a className="text-link audience-skip" href={`#${after}`}>{locale === "ar" ? "تخطي العرض" : "Skip this story"}</a>
          </div>
          <ol className="audience-scenes">
            {slides.map((slide, index) => (
              <li className="audience-scene" id={slide.id} key={slide.id} data-current={index === active} aria-hidden={pinned && index !== active ? true : undefined} inert={pinned && index !== active}>
                <div className="audience-scene-copy">
                  <span className="audience-scene-number" aria-hidden="true" dir="ltr">{String(index + 1).padStart(2, "0")}</span>
                  {slide.content}
                  <span className="audience-copy-rule" aria-hidden="true" />
                </div>
                <div className="audience-art">{slide.media ?? (slide.image ? <Image src={slide.image} width={960} height={1200} alt="" sizes="(max-width: 767px) 260px, (max-width: 1023px) 45vw, 48vw" loading={slide.loading ?? (pinned && nearby && Math.abs(index - active) <= 1 ? "eager" : "lazy")} /> : null)}</div>
              </li>
            ))}
          </ol>
          <nav className="audience-nav" aria-label={label}>
            {slides.map((slide, index) => <a key={slide.id} href={`#${slide.id}`} onClick={event => navigate(event, index)} aria-current={active === index ? "step" : undefined} aria-label={slide.label}><span dir="ltr">{String(index + 1).padStart(2, "0")}</span></a>)}
          </nav>
        </div>
      </div>
    </div>
  );
}

function scrollToSlide(track: HTMLElement, stage: HTMLElement, index: number, count: number) {
  const inset = parseFloat(getComputedStyle(stage).top) || 0;
  const range = track.offsetHeight - stage.offsetHeight;
  const step = range / count;
  // Land inside the requested step instead of on its boundary, where sub-pixel
  // layout differences can resolve to the previous slide.
  const stepPosition = Math.min(range, (index + 0.5) * step);
  window.scrollTo({ top: track.getBoundingClientRect().top + scrollY - inset + stepPosition, behavior: "instant" });
}
