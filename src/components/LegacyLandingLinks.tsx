"use client";
import { useEffect } from "react";
import type { Locale } from "@/content/site";
import { pageUrl, type WebsitePage } from "@/content/website";

export function LegacyLandingLinks({ locale }: { locale: Locale }) {
  useEffect(() => {
    const destinations: Record<string, WebsitePage> = { system: "platform", fit: "platform", strategies: "film", showcase: "platform", journey: "film", setup: "subscription", pricing: "subscription", faq: "faq", review: "contact", lead: "contact", product: "platform" };
    function redirect() {
      const destination = destinations[window.location.hash.slice(1)];
      if (destination) window.location.replace(pageUrl(destination, locale));
    }
    redirect();
    window.addEventListener("hashchange", redirect);
    return () => window.removeEventListener("hashchange", redirect);
  }, [locale]);
  return null;
}
