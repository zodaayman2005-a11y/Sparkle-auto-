import type { Metadata } from "next";
import type { Locale } from "./site";
import { pageUrl, websiteTitles, type WebsitePage } from "./website";

/** Prefer an explicitly configured origin and fall back to the confirmed public site. */
export function siteOrigin(): URL {
  const fallback = new URL("https://sparkle-auto-landing.vercel.app");
  if (!process.env.SITE_URL) return fallback;
  try {
    const url = new URL(process.env.SITE_URL);
    if (url.protocol === "https:" && !url.username && !url.password && url.pathname === "/") return url;
  } catch { /* Invalid configuration falls back to the confirmed public origin. */ }
  return fallback;
}

export function localeMetadata(locale: Locale, page: WebsitePage = "home"): Metadata {
  const ar = locale === "ar";
  const title = `Sparkle Auto | ${websiteTitles[page][locale]}`;
  const description = ar
    ? "منصة متكاملة لإدارة وتشغيل ونمو مغاسل السيارات ومراكز العناية: الحجز والجدول والفريق والمالية والمخزون والعملاء والحملات، في مكان واحد."
    : "One connected platform for car wash and detailing management, operations and growth: bookings, schedules, workforce, finance, inventory, customers and campaigns.";
  const origin = siteOrigin();
  const shareImage = new URL("/brand/share-cover-v1.jpg", origin).href;
  return {
    title, description, metadataBase:origin,
    robots: { index:true, follow:true },
    alternates:{ canonical:pageUrl(page, locale), languages:{ ar:pageUrl(page, "ar"), en:pageUrl(page, "en"), "x-default":pageUrl(page, "ar") } },
    openGraph: {
      type:"website", siteName:"Sparkle Auto", title, description,
      url:new URL(pageUrl(page, locale), origin).href,
      locale:ar ? "ar_EG" : "en_GB", alternateLocale:ar ? "en_GB" : "ar_EG",
      images:[{ url:shareImage, width:1280, height:720, type:"image/jpeg", alt:ar ? "سباركل أوتو — كل اللي هتحتاجه هنا" : "Sparkle Auto — everything you need in one place" }],
    },
    twitter:{ card:"summary_large_image", title, description, images:[shareImage] },
  };
}
