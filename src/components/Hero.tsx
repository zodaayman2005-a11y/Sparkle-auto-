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
      <div className="hero-topline">
        <span>
          {locale === "ar"
            ? "تشغيل أوضح. وقت أكتر."
            : "CLEARER OPERATIONS. MORE TIME."}
        </span>
        <span dir="ltr">SPARKLE AUTO — 01</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-square" />
            {pick(hero.eyebrow, locale)}
          </div>
          <h1 id="hero-title">
            <span>{pick(hero.first, locale)}</span>{" "}
            <span>{pick(hero.mid, locale)}</span>{" "}
            <span>
              {pick(hero.last, locale)} <mark>{pick(hero.accent, locale)}</mark>
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
        <div className="hero-stage hero-owner-stage" id="hero-proof">
          <div className="stage-caption">
            <span className="caption-line" />
            {locale === "ar"
              ? "مغسلتك في جيبك."
              : "Your car wash, in your pocket."}
            
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>
          {locale === "ar"
            ? "من أول حجز. لحد قفلة اليوم."
            : "FROM THE FIRST BOOKING. TO THE DAILY CLOSE."}
        </span>
        <a href="#system">
          {locale === "ar"
            ? "الصورة تبدأ من هنا"
            : "THE BIG PICTURE STARTS HERE"}
          
        </a>
      </div>
    </section>
  );
}
