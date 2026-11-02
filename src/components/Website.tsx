import Link from "next/link";
import { PlatformScreenshot } from "./PlatformScreenshot";
import { PlatformNavigation } from "./PlatformNavigation";
import { FAQ } from "./FAQ";
import { Hero } from "./Hero";
import { HomePlatformOverview } from "./HomePlatformOverview";
import { PricingOptions } from "./PricingOptions";
import { WebsiteHeader } from "./WebsiteHeader";
import { WebsiteFooter } from "./WebsiteFooter";
import { FilmPlayer } from "./FilmPlayer";
import { ReviewForm } from "./ReviewForm";
import { LegacyLandingLinks } from "./LegacyLandingLinks";
import { pick, cta, type Locale, type Pair } from "@/content/site";
import { pageUrl, platformSections, platformScreenshots, websiteTitles, type WebsitePage } from "@/content/website";

function Arrow() { return <span className="mp-arrow" aria-hidden="true">↗</span>; }
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="mp-eyebrow">{children}</p>; }
function ReviewLink({ locale, secondary = false }: { locale: Locale; secondary?: boolean }) {
  return <Link className={`button ${secondary ? "secondary" : "primary"}`} href={pageUrl("contact", locale)}>{pick(cta, locale)}</Link>;
}
function PageIntro({ locale, page, body }: { locale: Locale; page: WebsitePage; body?: Pair }) {
  return <div className="shell mp-page-intro"><h1>{pick(websiteTitles[page], locale)}</h1>{body && <p>{pick(body, locale)}</p>}</div>;
}
function NextStep({ locale, title, body }: { locale: Locale; title?: Pair; body?: Pair }) {
  const ar = locale === "ar";
  return <section className="mp-next"><div className="shell mp-next-inner"><div><h2>{title ? pick(title, locale) : ar ? "جاهز تبدأ؟" : "Ready to get started?"}</h2><p>{body ? pick(body, locale) : ar ? "عرّفنا بشغلك، وهنتواصل معاك عشان نساعدك تبدأ مع سباركل أوتو." : "Tell us about your business. We’ll contact you to help you get started with Sparkle Auto."}</p></div><ReviewLink locale={locale} /></div></section>;
}

