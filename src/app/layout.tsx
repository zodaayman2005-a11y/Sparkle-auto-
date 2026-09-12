import type { Metadata } from "next";
import { headers } from "next/headers";
import "../styles/fonts.css";
import "./globals.css";
import "../styles/refinement.css";
import "../styles/audience-story.css";
import "../styles/hero.css";
import "../styles/product-proof.css";
import "../styles/operations-pressure.css";
import "../styles/definition-mockups.css";
import "../styles/strategy-intro.css";
export const metadata: Metadata = {
  title: "Sparkle Auto — معاينة التصميم",
  description: "Sparkle Auto · Your car wash, in your pocket.",
  robots: { index: false, follow: false },
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale =
    (await headers()).get("x-sparkle-locale") === "en" ? "en" : "ar";
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        {(locale === "ar" ? [400, 500, 700, 800] : []).map(weight => (
          <link key={`ar-${weight}`} rel="preload" href={`/fonts/alexandria-arabic-${weight}-normal.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
        {[400, 500, 700].map(weight => (
          <link key={`en-${weight}`} rel="preload" href={`/fonts/space-grotesk-latin-${weight}-normal.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}

