"use client";
import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal } from "./Modal";
import { pick, hero, type Locale } from "@/content/site";
import { websitePages, pageUrl, type WebsitePage } from "@/content/website";

export function WebsiteBrand() {
  return <span className="mp-brand"><Image src="/brand/logo.jpg" width={48} height={48} alt="" unoptimized /><span dir="ltr">sparkle<span>AUTO</span></span></span>;
}
export function WebsiteHeader({ locale, page }: { locale: Locale; page: WebsitePage }) {
  const [open, setOpen] = useState(false);
  const ar = locale === "ar";
  // App Router retains the root layout during client-side locale navigation.
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);
  return <>
    <a className="skip-link" href="#main">{ar ? "انتقل للمحتوى" : "Skip to content"}</a>
    <div className="header-wrap mp-header-wrap"><header className="shell mp-header">
      <Link href={pageUrl("home", locale)} aria-label="Sparkle Auto"><WebsiteBrand /></Link>
      <nav className="mp-desktop-nav" aria-label={ar ? "القائمة الرئيسية" : "Main navigation"}>
        {websitePages.filter(item => item.id !== "contact").map(item => <Link key={item.id} href={pageUrl(item.id, locale)} aria-current={page === item.id ? "page" : undefined}>{pick(item.label, locale)}</Link>)}
      </nav>
      <div className="mp-header-actions">
        <Link className="mp-locale" href={pageUrl(page, ar ? "en" : "ar")} lang={ar ? "en" : "ar"}>{ar ? "EN" : "عربي"}</Link>
        <Link className="button primary mp-header-cta" href={pageUrl("contact", locale)}>{pick(hero.primaryCta, locale)}</Link>
        <button className="icon-button mp-menu" aria-expanded={open} aria-haspopup="dialog" aria-label={ar ? "افتح القائمة" : "Open menu"} onClick={() => setOpen(true)}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg></button>
      </div>
    </header></div>
    {open && <Modal kind="drawer mp-site-menu" label={ar ? "القائمة" : "Menu"} onClose={() => setOpen(false)}>
      <div className="mp-menu-content">
      <nav className="mp-drawer" aria-label={ar ? "صفحات الموقع" : "Site pages"}>
        {websitePages.filter(item => item.id !== "contact").map(item => <Link key={item.id} href={pageUrl(item.id, locale)} aria-current={page === item.id ? "page" : undefined} onClick={() => setOpen(false)}>{pick(item.label, locale)}</Link>)}
      </nav>
      <Link className="button primary mp-menu-book" href={pageUrl("contact", locale)} onClick={() => setOpen(false)}>{pick(hero.primaryCta, locale)}</Link>
      <div className="mp-menu-language"><span>{ar ? "اللغة" : "Language"}</span><Link className="drawer-language" href={pageUrl(page, ar ? "en" : "ar")} lang={ar ? "en" : "ar"} onClick={() => setOpen(false)}>{ar ? "English" : "العربية"}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg></Link></div>
      </div>
    </Modal>}
  </>;
}
