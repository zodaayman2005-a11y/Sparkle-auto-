import { hero, pick, cta, type Locale } from "@/content/site";
import Image from "next/image";
export function Hero({
  locale,
  variant = "a",
  onReview,
}: {
  locale: Locale;
  variant?: "a" | "b";
  onReview?: () => void;
}) {
  return (
    <section className={`hero hero-${variant} hero-background`} aria-labelledby="hero-title">
      <div className="hero-art-layer">
        {/* User-requested original PNGs: preserve source bytes, dimensions and format. */}
        <Image
          className="hero-backdrop"
          src={locale === "en" ? "/hero/hero-en-original.png" : "/hero/hero-ar-original.png"}
          alt=""
          fill
          preload
          unoptimized
        />
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>{pick(hero.first, locale)}</span>{" "}
            <span>{pick(hero.mid, locale)}</span>{" "}
            <span>
              {pick(hero.last, locale)} <span>{pick(hero.accent, locale)}</span>
            </span>
          </h1>
          <p className="hero-body">{pick(hero.body, locale)}</p>
          <p className="hero-more">{pick(hero.more, locale)}</p>
          <div className="cta-row">
            {onReview ? (
              <button className="button primary" onClick={onReview}>
                {pick(cta, locale)}
                
              </button>
            ) : (
              <a className="button primary" href="#review">
                {pick(cta, locale)}
                
              </a>
            )}
            <a className="hero-secondary" href="#showcase">
              {locale === "ar"
                ? "شوف السيستم وهو شغال"
                : "See the System in Action"}
              
            </a>
          </div>
          <p className="reassurance">{pick(hero.reassurance, locale)}</p>
        </div>
        <div className="hero-stage hero-owner-stage" id="hero-proof" aria-hidden="true" />
      </div>
    </section>
  );
}
