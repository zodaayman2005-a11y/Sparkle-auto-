"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { Modal } from "./Modal";
import { pick, type Locale } from "@/content/site";
import type { platformScreenshots } from "@/content/website";

export function PlatformScreenshot({ locale, screen }: { locale: Locale; screen: (typeof platformScreenshots)[keyof typeof platformScreenshots] }) {
  const ar = locale === "ar";
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const title = pick(screen.title, locale);
  const image = screen[locale];
  function openScreenshot() {
    setZoomed(false);
    setOpen(true);
  }
  return <figure className="mp-product-shot">
    <figcaption className="mp-shot-heading">{title}</figcaption>
    <button type="button" className="mp-shot-preview" aria-haspopup="dialog" aria-label={`${ar ? "كبّر الصورة" : "Enlarge screenshot"}: ${title}`} onClick={openScreenshot}>
      <Image src={image.src.replace(/\.png$/, ".webp")} alt={pick(screen.alt, locale)} width={image.width} height={image.height} unoptimized loading="lazy" className="mp-shot-image" />
      <span className="mp-shot-preview-action">{ar ? "كبّر الصورة واستكشف التفاصيل" : "Enlarge and explore the screen"}<span aria-hidden="true">↗</span></span>
    </button>
    <div className="mp-proof-caption"><span>{ar ? "لقطة من المنصة · واجهة عربية" : "Platform screenshot · English interface"}</span></div>
    {open && <Modal kind="product-lightbox" label={title} hideTitle onClose={() => setOpen(false)}>
      <div className={`mp-lightbox-viewport ${zoomed ? "mp-lightbox-zoomed" : ""}`} tabIndex={0} role="region" aria-label={ar ? "الصورة المكبرة" : "Enlarged screenshot"} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }}>
        <button type="button" className="mp-lightbox-zoom" aria-label={ar ? zoomed ? "تصغير الصورة" : "تقريب الصورة" : zoomed ? "Zoom out" : "Zoom screenshot"} aria-pressed={zoomed} onClick={() => setZoomed(!zoomed)} style={{ "--screenshot-ratio": image.width / image.height, "--screenshot-width": `${image.width}px` } as CSSProperties}>
        <Image src={image.src} alt={pick(screen.alt, locale)} width={image.width} height={image.height} unoptimized draggable={false} className="mp-lightbox-image" />
        </button>
      </div>
    </Modal>}
  </figure>;
}
