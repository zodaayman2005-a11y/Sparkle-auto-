import type { Metadata } from "next";
import type { Locale } from "./site";

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

export function localeMetadata(locale: Locale): Metadata {
  const ar = locale === "ar";
  const title = ar ? "Sparkle Auto | نظام إدارة مغاسل السيارات في مصر" : "Sparkle Auto | Car Wash Management System in Egypt";
  const description = ar
    ? "نظّم حجوزات وتشغيل وفريق ومالية ومخزون وعملاء مغسلتك من مكان واحد. تابع فروعك واعرف اللي بيحصل من غير مكالمات وتقارير متفرقة."
    : "Manage your car wash’s bookings, operations, team, finances, inventory and customers in one place. Follow your branches without piecing together calls and reports.";
  const origin = siteOrigin();
  const shareImage = new URL("/brand/share-cover-v1.jpg", origin).href;
  return {
    title, description, metadataBase:origin,
    robots: { index:true, follow:true },
    alternates:{ canonical:ar ? "/" : "/en", languages:{ ar:"/", en:"/en", "x-default":"/" } },
    openGraph: {
      type:"website", siteName:"Sparkle Auto", title, description,
      url:new URL(ar ? "/" : "/en", origin).href,
      locale:ar ? "ar_EG" : "en_GB", alternateLocale:ar ? "en_GB" : "ar_EG",
      images:[{ url:shareImage, width:1280, height:720, type:"image/jpeg", alt:ar ? "سباركل أوتو — كل اللي هتحتاجه هنا" : "Sparkle Auto — everything you need in one place" }],
    },
    twitter:{ card:"summary_large_image", title, description, images:[shareImage] },
  };
}
