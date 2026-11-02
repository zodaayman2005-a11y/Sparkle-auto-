import type { MetadataRoute } from "next";
import { siteOrigin } from "@/content/seo";
import { websitePages, pageUrl } from "@/content/website";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin();
  return websitePages.flatMap(page => (["ar", "en"] as const).map(locale => ({
    url: new URL(pageUrl(page.id, locale), origin).href,
    alternates: { languages: { ar: new URL(pageUrl(page.id, "ar"), origin).href, en: new URL(pageUrl(page.id, "en"), origin).href } },
  })));
}
