
import Image from "next/image";
import type { ReactNode } from "react";
import { proofAssets, videoAssets, type VideoAsset } from "@/content/media";
import { pick, pair, type Locale } from "@/content/site";

export function Brand() {
  return (
    <span className="brand">
      <Image src="/delivery/brand/logo-144.webp" alt="" width={48} height={48} unoptimized />
      <span dir="ltr">
        sparkle<span className="brand-auto">AUTO</span>
      </span>
    </span>
  );
}
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="section-label">
      <span className="small-number" dir="ltr">
        {number}
      </span>
      <span>{children}</span>
    </div>
  );
}
export function ProofWindow({
  id = "screen-overview",
  locale,
  large = false,
  priority = false,
}: {
  id?: string;
  locale: Locale;
  large?: boolean;
  priority?: boolean;
}) {
  const asset = proofAssets[id];
  if (!asset || asset.status !== "ready" || !asset.src) return null;
  return (
    <figure
      className={`proof-window ${large ? "large-proof" : ""}`}
      data-proof-status={asset.status}
    >
      <figcaption className="proof-top">
        <span>{pick(asset.title, locale)}</span>
        <span dir="ltr">
          {id.replace("screen-", "").replaceAll("-", " ").toUpperCase()}
        </span>
      </figcaption>
      <div
        className="proof-image"
        style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
      >
          <Image
            src={asset.src}
            alt={pick(asset.title, locale)}
            width={asset.width}
            height={asset.height}
            unoptimized
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
          />
      </div>
    </figure>
  );
}
export function VideoButton({
  id,
  locale,
  onPlay,
}: {
  id: string;
  locale: Locale;
  onPlay: (v: VideoAsset) => void;
}) {
  const v = videoAssets[id];
  if (v?.status !== "ready" || !v.src) return null;
  return (
    <button className="text-link" onClick={() => onPlay(v)}>
      {pick(pair("شوف الشرح", "Watch the explanation"), locale)}{" "}
      <span aria-hidden="true">▷</span>
    </button>
  );
}

