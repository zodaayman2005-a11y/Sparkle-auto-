"use client";

import { useState } from "react";
import type { Locale } from "@/content/site";
import { proofAssets } from "@/content/media";
import { ProofWindow } from "./Primitives";
import { Modal } from "./Modal";

export function ScreenshotDialog({ id, locale, onClose }: { id: string; locale: Locale; onClose: () => void }) {
  const [fullSize, setFullSize] = useState(false);
  const ar = locale === "ar";
  return (
    <Modal label={ar ? "فحص الشاشة" : "Screenshot view"} onClose={onClose} kind="screenshot-modal">
      <div className="screenshot-tools">
        <button className="text-link" aria-pressed={fullSize} onClick={() => setFullSize(value => !value)}>{fullSize ? ar ? "ملاءمة الشاشة" : "Fit to window" : ar ? "الحجم الأصلي" : "Original size"}</button>
        <a className="text-link" href={proofAssets[id].src} target="_blank" rel="noopener noreferrer">{ar ? "افتح الصورة الأصلية" : "Open original image"}</a>
      </div>
      <p className="screenshot-hint">{ar ? "لقطة من النظام المرسل للمراجعة؛ الأرقام المعروضة ليست نتائج عملاء." : "A supplied system capture; the figures shown are not customer results."}</p>
      <div className="screenshot-pan" data-full-size={fullSize} tabIndex={0} aria-label={ar ? "صورة النظام، يمكن تمريرها بالحجم الأصلي" : "System image, scrollable at original size"}>
        <ProofWindow id={id} locale={locale} />
      </div>
    </Modal>
  );
}
