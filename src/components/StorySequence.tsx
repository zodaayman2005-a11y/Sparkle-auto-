"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import type { Locale } from "@/content/site";

export type StorySlide = { id: string; label: string; image?: string; media?: ReactNode; content: ReactNode };
const eligibleQuery = "(min-width:1024px) and (min-height:800px) and (prefers-reduced-motion:no-preference)";

/** Native scroll with one interruptible visual state; mobile and overflowing copy stay in flow. */
export function StorySequence({ slides, locale, after, label, className = "", dwell = 100 }: {
  slides: StorySlide[]; locale: Locale; after: string; label: string; className?: string; dwell?: number;
}) {
  const [pinned, setPinned] = useState(false);
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const signature = slides.map(slide => slide.id).join("|");
  const count = slides.length;

  useEffect(() => { dispatchEvent(new Event("sparkle:layout")); }, [pinned]);

  useEffect(() => {
    const media = matchMedia(eligibleQuery);
    let disposed = false;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!stage.current || disposed) return;
        // Reserve toolbar, step navigation and breathing room. Check actual localized text.
        const available = innerHeight - 272;
        const fits = Array.from(stage.current.querySelectorAll<HTMLElement>(".audience-scene-copy"))
          .every(copy => copy.scrollHeight <= available);
        setPinned(media.matches && count > 1 && fits);
      });
    };
    const observer = new ResizeObserver(measure);
    if (stage.current) observer.observe(stage.current);
    media.addEventListener("change", measure);
    addEventListener("resize", measure);
    void document.fonts.ready.then(measure);
    measure();
    return () => { disposed = true; cancelAnimationFrame(frame); observer.disconnect(); media.removeEventListener("change", measure); removeEventListener("resize", measure); };
  }, [count, locale]);

  useEffect(() => {
    if (!pinned || !track.current) return;
    const ids = signature.split("|");
    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      if (!track.current || !stage.current) return;
      const range = track.current.offsetHeight - stage.current.offsetHeight;
      const inset = parseFloat(getComputedStyle(stage.current).top) || 0;
      const distance = inset - track.current.getBoundingClientRect().top;
      setActive(Math.max(0, Math.min(count - 1, Math.floor(distance / (range / count)))));
      stage.current.style.setProperty("--case-progress", String(Math.max(0, Math.min(1, distance / range))));
    };
    const schedule = () => { if (visible && !frame) frame = requestAnimationFrame(update); };
    const restore = () => {
      const index = ids.indexOf(location.hash.slice(1));
      if (index >= 0 && track.current && stage.current) scrollToSlide(track.current, stage.current, index, count);
      update();
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; if (visible) schedule(); }, { rootMargin: "100px" });
    observer.observe(track.current);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("hashchange", restore);
    restore();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); removeEventListener("scroll", schedule); removeEventListener("hashchange", restore); };
  }, [pinned, signature, count]);

  function navigate(event: MouseEvent<HTMLAnchorElement>, index: number) {
    if (!pinned || !track.current || !stage.current || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    history.replaceState(null, "", `#${slides[index].id}`);
    scrollToSlide(track.current, stage.current, index, count);
    setActive(index);
  }

  if (!count) return null;
  const style: CSSProperties & { "--story-count": number; "--story-distance": string } = {
    "--story-count": count, "--story-distance": `${count * dwell}svh`,
  };
  return (
    <div className={`audience-story ${className}`} data-pinned={pinned} data-active={active + 1} style={style}>
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
                <div className="audience-art">{slide.media ?? (slide.image ? <Image src={slide.image} width={960} height={1200} alt="" sizes="(max-width: 767px) 260px, (max-width: 1023px) 45vw, 48vw" /> : null)}</div>
              </li>
            ))}
          </ol>
          <nav className="audience-nav" aria-label={label}>
            {slides.map((slide, index) => <a key={slide.id} href={`#${slide.id}`} onClick={event => navigate(event, index)} aria-current={pinned && active === index ? "step" : undefined} aria-label={slide.label}><span dir="ltr">{String(index + 1).padStart(2, "0")}</span></a>)}
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
