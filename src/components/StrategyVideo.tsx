import Image from "next/image";
import { strategyOverview } from "@/content/media";
import type { Locale } from "@/content/site";

/** The supplied Drive player traps focus when embedded; native navigation keeps the site usable. */
export function StrategyVideo({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <a
      className="strategy-video-cover"
      href={strategyOverview.originalUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ar
        ? "شاهد فيديو الاستراتيجيات على Google Drive، يفتح في تبويب جديد"
        : "Watch the strategies video on Google Drive, opens in a new tab"}
    >
      <Image
        className="strategy-video-image"
        src="/art/strategy-video-thumbnail.jpg"
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 52vw, 640px"
        loading="eager"
        unoptimized
      />
      <span className="strategy-video-overlay" aria-hidden="true">
        <span className="strategy-video-play">
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </span>
      </span>
      <span className="strategy-video-caption">
        {ar ? "شاهد فيديو الاستراتيجيات" : "Watch the strategies video"}
        <small>{ar ? "Google Drive · يفتح في تبويب جديد" : "Google Drive · Opens in a new tab"}</small>
      </span>
    </a>
  );
}
