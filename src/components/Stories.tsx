"use client";
import { Modal } from "./Modal";
import { ScreenshotDialog } from "./ProductProof";
import { useEffect, useState, useRef } from "react";
import {
  strategies,
  screens,
  pick,
  type Chapter,
  type Locale,
} from "@/content/site";
import { SectionLabel, ProofWindow, VideoButton } from "./Primitives";
import { StrategyStory } from "./AudienceStory";
import { SystemOverviewVideo } from "./SystemOverviewVideo";
import { StrategyVideo } from "./StrategyVideo";
import { type VideoAsset } from "@/content/media";
export function VideoPlayer({
  asset,
  locale,
  onClose,
}: {
  asset: VideoAsset;
  locale: Locale;
  onClose: () => void;
}) {
  const [error, setError] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    return () => {
      v?.pause();
    };
  }, []);
  return (
    <Modal
      label={locale === "ar" ? "فيديو الشرح" : "Video explanation"}
      onClose={onClose}
      kind="media"
    >
      <video
        ref={ref}
        src={asset.src}
        poster={asset.poster}
        controls
        autoPlay
        playsInline
        preload="none"
        onError={() => setError(true)}
      >
        {asset.captions?.map((c) => (
          <track
            key={c.lang}
            src={c.src}
            srcLang={c.lang}
            label={c.label}
            kind="captions"
          />
        ))}
      </video>
      {error && (
        <p role="alert">
          {locale === "ar"
            ? "الفيديو مش متاح حاليًا. تقدر تقفل النافذة وتكمل الشرح المكتوب."
            : "This video is unavailable. You can close this window and continue with the written explanation."}
        </p>
      )}
    </Modal>
  );
}
export function ScrollStory({
  locale,
  chapters = strategies,
}: {
  locale: Locale;
  chapters?: Chapter[];
}) {
  const ar = locale === "ar";
  if (!chapters.length) return null;
  return (
    <section
      className="section strategies illustrated-strategies"
      id="strategies"
    >
      <div className="shell">
        <div className="strategy-intro">
          <div className="strategy-copy">
            <SectionLabel number="05">
              {ar
                ? "طريقة شغل. مش مجرد برنامج."
                : "A WAY OF WORKING. NOT JUST SOFTWARE."}
            </SectionLabel>
            <div className="strategy-heading">
              <h2>
                {ar ? (
                  <>
                    المغسلة القوية.
                    <br />
                    <span>وراها نظام.</span>
                  </>
                ) : (
                  <>
                    A strong car wash.
                    <br />
                    <span>A clear system.</span>
                  </>
                )}
              </h2>
              <p>
                {ar
                  ? "المغسلة القوية مش معدات وعمال أكتر وبس. المغسلة اللي تقدر تكبر وتحافظ على مستواها بتتبني على طريقة تشغيل واضحة. وعشان كده Sparkle Auto مبني على خمس استراتيجيات أساسية."
                  : "A strong car wash needs more than equipment and a bigger team. A car wash that grows while maintaining its standards needs a clear way of working. Sparkle Auto is built around five operating strategies."}
              </p>
              <a className="text-link" href="#showcase">
                {ar ? "انتقل لشاشات السيستم" : "Skip to the system screens"}
              </a>
            </div>
          </div>
          <StrategyVideo locale={locale} />
        </div>
        <StrategyStory locale={locale} chapters={chapters} />
      </div>
    </section>
  );
}
export function ProductShowcase({ locale }: { locale: Locale }) {
  const [zoom, setZoom] = useState<string | null>(null);
  const [video, setVideo] = useState<VideoAsset | null>(null);
  const ar = locale === "ar";
  return (
    <section
      className="section showcase paired-showcase"
      id="showcase"
    >
      <div className="shell">
        <SectionLabel number="06">
          {ar ? "السيستم على حقيقته" : "THE SYSTEM, UP CLOSE"}
        </SectionLabel>
        <div className="section-intro">
          <h2>
            {ar ? (
              <>
                كل شاشة.
                <br />
                إجابة على سؤال.
              </>
            ) : (
              <>
                Every screen.
                <br />
                An answer.
              </>
            )}
          </h2>
          <p>
            {ar
              ? "مش هنقولك إن السيستم قوي وخلاص… شوفه وهو بيجاوب أسئلتك. كل شاشة في Sparkle Auto معمولة عشان تجاوب سؤال حقيقي بيتكرر في يوم صاحب المغسلة."
              : "Don’t just take our word for it. See the questions the system answers. Each Sparkle Auto screen is designed around a question that comes up in the owner’s working day."}
          </p>
        </div>
        <SystemOverviewVideo locale={locale} />
        <nav className="proof-chapter-nav" aria-label={ar ? "شاشات السيستم" : "System screens"}>
          {screens.map((screen, index) => (
            <a key={screen.id} href={`#${screen.id}`}><span dir="ltr">0{index + 1}</span> {pick(screen.title, locale)}</a>
          ))}
          <a href="#journey">{ar ? "تابع رحلة التشغيل" : "Continue to the workflow"}</a>
        </nav>
        <div className="proof-chapters">
          {screens.map((screen, index) => (
            <article className="screen-chapter proof-chapter" id={screen.id} key={screen.id} aria-labelledby={`${screen.id}-title`}>
              <div className="proof-chapter-copy">
                <span className="proof-chapter-number" dir="ltr">0{index + 1} / 07</span>
                <h3 id={`${screen.id}-title`}>{pick(screen.title, locale)}</h3>
                <h4>{pick(screen.question, locale)}</h4>
                <p>{pick(screen.body, locale)}</p>
                <button className="text-link" onClick={() => setZoom(screen.id)}>{ar ? "كبّر الشاشة" : "Enlarge screenshot"}</button>
                <VideoButton id={screen.id} locale={locale} onPlay={setVideo} />
              </div>
              <div className="proof-chapter-image"><ProofWindow id={screen.id} locale={locale} large /></div>
            </article>
          ))}
        </div>
      </div>
      {zoom && (
        <ScreenshotDialog id={zoom} locale={locale} onClose={() => setZoom(null)} />
      )}
      {video && (
        <VideoPlayer
          asset={video}
          locale={locale}
          onClose={() => setVideo(null)}
        />
      )}
    </section>
  );
}

