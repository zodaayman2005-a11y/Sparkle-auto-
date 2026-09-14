"use client";
import { useEffect } from "react";

/** Restore deep links after progressive story layout and font metrics settle. */
export function useAnchorRestoration() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let disposed = false;
    let interrupted = false;
    const restore = () => {
      if (interrupted || !location.hash) return;
      const target = document.getElementById(location.hash.slice(1));
      if (!target) return;
      const story = target.closest<HTMLElement>('.audience-story[data-pinned="true"]');
      const track = story?.querySelector<HTMLElement>(".audience-track");
      const stage = story?.querySelector<HTMLElement>(".audience-stage");
      if (track && stage) {
        const slides = Array.from(story!.querySelectorAll(".audience-scene"));
        const index = slides.indexOf(target);
        if (index < 0) return;
        const inset = parseFloat(getComputedStyle(stage).top) || 0;
        scrollTo({ top:track.getBoundingClientRect().top + scrollY - inset + (index + .5) * (track.offsetHeight-stage.offsetHeight)/slides.length, behavior:"instant" });
      } else {
        // Absolute coordinates cancel an in-flight native hash animation without adding its delta.
        const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
        const header = document.querySelector(".header-wrap")?.getBoundingClientRect().height ?? 0;
        const inset = Math.max(margin, padding, header + 16);
        scrollTo({ top:target.getBoundingClientRect().top + scrollY - inset, behavior:"instant" });
      }
    };
    const schedule = () => { if (!disposed) { clearTimeout(timer); timer = setTimeout(restore, 100); } };
    const navigate = () => { interrupted = false; schedule(); };
    const interrupt = () => { interrupted = true; clearTimeout(timer); };
    const onKeyDown = (event: KeyboardEvent) => {
      if (!["Shift", "Control", "Alt", "Meta"].includes(event.key)) interrupt();
    };
    addEventListener("sparkle:layout", schedule);
    addEventListener("hashchange", navigate);
    addEventListener("load", schedule);
    addEventListener("wheel", interrupt, { passive:true });
    addEventListener("pointerdown", interrupt, { passive:true });
    addEventListener("touchstart", interrupt, { passive:true });
    addEventListener("keydown", onKeyDown);
    void document.fonts.ready.then(schedule);
    return () => {
      disposed = true;
      clearTimeout(timer);
      removeEventListener("sparkle:layout", schedule);
      removeEventListener("hashchange", navigate);
      removeEventListener("load", schedule);
      removeEventListener("wheel", interrupt);
      removeEventListener("pointerdown", interrupt);
      removeEventListener("touchstart", interrupt);
      removeEventListener("keydown", onKeyDown);
    };
  }, []);
}
