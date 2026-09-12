"use client";
import { useEffect, useState } from "react";
import { useAnchorRestoration } from "./useAnchorRestoration";
import { ReadingRail } from "./VisualDetails";
import { Brand } from "./Primitives";
import { Modal } from "./Modal";
import { cta, nav, pick, type Locale } from "@/content/site";
export function Header({ locale }: { locale: Locale }) {
  useAnchorRestoration();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1280px)");
    const closeOnWide = () => { if (wide.matches) setOpen(false); };
    wide.addEventListener("change", closeOnWide);
    return () => wide.removeEventListener("change", closeOnWide);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        {locale === "ar" ? "انتقل للمحتوى" : "Skip to content"}
      </a>
      <div className="header-wrap">
        <header className="header shell">
          <a href={locale === "ar" ? "/" : "/en"} aria-label="Sparkle Auto">
            <Brand />
          </a>
          <nav
            className="desktop-nav"
            aria-label={
              locale === "ar" ? "القائمة الرئيسية" : "Main navigation"
            }
          >
            {nav.filter((n) => n.id !== "review").map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
              >
                {pick(n.label, locale)}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a
              className="language-link"
              href={locale === "ar" ? "/en" : "/"}
              lang={locale === "ar" ? "en" : "ar"}
            >
              {locale === "ar" ? "EN" : "عربي"}
            </a>
            <a className="button primary header-cta" href="#review">
              {locale === "ar" ? "احجز مراجعة" : "Book a Review"}
            </a>
            <button
              className="icon-button menu-trigger"
              onClick={() => setOpen(true)}
              aria-label={locale === "ar" ? "افتح القائمة" : "Open menu"}
              aria-expanded={open}
              aria-haspopup="dialog"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </header>
        <ReadingRail />
      </div>
      {open && (
        <Modal
          kind="drawer"
          label={locale === "ar" ? "القائمة" : "Menu"}
          onClose={() => setOpen(false)}
        >
          <nav className="drawer-links" aria-label={locale === "ar" ? "أقسام الموقع" : "Page sections"}>
            {nav.map((n, i) => (
              <a
                href={`#${n.id}`}
                key={n.id}
                className={n.id === "review" ? "button primary" : undefined}
                onClick={() => setOpen(false)}
              >
                <span dir="ltr">0{i + 1}</span>
                <span>{n.id === "review" ? pick(cta, locale) : pick(n.label, locale)}</span>
              </a>
            ))}
          </nav>
            <a className="drawer-language" href={locale === "ar" ? "/en" : "/"} lang={locale === "ar" ? "en" : "ar"}>
              {locale === "ar" ? "English" : "العربية"}
            </a>
        </Modal>
      )}
    </>
  );
}

