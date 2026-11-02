"use client";
import Link from "next/link";
import { useState } from "react";
import { cta, pick, type Locale } from "@/content/site";
import { pageUrl } from "@/content/website";
import { pricingIncludedFeatures, pricingOptions, pricingTerms } from "@/content/pricing";

export function PricingOptions({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [mode, setMode] = useState<"once" | "monthly">("once");
  const monthly = mode === "monthly";
  function money(amount: number, monthly = false, extra = false) {
    return <span className="mp-price-money"><bdi>{extra ? "+" : ""}{amount.toLocaleString(ar ? "ar-EG" : "en-GB")}</bdi> <small>{ar ? monthly ? "جنيه / شهر" : "جنيه" : monthly ? "EGP / month" : "EGP"}</small></span>;
  }
  return <section className="shell mp-pricing-options" aria-label={ar ? "أسعار المغاسل ومراكز PPF" : "Car wash and PPF pricing"}>
    <div className="mp-payment-selector"><div className="mp-payment-toggle" role="group" aria-label={ar ? "طريقة الدفع" : "Payment option"}><button type="button" aria-pressed={!monthly} onClick={() => setMode("once")}>{ar ? "الدفع مرة واحدة" : "Pay once"}</button><button type="button" aria-pressed={monthly} onClick={() => setMode("monthly")}>{ar ? "اشتراك شهري" : "Monthly subscription"}</button></div></div>
    <div className="mp-price-grid">{pricingOptions.map(option => <article className="mp-price-option" key={option.id}>
      <header className="mp-price-option-head"><span className="mp-price-type" aria-hidden="true">{option.id === "car-wash" ? <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m4 10 2-6h12l2 6M3 10h18v9H3zM6 19v3m12-3v3M6 14h3m6 0h3"/></svg> : <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m12 2 9 4v6c0 5-9 10-9 10S3 17 3 12V6zM8 12l3 3 5-6"/></svg>}</span><h2>{pick(option.title, locale)}</h2></header>
      {!monthly ? <div className="mp-price-once"><p className="mp-price-label">{ar ? "الدفع مرة واحدة" : "Pay once"}</p><p className="mp-price-amount">{money(option.oneTime)}</p>
        <p className="mp-price-installments">{ar ? "أو " : "Or "}<bdi>{option.installmentCount} × {option.installmentAmount.toLocaleString(ar ? "ar-EG" : "en-GB")}</bdi> {ar ? "جنيه" : "EGP"}<small className="mp-price-installment-total">{ar ? "إجمالي الأقساط: " : "Installment total: "}{money(option.installmentCount * option.installmentAmount)}</small></p>
        <p className="mp-price-free-maintenance">{ar ? `أول ${pricingTerms.maintenanceAfterMonths} شهور صيانة مجانًا` : `First ${pricingTerms.maintenanceAfterMonths} months of maintenance free`}</p>
        <div className="mp-price-maintenance"><span>{ar ? `الصيانة بعد ${pricingTerms.maintenanceAfterMonths} شهور` : `Maintenance after ${pricingTerms.maintenanceAfterMonths} months`}</span>{money(option.maintenance, true)}</div>
      </div> : <div className="mp-price-once"><p className="mp-price-label">{ar ? "اشتراك شهري" : "Monthly subscription"}</p><p className="mp-price-amount">{money(option.monthly, true)}</p><p className="mp-price-installments">{ar ? `بحد أدنى ${pricingTerms.minimumSubscriptionMonths} شهر` : `${pricingTerms.minimumSubscriptionMonths}-month minimum`}</p><div className="mp-price-included">{ar ? "الصيانة مشمولة في الاشتراك" : "Maintenance included in your subscription"}</div></div>}
      <Link className="button primary mp-price-choose" href={pageUrl("contact", locale)}>{pick(cta, locale)}</Link>
      <div className="mp-price-features"><h3>{ar ? "منصتك تشمل" : "Your platform includes"}</h3><ul>{pricingIncludedFeatures.map(feature => <li key={feature.en}>{pick(feature, locale)}</li>)}</ul><p>{ar ? "واتساب يتطلب ربط رقم نشاطك وتفعيل الخدمة." : "WhatsApp requires business-number connection and service activation."}</p></div>
      <div className="mp-price-branches"><h3>{ar ? "لكل فرع إضافي" : "Each additional branch"}</h3><dl>
        <div><dt>{ar ? "رسوم مرة واحدة" : "One-time fee"}</dt><dd>{money(option.extraBranchOnce, false, true)}</dd></div>
        {!monthly ? <div><dt>{ar ? "الصيانة الشهرية الإضافية" : "Additional monthly maintenance"}</dt><dd>{money(option.extraBranchMaintenance, true, true)}</dd></div> : <div><dt>{ar ? "الاشتراك الشهري الإضافي" : "Additional monthly subscription"}</dt><dd>{money(option.extraBranchSubscription, true, true)}</dd></div>}
      </dl></div>
    </article>)}</div>
    <div className="mp-price-trial" id="trial"><span className="mp-price-trial-number" dir="ltr">{pricingTerms.trialDays}</span><div><h2>{ar ? "مش متأكد إن السيستم مناسب؟" : "Not sure the system fits?"}</h2><p>{ar ? "جرّب سباركل أوتو على شغل مغسلتك لمدة 14 يوم، وبعدها قرر من تجربة حقيقية." : "Try Sparkle Auto in your operation for 14 days, then decide from real experience."}</p></div><Link className="button primary" href={pageUrl("contact", locale)}>{pick(cta, locale)}</Link></div>
  </section>;
}
