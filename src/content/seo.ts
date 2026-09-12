import type { Metadata } from "next";
import type { Locale } from "./site";

/** SITE_URL must be the owner-confirmed public origin, never inferred from a preview. */
export function siteOrigin(): URL | undefined {
  if (!process.env.SITE_URL) return;
  try {
    const url = new URL(process.env.SITE_URL);
    if (url.protocol === "https:" && !url.username && !url.password && url.pathname === "/") return url;
  } catch { /* Missing/invalid configuration deliberately produces no canonical. */ }
}

export function localeMetadata(locale: Locale): Metadata {
  const ar = locale === "ar";
  const title = ar ? "Sparkle Auto | نظام إدارة مغاسل السيارات في مصر — معاينة" : "Sparkle Auto | Car Wash Management System in Egypt — Preview";
  const description = ar
    ? "نظّم حجوزات وتشغيل وفريق ومالية ومخزون وعملاء مغسلتك من مكان واحد. تابع فروعك واعرف اللي بيحصل من غير مكالمات وتقارير متفرقة."
    : "Manage your car wash’s bookings, operations, team, finances, inventory and customers in one place. Follow your branches without piecing together calls and reports.";
  const origin = siteOrigin();
  return {
    title, description,
    // Commercial and delivery gates remain open; a hostname alone never authorizes indexing.
    robots: { index:false, follow:false },
    ...(origin ? { metadataBase:origin, alternates:{ canonical:ar ? "/" : "/en", languages:{ ar:"/", en:"/en", "x-default":"/" } } } : {}),
    openGraph: {
      type:"website", siteName:"Sparkle Auto", title, description,
      locale:ar ? "ar_EG" : "en_GB", alternateLocale:ar ? "en_GB" : "ar_EG",
      ...(origin ? { images:[{ url:`/brand/social-${locale}.jpg`, width:1280, height:720, alt:"Sparkle Auto" }] } : {}),
    },
    twitter:{ card:"summary_large_image", title, description, ...(origin ? { images:[`/brand/social-${locale}.jpg`] } : {}) },
  };
}
