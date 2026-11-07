import { hero, pick, type Locale } from "@/content/site";
import Image from "next/image";
import heroMedia from "@/content/hero-media.json";
import type { ReactNode } from "react";
import { pageUrl, websiteTitles } from "@/content/website";
export function Hero({
  locale,
  variant = "a",
  onReview,
  headline,
  compact = false,
  showPrimaryCta = true,
}: {
  locale: Locale;
  variant?: "a" | "b";
  onReview?: () => void;
  headline?: ReactNode;
  compact?: boolean;
  showPrimaryCta?: boolean;
}) {
  return (
    <section className={`hero hero-${variant} hero-background`} aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            {headline ?? <>
            <span>{pick(hero.first, locale)}</span>{" "}
            <span>{pick(hero.mid, locale)}</span>{" "}
            <span>
              {pick(hero.last, locale)} <span>{pick(hero.accent, locale)}</span>
            </span>
            </>}
          </h1>
          <p className="hero-body">{pick(hero.body, locale)}</p>
          {!compact && <p className="hero-more">{pick(hero.more, locale)}</p>}
          <div className="cta-row">
            {showPrimaryCta && (onReview ? (
              <button className="button primary" onClick={onReview}>
                {pick(hero.primaryCta, locale)}
                
              </button>
            ) : (
              <a className="button primary" href={pageUrl("contact", locale)}>
                {pick(hero.primaryCta, locale)}
                
              </a>
            ))}
            <a className="button hero-secondary" href={pageUrl("film", locale)}>
              <span className="hero-play-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </span>
              <span>
              {pick(websiteTitles.film, locale)}
              </span>
            </a>
          </div>
          {!compact && <p className="reassurance">{pick(hero.reassurance, locale)}</p>}
        </div>
        <div className="hero-stage hero-owner-stage" id="hero-proof" aria-hidden="true">
          <div className="hero-art-layer">
            {/* Full-bleed on desktop; contained in its own flow area on compact screens. */}
            <Image
              className="hero-backdrop"
              src={locale === "en" ? "/hero/hero-en-original.png" : "/hero/hero-ar-original.png"}
              alt=""
              fill
              preload
              sizes="(max-width: 767px) calc(100vw + 160px), 100vw"
              placeholder="blur"
              blurDataURL={heroMedia[locale].blurDataURL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
