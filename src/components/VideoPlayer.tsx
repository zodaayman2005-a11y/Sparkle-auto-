"use client";

import { useEffect, useRef, useState } from "react";
import type { VideoAsset } from "@/content/media";
import type { Locale } from "@/content/site";
import { Modal } from "./Modal";

export function VideoPlayer({
  asset,
  locale,
  onClose,
  label,
}: {
  asset: VideoAsset;
  locale: Locale;
  onClose: () => void;
  label?: string;
}) {
  const [error, setError] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const ar = locale === "ar";
  const dialogLabel = label ?? (ar ? "فيديو الشرح" : "Video explanation");

  useEffect(() => {
    const video = ref.current;
    // This component mounts only after Play is pressed. Reapply that intent after
    // Strict Mode's effect cleanup; browsers that block it retain native controls.
    void video?.play().catch(() => {
      // Decode/network failures are handled by onError; autoplay policy isn't one.
    });
    return () => video?.pause();
  }, []);

  return (
    <Modal label={dialogLabel} onClose={onClose} kind="media">
      {!error && (
        <video
          ref={ref}
          src={asset.src}
          poster={asset.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          onError={() => setError(true)}
        >
          {asset.captions?.map((caption) => (
            <track
              key={caption.lang}
              src={caption.src}
              srcLang={caption.lang}
              label={caption.label}
              kind="captions"
            />
          ))}
          {ar
            ? "متصفحك لا يدعم تشغيل الفيديو."
            : "Your browser does not support video playback."}
        </video>
      )}
      {error && (
        <div className="video-error" role="alert">
          <strong>{ar ? "تعذّر تشغيل الفيديو" : "The video could not play"}</strong>
          <p>
            {ar
              ? "جرّب تحديث الصفحة. لو استمرت المشكلة، تقدر تكمل الشرح المكتوب في نفس القسم."
              : "Refresh the page and try again. You can continue with the written explanation in this section if the problem persists."}
          </p>
        </div>
      )}
    </Modal>
  );
}
