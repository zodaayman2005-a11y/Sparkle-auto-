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
            {ar ? "على قد تشغيلك" : "BUILT AROUND YOUR OPERATION"}
          </SectionLabel>
          <div className="pricing-heading">
            <div>
              <h2>
                {ar
                  ? "اختار الباقة على قد تشغيل مغسلتك."
                  : "Choose a plan that fits your operation."}
              </h2>
              <p>
                {ar
                  ? "مش محتاج تدفع في مميزات مش هتستخدمها. اختار حسب حجم التشغيل، وتجربة العملاء، وعدد الفروع."
                  : "Choose according to your operation, customer experience and number of branches."}
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
          <p className="draft-notice">
            {ar
              ? "مسودة أسعار للمعاينة — القيم والشروط لم تُعتمد للنشر بعد."
              : "PREVIEW PRICING — VALUES AND TERMS ARE NOT YET APPROVED FOR PUBLICATION."}
          </p>
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
          <p className="fineprint">
            {ar
              ? "* فترة حد الـ600 عربية والضرائب وشروط العرض تحتاج تأكيد. عرض السنوي المقترح: قيمة 10 شهور مقابل 12 شهر استخدام."
              : "* The period for the 600-vehicle limit, taxes and offer terms require confirmation. Proposed annual offer: 12 months for the equivalent of 10 monthly payments."}
          </p>
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
                  ? "مسودة العرض: تجربة 14 يوم على باقة النمو بعد مراجعة طريقة شغلك وتحديد هدف واضح. الإتاحة والشروط لسه قيد التأكيد."
                  : "Proposed offer: a 14-day Growth trial after reviewing your operation and setting a clear goal. Availability and terms are still awaiting confirmation."}
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


