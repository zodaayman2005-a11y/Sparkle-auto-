"use client";
import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/content/site";
import { systemOverview } from "@/content/media";
import { VideoPlayer } from "./VideoPlayer";

export function SystemOverviewVideo({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="system-overview-video">
        <button
          type="button"
          className="system-video-trigger"
          onClick={(event) => {
            event.currentTarget.focus({ preventScroll: true });
            setOpen(true);
          }}
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
      </div>
      {open && (
        <VideoPlayer
          asset={systemOverview}
          locale={locale}
          label={ar ? "شرح سيستم Sparkle Auto" : "Sparkle Auto system walkthrough"}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
