"use client";
import { useRef, useState } from "react";
import { pick, type Locale } from "@/content/site";
import { filmChapters } from "@/content/website";

export function FilmPlayer({ locale }: { locale: Locale }) {
  const video = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const pendingSeek = useRef<number | null>(null);
  const ar = locale === "ar";
  function play(seconds?: number) {
    const player = video.current;
    if (!player) return;
    setStarted(true);
    setLoading(true);
    setError(false);
    // Keep the original 720p/30fps footage on every device, deferred until input.
    if (!player.getAttribute("src")) {
      player.src = "/media/sparkle-auto-film.mp4";
      player.load();
    }
    if (seconds !== undefined) {
      if (player.readyState >= 3) player.currentTime = seconds;
      else pendingSeek.current = seconds;
    }
    player.focus({ preventScroll: true });
    player.play().catch(() => { setLoading(false); /* Native controls allow retry after an interrupted play request. */ });
  }
  return <div className="mp-film-player">
    <div className="mp-film-stage">
    <video ref={video} controls={started} aria-hidden={!started} tabIndex={started ? 0 : -1} playsInline preload="none" poster="/media/sparkle-film-poster.jpg" onCanPlay={() => {
      if (video.current && pendingSeek.current !== null) {
        video.current.currentTime = pendingSeek.current;
        pendingSeek.current = null;
      }
    }} onWaiting={() => setLoading(true)} onPlaying={() => setLoading(false)} onPause={() => setLoading(false)} onPlay={() => setStarted(true)} onError={() => { setError(true); setLoading(false); }} aria-label={ar ? "فيلم سباركل أوتو التوضيحي، باللغة العربية، ٩ دقائق و٥٢ ثانية" : "Sparkle Auto illustrated film, in Arabic, 9 minutes 52 seconds"}>
      {ar ? "المتصفح لا يدعم تشغيل الفيديو." : "Your browser does not support video playback."}
    </video>
    {!started && <button type="button" className="mp-film-start" onClick={() => play()} aria-label={ar ? "شغّل فيلم ليه سباركل؟" : "Play Why Sparkle?"}><span className="mp-film-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="m9 5 11 7-11 7Z" /></svg></span><span className="mp-film-start-caption">{ar ? "شغّل الفيلم" : "Play the film"}</span></button>}
    {loading && !error && <span className="mp-film-loading" role="status">{ar ? "جارٍ تحميل الفيديو…" : "Loading video…"}</span>}
    </div>
    {error && <p className="mp-media-error" role="alert">{ar ? "تعذّر تحميل الفيديو. جرّب إعادة تحميل الصفحة." : "The video could not be loaded. Please try reloading the page."}</p>}
    <div className="mp-film-meta"><span>{ar ? "فيلم توضيحي · باللغة العربية" : "Illustrated film · Arabic audio"}</span><span dir="ltr">09:52</span></div>
    <nav className="mp-chapters" aria-label={ar ? "انتقل لجزء من الفيلم" : "Jump to a part of the film"}>{filmChapters.map(chapter => <button type="button" key={chapter.seconds} onClick={() => play(chapter.seconds)}><span dir="ltr">{chapter.time}</span>{pick(chapter.title, locale)}</button>)}</nav>
  </div>;
}