function Home({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <>
    <Hero locale={locale} compact headline={<><span className="mp-hero-line">{ar ? "مغسلتك." : "Your car wash."}</span><span className="mp-hero-line">{ar ? "فريقك." : "Your team."}</span><span className="mp-hero-line">{ar ? "نموك." : "Your growth."}</span><span className="mp-hero-line mp-hero-platform">{ar ? "في منصة واحدة." : "One platform."}</span></>} />
    <HomePlatformOverview locale={locale} />
    <NextStep locale={locale} />
  </>;
}

function Platform({ locale }: { locale: Locale }) {
  return <>
    <PageIntro locale={locale} page="platform" />
    <PlatformNavigation locale={locale} items={platformSections.map(area => ({ id: area.id, label: pick(area.title, locale) }))} />
    <div className="shell mp-platform-areas">{platformSections.map(area => <section className="mp-platform-area" id={area.id} key={area.id}><div className="mp-platform-layout">
      <header className="mp-platform-copyhead"><Eyebrow><span dir="ltr">{area.tag}</span></Eyebrow><h2>{pick(area.question, locale)}</h2></header>
      <PlatformScreenshot locale={locale} screen={platformScreenshots[area.id]} />
      <div className="mp-platform-details"><p>{pick(area.body, locale)}</p><ul>{area.items.map(item => <li key={item.en}>{pick(item, locale)}</li>)}</ul></div>
    </div></section>)}</div>
    <NextStep locale={locale} />
  </>;
}

function Film({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <>
    <div className="shell mp-film-layout">
    <header className="mp-film-intro"><h1>{ar ? "ليه " : "Why "}<span>{ar ? "سباركل؟" : "Sparkle?"}</span></h1><p>{ar ? "من زحمة اليوم لشغل أوضح وأسهل في المتابعة. شوف الفرق في الفيلم، أو اختار الجزء اللي يهمك." : "From the daily rush to a clearer way to run your car wash. Watch the change unfold, or jump to a moment below."}</p></header>
    <section className="mp-cinema" aria-label={ar ? "فيلم سباركل أوتو" : "The Sparkle Auto film"}><FilmPlayer locale={locale} /></section>
    <section className="mp-film-summary" aria-label={ar ? "إيه اللي بيتغير؟" : "What changes?"}><div><span className="mp-code">01</span><h2>{ar ? "شغّل يومك." : "Run your day."}</h2><p>{ar ? "حجوزات وجدول وفريق ومتابعة لكل عربية." : "Bookings, schedules, people and vehicle progress."}</p></div><div><span className="mp-code">02</span><h2>{ar ? "افهم أرقامك." : "Know your numbers."}</h2><p>{ar ? "اربط الإيراد والمصروف والتقارير بالتشغيل." : "Connect revenue, expenses and reporting to operations."}</p></div><div><span className="mp-code">03</span><h2>{ar ? "كمّل مع عميلك." : "Keep customers close."}</h2><p>{ar ? "تاريخ زيارات وعروض وحملات وولاء وفرص نمو." : "Visit history, offers, campaigns, loyalty and growth tools."}</p></div></section>
    </div>
  </>;
}

function Subscription({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <>
    <PageIntro locale={locale} page="subscription" />
    <PricingOptions locale={locale} />
    <section className="shell mp-short-faq"><h2>{ar ? "قبل ما تبدأ" : "Before you start"}</h2>
      <details><summary>{ar ? "هل تطبيق العميل اشتراك منفصل؟" : "Is the customer experience a separate tier?"}<span className="mp-disclosure-icon" aria-hidden="true" /></summary><p>{ar ? "تجربة العميل جزء من المنصة الكاملة، مع الحجز والعملاء والعروض والولاء، وإعدادها بيكون حسب نشاط مغسلتك." : "The customer experience is part of the complete platform, alongside bookings, customer records, offers and loyalty, configured for your business."}</p></details>
      <details><summary>{ar ? "إيه الفرق بين رسوم المنصة وعضويات العملاء؟" : "How are platform fees different from customer memberships?"}<span className="mp-disclosure-icon" aria-hidden="true" /></summary><p>{ar ? "رسوم Sparkle Auto خاصة باستخدام المنصة. عضويات العملاء أداة داخلها تتيح لمغسلتك تنظيم اشتراكات الخدمات اللي بتبيعها لعملائك." : "Sparkle Auto fees cover your business's use of the platform. Customer memberships are a feature your car wash uses to sell and manage service allowances for its own customers."}</p></details>
      <details><summary>{ar ? "هل ينفع لأكتر من فرع أو نشاط؟" : "Can it support multiple branches or operating types?"}<span className="mp-disclosure-icon" aria-hidden="true" /></summary><p>{ar ? "المنصة بتدعم الفروع والمغاسل الثابتة والتشغيل المتنقل ومسارات العناية والـPPF. بنراجع نشاطك علشان نحدد الإعداد اللي يناسبه." : "The platform supports branches, fixed-location and mobile washes, and detailing/PPF workflows. We review your activity to identify the appropriate setup."}</p></details>
      <Link className="mp-inline-link" href={pageUrl("faq", locale)}>{ar ? "شوف كل الأسئلة والإجابات" : "Explore all questions and answers"}<Arrow /></Link>
    </section>
  </>;
}

export function Website({ locale, page = "home" }: { locale: Locale; page?: WebsitePage }) {
  return <div className={`site mp mp-${page}`} dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
    <WebsiteHeader locale={locale} page={page} />
    {page === "home" && <LegacyLandingLinks locale={locale} />}
    <main id="main">
      {page === "home" && <Home locale={locale} />}
      {page === "platform" && <Platform locale={locale} />}
      {page === "film" && <Film locale={locale} />}
      {page === "subscription" && <Subscription locale={locale} />}
      {page === "faq" && <><FAQ locale={locale} standalone /><NextStep locale={locale} /></>}
      {page === "contact" && <><PageIntro locale={locale} page="contact" body={{ ar: "عرّفنا بشغلك. هنتواصل معاك عشان نرتّب بداية استخدام سباركل أوتو ونجاوب على أسئلتك.", en: "Tell us about your business. We’ll contact you to discuss your setup and answer your questions about Sparkle Auto." }} /><ReviewForm locale={locale} compact /></>}
    </main>
    <WebsiteFooter locale={locale} page={page} />
  </div>;
}
