"use client";
import { useState } from "react";
import { SectionLabel } from "./Primitives";
import { faq, pick, type Locale } from "@/content/site";
export function FAQ({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [opened, setOpened] = useState<number | null>(0);
  return (
      <section className="section faq-section" id="faq">
        <div className="shell faq-layout">
          <div>
            <SectionLabel number="10">
              {ar ? "قبل ما تقرر" : "BEFORE YOU DECIDE"}
            </SectionLabel>
            <h2>
              {ar ? (
                <>
                  سؤال في بالك؟
                  <br />
                  خلّينا نوضّحه.
                </>
              ) : (
                <>
                  Questions?
                  <br />
                  Let’s clear them up.
                </>
              )}
            </h2>
            <p>
              {ar
                ? "إجابات مباشرة على الأسئلة اللي بتفرق في قرارك."
                : "Straight answers to the questions that matter to your decision."}
            </p>
          </div>
          <div className="faq-list">
            {faq.map(([q, a], i) => (
              <div className="faq-item" key={i}>
                <h3>
                  <button
                    aria-expanded={opened === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpened(opened === i ? null : i)}
                  >
                    <span className="faq-number" dir="ltr">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{pick(q, locale)}</span>
                    <span className="faq-symbol" aria-hidden="true">
                      {opened === i ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div id={`faq-answer-${i}`} hidden={opened !== i}>
                  <p>{pick(a, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
}
