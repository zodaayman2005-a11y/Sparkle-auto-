"use client";

import { useEffect } from "react";

/** Older WebKit lacks native overscroll containment. Cancel only outward input
 * at a document edge; never replace scrolling, zoom or a nested scroll owner. */
export function ScrollBoundary() {
  useEffect(() => {
    if (CSS.supports("overscroll-behavior-y", "none")) return;
    const root = document.documentElement;
    root.dataset.scrollBoundary = "fallback";
    let previous: { x: number; y: number } | undefined;

    const outward = (target: EventTarget | null, delta: number) => {
      if (!delta || (window.visualViewport?.scale ?? 1) > 1) return false;
      const scrolling = document.scrollingElement ?? root;
      const maximum = Math.max(0, scrolling.scrollHeight - window.innerHeight);
      if (delta > 0 ? window.scrollY < maximum - 1 : window.scrollY > 1) return false;
      const element = target instanceof Element ? target : null;
      // Keep native media controls, form gestures and editable content intact.
      if (element?.closest("video,input,textarea,select,[contenteditable=true]")) return false;
      for (let node = element; node && node !== document.body && node !== root; node = node.parentElement) {
        if (node.scrollHeight <= node.clientHeight + 1) continue;
        if (!/(auto|scroll)/.test(getComputedStyle(node).overflowY)) continue;
        if (delta > 0 ? node.scrollTop < node.scrollHeight - node.clientHeight - 1 : node.scrollTop > 1) return false;
      }
      return true;
    };
    const start = (event: TouchEvent) => {
      const point = event.touches.length === 1 ? event.touches[0] : undefined;
      previous = point ? { x: point.clientX, y: point.clientY } : undefined;
    };
    const move = (event: TouchEvent) => {
      const point = event.touches.length === 1 ? event.touches[0] : undefined;
      if (!point || !previous) { start(event); return; }
      const dx = previous.x - point.clientX;
      const dy = previous.y - point.clientY;
      previous = { x: point.clientX, y: point.clientY };
      if (event.cancelable && Math.abs(dy) > Math.abs(dx) && outward(event.target, dy)) event.preventDefault();
    };
    const wheel = (event: WheelEvent) => {
      if (!event.ctrlKey && event.cancelable && Math.abs(event.deltaY) > Math.abs(event.deltaX) && outward(event.target, event.deltaY)) event.preventDefault();
    };
    document.addEventListener("touchstart", start, { passive: true });
    document.addEventListener("touchmove", move, { passive: false });
    document.addEventListener("wheel", wheel, { passive: false });
    return () => {
      delete root.dataset.scrollBoundary;
      document.removeEventListener("touchstart", start);
      document.removeEventListener("touchmove", move);
      document.removeEventListener("wheel", wheel);
    };
  }, []);
  return null;
}
