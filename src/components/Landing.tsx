import { Hero } from "./Hero";
import { Header } from "./Header";
import { OpeningNarrative, JourneyAndSetup, FinalSection } from "./Narrative";
import { ScrollStory, ProductShowcase } from "./Stories";
import { FAQ } from "./FAQ";
import { Commercial } from "./Commercial";
import { ReviewForm } from "./ReviewForm";
import type { Locale } from "@/content/site";
export function Landing({ locale }: { locale: Locale }) {
  return (
    <div className="site" dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <Header locale={locale} />
      <main id="main">
        <Hero locale={locale} />
        <OpeningNarrative locale={locale} />
        <ScrollStory locale={locale} />
        <ProductShowcase locale={locale} />
        <JourneyAndSetup locale={locale} />
        <Commercial locale={locale} />
        <FAQ locale={locale} />
        <ReviewForm locale={locale} deliveryAvailable={Boolean(process.env.OPERATIONS_REVIEW_WEBHOOK_URL)} />
        <FinalSection locale={locale} />
      </main>
    </div>
  );
}

