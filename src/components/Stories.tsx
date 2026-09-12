"use client";
import { Modal } from "./Modal";
import { ScreenshotDialog } from "./ProductProof";
import { useEffect, useState, useSyncExternalStore, useRef } from "react";
import {
  strategies,
  screens,
  pick,
  type Chapter,
  type Locale,
} from "@/content/site";
import { SectionLabel, ProofWindow, VideoButton } from "./Primitives";
import { StrategyStory } from "./AudienceStory";
import { StrategyVideo } from "./StrategyVideo";
import { type VideoAsset } from "@/content/media";
const query =
  "(min-width:1024px) and (min-height:740px) and (prefers-reduced-motion:no-preference)";
const subscribe = (callback: () => void) => {
  const m = matchMedia(query);
  m.addEventListener("change", callback);
  return () => m.removeEventListener("change", callback);
};
function useStoryLayout() {
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  );
}
function useActiveChapter(ids: string[]) {
  const [active, setActive] = useState(0);
  const signature = ids.join("|");
  useEffect(() => {
    const list = signature.split("|");
    let raf = 0;
    const update = () => {
      raf = 0;
      let winner = 0;
      const line = innerHeight * 0.4;
      for (let i = 0; i < list.length; i++) {
        const el = document.getElementById(list[i]);
        if (el && el.getBoundingClientRect().top <= line) winner = i;
      }
      setActive((old) => (old === winner ? old : winner));
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [signature]);
  return active;
}
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
          <div>
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
        <StrategyStory locale={locale} chapters={chapters} />
      </div>
    </section>
  );
}
export function ProductShowcase({ locale }: { locale: Locale }) {
  const desktop = useStoryLayout();
  const active = useActiveChapter(screens.map((s) => s.id));
  const [zoom, setZoom] = useState<string | null>(null);
  const [video, setVideo] = useState<VideoAsset | null>(null);
  const ar = locale === "ar";
  return (
    <section
      className={`section showcase ${desktop ? "enhanced-showcase" : "linear-showcase"}`}
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
        <div className="showcase-layout">
          {desktop && (
            <div className="showcase-sticky">
              <div className="screen-counter">
                <span dir="ltr">SCREEN</span>
                <strong dir="ltr">
                  0{active + 1}
                  <small>/07</small>
                </strong>
              </div>
              <div className="stage-swap" key={screens[active].id}>
                <ProofWindow id={screens[active].id} locale={locale} large />
              </div>
              <button
                className="text-link"
                onClick={() => setZoom(screens[active].id)}
              >
                {ar ? "كبّر الشاشة" : "Enlarge screenshot"}{" "}
                
              </button>
            </div>
          )}
          <div className="screen-index">
            {screens.map((s, i) => (
              <article
                className="screen-chapter"
                id={s.id}
                key={s.id}
                data-active={active === i}
              >
                <a
                  href={`#${s.id}`}
                  aria-current={active === i ? "step" : undefined}
                >
                  <span dir="ltr">0{i + 1}</span>
                  <h3>{pick(s.title, locale)}</h3>
                  
                </a>
                <h4>{pick(s.question, locale)}</h4>
                <p>{pick(s.body, locale)}</p>
                <VideoButton id={s.id} locale={locale} onPlay={setVideo} />
                {!desktop && (
                  <>
                    <div className="inline-proof">
                      <ProofWindow locale={locale} id={s.id} />
                    </div>
                    <button className="text-link" onClick={() => setZoom(s.id)}>
                      {ar ? "كبّر الشاشة" : "Enlarge screenshot"} 
                    </button>
                  </>
                )}
              </article>
            ))}
          </div>
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

