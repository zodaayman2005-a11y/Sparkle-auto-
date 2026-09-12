"use client";
import { PricingAddons } from "./PricingAddons";
import { useState } from "react";
import { SectionLabel } from "./Primitives";

import { plans } from "@/content/commercial";
import { pick, cta, type Locale } from "@/content/site";
export function Commercial({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="section pricing" id="pricing">
        <div className="shell">
          <SectionLabel number="09">
            {ar ? "الباقات والأسعار" : "PLANS AND PRICING"}
          </SectionLabel>
          <div className="pricing-heading">
            <div>
              <h2>
                {ar
                  ? "خطط اشتراك Sparkle Auto."
                  : "Sparkle Auto subscription plans."}
              </h2>
              <p>
                {ar
                  ? "مقارنة واضحة بين سعر كل باقة، حدود التشغيل، والمزايا المتاحة."
                  : "A clear comparison of each plan’s price, operating limits and included features."}
              </p>
            </div>
            <div
              className="billing-switch"
              role="group"
              aria-label={ar ? "فترة الاشتراك" : "Billing period"}
            >
              <button aria-pressed={!annual} onClick={() => setAnnual(false)}>
                {ar ? "شهري" : "Monthly"}
              </button>
              <button aria-pressed={annual} onClick={() => setAnnual(true)}>
                {ar ? "سنوي" : "Yearly"}
              </button>
            </div>
          </div>
          <div className="pricing-grid">
            {plans.map((p, i) => {
              const price = annual ? p.annual : p.monthly;
              return (
                <article
                  className={`price-card ${i === 1 ? "growth" : ""}`}
                  key={p.id}
                >
                  <div className="plan-top">
                    <span dir="ltr">0{i + 1}</span>
                    {i === 1 && (
                      <span>
                        {ar
                          ? "للنمو وتجربة العميل"
                          : "GROWTH & CUSTOMER EXPERIENCE"}
                      </span>
                    )}
                  </div>
                  <h3>{pick(p.title, locale)}</h3>
                  <p className="plan-description">
                    {pick(p.description, locale)}
                  </p>
                  <div className="price">
                    {price ? (
                      <>
                        <strong dir="ltr">
                          {price.toLocaleString("en-US")}
                        </strong>
                        <span>
                          {ar ? "جنيه" : "EGP"}
                          <small>
                            {annual
                              ? ar
                                ? "سنويًا"
                                : "per year"
                              : ar
                                ? "شهريًا"
                                : "per month"}
                          </small>
                        </span>
                      </>
                    ) : (
                      <strong className="custom-price">
                        {ar ? "نتكلم عن تشغيلك." : "Let’s talk operations."}
                      </strong>
                    )}
                  </div>
                  {price === null && (
                    <p className="fineprint">
                      {ar
                        ? "السعر النهائي يُحدّد في المراجعة."
                        : "Final pricing is determined during the review."}
                    </p>
                  )}
                  <a
                    className={`button ${i === 1 ? "primary" : "secondary"}`}
                    href={`#review`}
                  >
                    {pick(cta, locale)}
                    
                  </a>
                  <ul>
                    {p.features.map((f, j) => (
                      <li key={j}>
                        <span aria-hidden="true">✓</span>
                        {pick(f, locale)}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <PricingAddons locale={locale} />
          <div className="trial-strip">
            <span className="trial-number" dir="ltr">
              14
            </span>
            <div>
              <h3>
                {ar
                  ? "مش متأكد إن السيستم مناسب؟"
                  : "Not sure the system fits?"}
              </h3>
              <p>
                {ar
                  ? "جرّب Sparkle Auto على شغل مغسلتك لمدة 14 يوم، وشوف الفرق بنفسك قبل ما تقرر."
                  : "Try Sparkle Auto in your operation for 14 days, then decide from real experience."}
              </p>
            </div>
            <a className="button secondary" href="#review">
              {ar ? "احجز مراجعة الأول" : "Book a Review First"}
              
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


