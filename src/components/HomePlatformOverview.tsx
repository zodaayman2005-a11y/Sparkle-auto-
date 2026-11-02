import Link from "next/link";
import { pick, type Locale } from "@/content/site";
import { pageUrl, platformAreas } from "@/content/website";

const summaries = {
  operations: { ar: "من الحجز للتسليم، اعرف كل عربية وصلت لفين.", en: "From booking to handover, know where every vehicle stands." },
  workforce: { ar: "نظّم الشيفتات والحضور والصلاحيات والعمولات.", en: "Keep shifts, attendance, permissions and commissions together." },
  finance: { ar: "اربط الإيراد والمصروف والمخزون بالشغل اللي حصل.", en: "Connect income, expenses and inventory to the work behind them." },
  growth: { ar: "اعرف عميلك، وكمّل معاه بالعروض والحملات والولاء.", en: "Build on every visit with customer history, campaigns and loyalty." },
};
const cardTitles = {
  operations: { ar: "الحجز والتشغيل", en: "Bookings & operations" },
  workforce: { ar: "فريق العمل", en: "Team & workforce" },
  finance: { ar: "المالية والمخزون", en: "Finance & inventory" },
  growth: { ar: "العملاء والنمو", en: "Customers & growth" },
};

function AreaIcon({ id }: { id: string }) {
  return <svg viewBox="0 0 24 24" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {id === "operations" ? <><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18m-13 5 3 3 5-5"/></> : id === "workforce" ? <><circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 4v2"/></> : id === "finance" ? <><path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4"/><path d="M3 20h1"/></> : <><path d="M4 17V7m0 0 12-4v18L4 17Zm12 0h2a3 3 0 0 0 0-6h-2M7 18l1 4h4l-1-3"/><path d="m20 4 1-1m0 5h1"/></>}
  </svg>;
}

export function HomePlatformOverview({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <section className="mp-home-platform mp-overview" id="platform-overview" aria-labelledby="home-platform-title"><div className="shell">
    <div className="mp-overview-heading">
      <div><p className="mp-eyebrow">{ar ? "كل جزء مرتبط بالباقي" : "CONNECTED BY DESIGN"}</p>
        <h2 id="home-platform-title">{ar ? <>كل أجزاء شغلك.<br/><span>مرتبطة ببعض.</span></> : <>Every part of your business.<br/><span>Connected.</span></>}</h2>
        <p className="mp-overview-intro">{ar ? "الحجز والفريق والفلوس والعملاء، كلهم في منصة واحدة." : "Bookings, people, money and customers. One connected platform."}</p>
      </div>
      <Link className="mp-overview-all" href={pageUrl("platform", locale)}>{ar ? "استكشف المنصة" : "Explore the platform"}</Link>
    </div>
    <div className="mp-overview-grid">{platformAreas.map((area, index) => <Link className="mp-overview-card" key={area.id} href={`${pageUrl("platform", locale)}#${area.id}`}>
      <div className="mp-overview-card-top"><span className="mp-overview-icon"><AreaIcon id={area.id}/></span><span className="mp-overview-index" aria-hidden="true" dir="ltr">0{index + 1}</span></div>
      <div className="mp-overview-card-copy"><h3>{pick(cardTitles[area.id], locale)}</h3><p>{pick(summaries[area.id], locale)}</p></div>
      <span className="mp-overview-card-open">{ar ? "استكشف المميزات" : "View features"}</span>
    </Link>)}</div>
    <div className="mp-overview-bottom"><p><span className="mp-overview-connection" aria-hidden="true"/>{ar ? "ومعهم واتساب ودعم المنصة، في نفس مساحة العمل." : "Plus WhatsApp and platform support, in the same workspace."}</p><span>{ar ? "للمغاسل ومراكز العناية والـPPF والتشغيل المتنقل." : "For car washes, detailing, PPF and mobile operations."}</span></div>
  </div></section>;
}
