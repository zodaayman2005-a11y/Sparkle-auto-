import Link from "next/link";
import { WebsiteBrand } from "./WebsiteHeader";
import { pick, type Locale } from "@/content/site";
import { websitePages, pageUrl, type WebsitePage } from "@/content/website";
export function WebsiteFooter({ locale, page }: { locale: Locale; page: WebsitePage }) {
  const ar = locale === "ar";
  return <footer className="mp-footer">
    <div className="shell mp-footer-top"><Link href={pageUrl("home", locale)} aria-label="Sparkle Auto"><WebsiteBrand /></Link>
      <p>{ar ? "إدارة وتشغيل ونمو. في منصة واحدة." : "Management, operations and growth. Connected."}</p>
      <nav aria-label={ar ? "روابط التذييل" : "Footer navigation"}>{websitePages.filter(item => item.id !== "contact").map(item => <Link key={item.id} href={pageUrl(item.id, locale)}>{pick(item.label, locale)}</Link>)}</nav>
    </div>
    <div className="shell mp-footer-bottom"><span dir="ltr">© 2026 Sparkle Auto · Hyzex</span><Link href={pageUrl(page, ar ? "en" : "ar")} lang={ar ? "en" : "ar"}>{ar ? "English" : "العربية"}</Link></div>
  </footer>;
}
