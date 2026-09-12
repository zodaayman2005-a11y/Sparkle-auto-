import type { ReactNode } from "react";
import { audience, setup, pick, type Locale, type Chapter } from "@/content/site";
import { StorySequence, type StorySlide } from "./StorySequence";

export function AudienceStory({ locale, children }: { locale: Locale; children: ReactNode }) {
  const slides: StorySlide[] = audience.map((item, index) => ({
    id: `fit-case-${index + 1}`, label: pick(item, locale),
    image: `/art/audience/${String(index + 1).padStart(2, "0")}.webp`, content: <p key={`fit-copy-${index}`}>{pick(item, locale)}</p>,
  }));
  slides.push({
    id: "fit-case-10",
    label: locale === "ar" ? "عندك سيستم لكن استخدامه معقد" : "Your current system is difficult to use",
    image: "/art/audience/10.webp",
    content: (
      <p key="fit-copy-10">
        {locale === "ar"
          ? "عندك سيستم بالفعل، لكن استخدامه صعب وتصميمه قديم؟ Sparkle Auto يديك تجربة أوضح وأسهل وأجمل، علشان أنت وفريقك تنجزوا شغلكم براحة ومن غير تعقيد."
          : "Already using a system that feels difficult and dated? Sparkle Auto gives you a clearer, easier and more polished experience, so you and your team can get work done without unnecessary complexity."}
      </p>
    ),
  });
  slides.push({ id: "fit-case-11", label: locale === "ar" ? "سهولة استخدام النظام" : "An approachable system", image: "/art/audience/11.webp", content: <div key="fit-copy-11">{children}</div> });
  return <StorySequence slides={slides} locale={locale} after="fit-after" dwell={86} label={locale === "ar" ? "حالات تشغيل المغسلة" : "Car-wash operating situations"} />;
}

export function SetupStory({ locale }: { locale: Locale }) {
  const slides = setup.map((item, index) => ({
    id: `setup-step-${index + 1}`, label: pick(item.title, locale), image: `/art/setup/${String(index + 1).padStart(2, "0")}.webp`,
    content: <><h3>{pick(item.title, locale)}</h3><p>{pick(item.body, locale)}</p></>,
  }));
  return <StorySequence slides={slides} locale={locale} after="setup-after" className="setup-story" label={locale === "ar" ? "خطوات التجهيز" : "Setup steps"} />;
}

export function StrategyStory({ locale, chapters }: { locale: Locale; chapters: Chapter[] }) {
  const slides = chapters.map((item, index) => ({
    id: item.id, label: pick(item.title, locale), image: `/art/strategies/${String(index + 1).padStart(2, "0")}.webp`,
    content: <><h3>{pick(item.title, locale)}</h3><p>{pick(item.body, locale)}</p><div className="strategy-art-proof"><span>{locale === "ar" ? "داخل Sparkle Auto" : "INSIDE SPARKLE AUTO"}</span><p>{pick(item.proof, locale)}</p></div></>,
  }));
  return <StorySequence slides={slides} locale={locale} after="showcase" className="strategy-art-story" dwell={112} label={locale === "ar" ? "استراتيجيات التشغيل" : "Operating strategies"} />;
}
