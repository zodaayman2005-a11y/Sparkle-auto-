import { addons } from "@/content/commercial";
import { pick, type Locale } from "@/content/site";

export function PricingAddons({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <section className="pricing-addons" aria-labelledby="addons-title">
      <div className="addons-heading">
        <div>
          <span className="addons-eyebrow">{ar ? "خدمات إضافية اختيارية" : "OPTIONAL ADD-ONS"}</span>
          <h3 id="addons-title">{ar ? "إضافات على قد احتياجك." : "Extra support. On your terms."}</h3>
        </div>
        <p>{ar ? "اختار اللي يخدم شغلك، وضيفه على باقتك وقت ما تحتاجه." : "Choose the support your business needs and add it to your plan when you need it."}</p>
      </div>
      <div className="addons-grid">
        {addons.map((addon, index) => (
          <article className="addon-card" key={addon.id}>
            <span className="addon-index" aria-hidden="true">0{index + 1}</span>
            <h4>{pick(addon.title, locale)}</h4>
            <div className="addon-price">
              <span className="addon-price-prefix">{addon.id === "migration" ? (ar ? "يبدأ من" : "From") : (ar ? "بسعر" : "Price")}</span>
              <div><strong dir="ltr">{addon.price.toLocaleString("en-US")}</strong> <span>{ar ? "جنيه" : "EGP"}</span></div>
              <span className="addon-billing">{pick(addon.billing, locale)}</span>
            </div>
            <p className="addon-lead">{pick(addon.lead, locale)}</p>
            <p className="addon-description">{pick(addon.description, locale)}</p>
            <p className="addon-note">{pick(addon.note, locale)}</p>
          </article>
        ))}
      </div>
      <div className="addons-footer">
        <p>{ar ? "نحدد معاك الإضافات المناسبة أثناء مراجعة التشغيل." : "We’ll help you choose the right add-ons during your Operations Review."}</p>
        <a className="button secondary" href="#review">{ar ? "ناقش احتياجاتك معانا" : "Discuss your needs"}</a>
      </div>
    </section>
  );
}
