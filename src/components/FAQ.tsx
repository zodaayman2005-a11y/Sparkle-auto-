"use client";

import { useMemo, useState } from "react";
import { faq, faqCategories, type FaqCategory } from "@/content/faq";
import { pick, type Locale } from "@/content/site";
import { SectionLabel } from "./Primitives";

type ActiveCategory = "all" | FaqCategory;

export function FAQ({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [opened, setOpened] = useState<number | null>(1);
  const [category, setCategory] = useState<ActiveCategory>("all");
  const [query, setQuery] = useState("");

  const filteredFaq = useMemo(() => {
    const term = query.trim().toLocaleLowerCase(locale);
    return faq.filter((entry) => {
      const inCategory = category === "all" || entry.category === category;
      const searchable = `${pick(entry.question, locale)} ${pick(entry.answer, locale)}`.toLocaleLowerCase(locale);
      return inCategory && (!term || searchable.includes(term));
    });
  }, [category, locale, query]);

  const chooseCategory = (next: ActiveCategory) => {
    setCategory(next);
    setOpened(null);
  };

  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-layout">
        <div className="faq-intro">
          <SectionLabel number="10">
            {ar ? "كل اللي محتاج تعرفه" : "EVERYTHING YOU NEED TO KNOW"}
          </SectionLabel>
          <h2>{ar ? "اسأل براحتك. الإجابة هنا." : "Good questions. Clear answers."}</h2>
          <p>
            {ar
              ? "اختار الموضوع اللي يهمك أو ابحث بكلمة، وهتلاقي إجابة مباشرة من غير ما تلف في الصفحة."
              : "Choose a topic or search for a phrase to find a direct answer without scanning the whole page."}
          </p>

          <div className="faq-search">
            <label htmlFor="faq-search-input">{ar ? "ابحث في الأسئلة" : "Search the FAQs"}</label>
            <div className="faq-search-field">
              <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
                <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="m16 16 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <input
                id="faq-search-input"
                type="search"
                value={query}
                onChange={(event) => { setQuery(event.target.value); setOpened(null); }}
                placeholder={ar ? "مثلاً: الحجوزات أو الفروع" : "Try: bookings or branches"}
              />
            </div>
          </div>

          <div className="faq-categories" aria-label={ar ? "تصفية الأسئلة حسب الموضوع" : "Filter questions by topic"}>
            {faqCategories.map((item) => (
              <button
                type="button"
                key={item.id}
                aria-pressed={category === item.id}
                onClick={() => chooseCategory(item.id)}
              >
                {pick(item.label, locale)}
              </button>
            ))}
          </div>
        </div>

        <div className="faq-results">
          <p className="faq-results-count" aria-live="polite">
            {ar ? `${filteredFaq.length} سؤال متاح` : `${filteredFaq.length} ${filteredFaq.length === 1 ? "answer" : "answers"}`}
          </p>
          <div className="faq-list">
            {filteredFaq.map((entry) => {
              const isOpen = opened === entry.id;
              const answerId = `faq-answer-${entry.id}`;
              return (
                <article className="faq-item" key={entry.id}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpened(isOpen ? null : entry.id)}
                    >
                      <span className="faq-number" dir="ltr">{String(entry.id).padStart(2, "0")}</span>
                      <span>{pick(entry.question, locale)}</span>
                      <span className="faq-symbol" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                  </h3>
                  <div className="faq-answer" id={answerId} hidden={!isOpen}>
                    {pick(entry.answer, locale).split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              );
            })}
          </div>
          {filteredFaq.length === 0 && (
            <div className="faq-empty" role="status">
              <strong>{ar ? "ملقيناش السؤال ده." : "We couldn’t find that question."}</strong>
              <p>{ar ? "جرّب كلمة تانية أو اعرض كل الأسئلة." : "Try another phrase or return to all questions."}</p>
              <button type="button" className="button secondary" onClick={() => { setQuery(""); chooseCategory("all"); }}>
                {ar ? "اعرض كل الأسئلة" : "Show all questions"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
