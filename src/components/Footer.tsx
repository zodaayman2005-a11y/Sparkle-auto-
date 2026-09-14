import { Brand } from "./Primitives";
import { nav, pick, type Locale } from "@/content/site";

export function Footer({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const groups = [
    { title: ar ? "اكتشف سباركل" : "Explore Sparkle", links: nav.slice(0, 4) },
    { title: ar ? "خطوتك الجاية" : "Your next step", links: nav.slice(4) },
  ];
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div className="footer-identity">
            <a className="footer-brand" href={ar ? "/" : "/en"} aria-label="Sparkle Auto"><Brand /></a>
            <h2>{ar ? <>مغسلتك.<br />في صورة أوضح.</> : <>Your car wash.<br />A clearer picture.</>}</h2>
            <p>{ar ? "تشغيل أوضح لمغاسل السيارات." : "Clearer operations for car washes."}</p>
          </div>
          <nav className="footer-links" aria-label={ar ? "روابط التذييل" : "Footer navigation"}>
            {groups.map(group => (
              <div key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.links.map(link => <li key={link.id}><a href={`#${link.id}`}>{pick(link.label, locale)}</a></li>)}</ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="footer-actions">
          <a className="button primary" href="#review">{ar ? "احجز مراجعة تشغيل" : "Book an Operations Review"}</a>
          <a className="footer-top" href="#main">{ar ? "الرجوع للأعلى" : "Back to top"}<span aria-hidden="true">↑</span></a>
        </div>
        <div className="footer-meta">
          <span dir="ltr">© 2026 Sparkle Auto</span>
          <p>{ar ? "نظام إدارة متكامل لمغاسل السيارات" : "Integrated car wash management system"}</p>
          <a href={ar ? "/en" : "/"} lang={ar ? "en" : "ar"} hrefLang={ar ? "en" : "ar"}>{ar ? "English" : "العربية"}</a>
        </div>
      </div>
    </footer>
  );
}
