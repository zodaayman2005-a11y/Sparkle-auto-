"use client";
import { useState, useEffect } from "react";
import { type Locale } from "@/content/site";
import { Hero } from "./Hero";
import { Brand } from "./Primitives";
import { Modal } from "./Modal";
export function DesignLab({
  locale,
  variant,
}: {
  locale: Locale;
  variant: "a" | "b";
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  return (
    <div className="site" dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <div className="lab-bar">
        {locale === "ar"
          ? "معمل تصميم Sparkle Auto"
          : "SPARKLE AUTO DESIGN LAB"}
      </div>
      <header className="header shell">
        <a href={locale === "ar" ? "/" : "/en"} aria-label="Sparkle Auto">
          <Brand />
        </a>
        <nav className="lab-nav" aria-label="Design variants">
          <a
            href={`/design?variant=a&locale=${locale}`}
            aria-current={variant === "a" ? "page" : undefined}
          >
            A
          </a>
          <a
            href={`/design?variant=b&locale=${locale}`}
            aria-current={variant === "b" ? "page" : undefined}
          >
            B
          </a>
          <a
            href={`/design?variant=${variant}&locale=${locale === "ar" ? "en" : "ar"}`}
          >
            {locale === "ar" ? "English" : "العربية"}
          </a>
        </nav>
      </header>
      <main>
        <Hero
          locale={locale}
          variant={variant}
          onReview={() => setOpen(true)}
        />
        <section className="shell type-sheet" id="system">
          <span className="eyebrow">FOUNDATIONS / 01</span>
          <h2>
            {locale === "ar"
              ? "وضوح في كل تفصيلة."
              : "Clarity in every detail."}
          </h2>
          <p>
            {locale === "ar"
              ? "Alexandria — نظام واضح، وصورة كاملة، وخط مقروء."
              : "Space Grotesk — a clear system, a complete picture, and readable type."}
          </p>
          <div className="type-samples">
            <strong>Aa أبجد 0123456789</strong>
            <div className="cta-row">
              <button className="button primary" onClick={() => setOpen(true)}>
                {locale === "ar" ? "زر أساسي" : "Primary action"}
              </button>
              <button
                className="button secondary"
                onClick={() => setOpen(true)}
              >
                {locale === "ar" ? "زر ثانوي" : "Secondary action"}
              </button>
            </div>
          </div>
          <div className="palette">
            {[
              "#FFFFFF",
              "#F2FAFF",
              "#DDF3FF",
              "#91B1D8",
              "#01A2FF",
              "#0C264B",
              "#03132E",
            ].map((c) => (
              <div key={c}>
                <span style={{ background: c }} />
                <code>{c}</code>
              </div>
            ))}
          </div>
        </section>
      </main>
      {open && (
        <Modal
          label={locale === "ar" ? "تفاصيل النموذج" : "Form details"}
          onClose={() => setOpen(false)}
        >
          <p>
            {locale === "ar"
              ? "النموذج الكامل متاح في الصفحة الرئيسية."
              : "The complete form is available on the main page."}
          </p>
        </Modal>
      )}
    </div>
  );
}

