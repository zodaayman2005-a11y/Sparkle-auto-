"use client";

import Image from "next/image";
import { useState } from "react";
import { strategyOverview } from "@/content/media";
import type { Locale } from "@/content/site";
import { VideoPlayer } from "./VideoPlayer";

export function StrategyVideo({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="strategy-video-cover"
        onClick={(event) => {
          // WebKit does not focus buttons on pointer activation. Give the dialog
          // an explicit return target without moving the page underneath it.
          event.currentTarget.focus({ preventScroll: true });
          setOpen(true);
        }}
        aria-label={ar ? "شغّل فيديو الاستراتيجيات" : "Play the strategies video"}
      >
        <Image
          className="strategy-video-image"
          src="/art/strategy-video-thumbnail.jpg"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1199px) 52vw, 640px"
          loading="lazy"
        />
        <span className="strategy-video-overlay" aria-hidden="true">
          <span className="strategy-video-play">
            <svg viewBox="0 0 24 24" width="28" height="28">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        </span>
        <span className="strategy-video-caption">
          {ar ? "شغّل فيديو الاستراتيجيات" : "Play the strategies video"}
        </span>
      </button>
      {open && (
        <VideoPlayer
          asset={strategyOverview}
          locale={locale}
          label={ar ? "فيديو استراتيجيات التشغيل" : "Operating strategies video"}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
