"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Locale } from "@/content/site";

const source = "https://drive.google.com/file/d/1ywJ4_ug-PPe3wcLDJhO_D9tBZAptT_4r";

export function SystemOverviewVideo({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => trigger.current?.focus());
  };
  return (
    <div className="system-overview-video">
      {open ? (
        <div onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
          <button className="text-link system-video-close" onClick={close}>{ar ? "إغلاق الفيديو" : "Close video"}</button>
          <iframe src={`${source}/preview`} title={ar ? "شرح Sparkle Auto" : "Sparkle Auto walkthrough"} allow="fullscreen" allowFullScreen />
        </div>
      ) : (
        <button
          ref={trigger}
          className="system-video-trigger"
          onClick={() => setOpen(true)}
          aria-label={ar ? "شغّل فيديو شرح السيستم" : "Play the system walkthrough"}
        >
          <Image src="/art/system-video-thumbnail.jpg" alt="" width={1280} height={720} sizes="(max-width: 767px) 100vw, 55vw" />
          <span className="strategy-video-play system-video-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
          <span>{ar ? "شغّل فيديو شرح السيستم" : "Play the system walkthrough"}</span>
        </button>
      )}
    </div>
  );
}
