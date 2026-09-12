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
      <div className="system-video-heading">
        <h3>{ar ? "شوف السيستم وهو شغال" : "See the system in action"}</h3>
        <a href={`${source}/view`} target="_blank" rel="noopener noreferrer">
          {ar ? "افتح الفيديو على Google Drive — تبويب جديد" : "Open on Google Drive — new tab"}
        </a>
      </div>
      {open ? (
        <div onKeyDown={(event) => { if (event.key === "Escape") close(); }}>
          <button className="text-link system-video-close" onClick={close}>{ar ? "إغلاق الفيديو" : "Close video"}</button>
          <iframe src={`${source}/preview`} title={ar ? "شرح Sparkle Auto" : "Sparkle Auto walkthrough"} allow="fullscreen" allowFullScreen />
        </div>
      ) : (
        <button ref={trigger} className="system-video-trigger" onClick={() => setOpen(true)}>
          <Image src="/art/system-video-thumbnail.jpg" alt="" width={1280} height={720} unoptimized />
          <span className="system-video-play" aria-hidden="true">▶</span>
          <span>{ar ? "شغّل فيديو شرح السيستم" : "Play the system walkthrough"}</span>
        </button>
      )}
    </div>
  );
}
