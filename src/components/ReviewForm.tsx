"use client";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { SectionLabel } from "./Primitives";
import { reviewFieldError, normalizeDigits } from "@/content/validation";
import { formFields, problems } from "@/content/commercial";
import { pick, cta, type Locale } from "@/content/site";
export function ReviewForm({ locale, deliveryAvailable = false }: { locale: Locale; deliveryAvailable?: boolean }) {
  const ar = locale === "ar";
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "unconfigured"
  >("idle");
  const lock = useRef(false);
  const form = useRef<HTMLFormElement>(null);
  const receipt = useRef<HTMLDivElement>(null);
  useEffect(() => { if (status === "success") receipt.current?.focus(); }, [status]);
  const fields = step === 0 ? formFields.slice(0, 4) : formFields.slice(4);
  function validate(names: string[]) {
    const e: Record<string, string> = {};
    for (const name of names) {
      const issue = reviewFieldError(name, values[name] || "");
      if (issue === "required")
        e[name] = ar ? "من فضلك كمّل الحقل ده." : "Please complete this field.";
      else if (issue === "phone")
        e[name] = ar
          ? "راجع رقم الموبايل، وكود البلد عند الحاجة."
          : "Check your phone number, including the country code where needed.";
      else if (issue === "integer")
        e[name] = ar
          ? "اكتب رقم صحيح في النطاق المناسب."
          : "Enter a valid whole number.";
      else if (issue) e[name] = ar ? "راجع قيمة الحقل، بحد أقصى 200 حرف." : "Check this field; use no more than 200 characters.";
    }
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() =>
        form.current
          ?.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`)
          ?.focus(),
      );
      return false;
    }
    return true;
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    if (lock.current) return;
    const names = fields.map((f) => f.name);
    if (step === 1) names.push("problem");
    if (!validate(names)) return;
    if (step === 0) {
      setStep(1);
      requestAnimationFrame(() =>
        form.current?.querySelector<HTMLInputElement>("input")?.focus(),
      );
      return;
    }
    lock.current = true;
    setStatus("sending");
    try {
      const r = await fetch("/api/operations-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
        signal: AbortSignal.timeout(15000),
      });
      const data = await r.json();
      if (r.ok && data.received === true) setStatus("success");
      else setStatus(data.code === "not_configured" ? "unconfigured" : "error");
    } catch {
      setStatus("error");
    } finally {
      lock.current = false;
    }
  }
  return (
    <section className="section review-section" id="review">
      <div className="shell review-layout">
        <div className="review-intro">
          <SectionLabel number="11">
            {ar ? "نبدأ من تشغيلك" : "LET’S START WITH YOUR OPERATION"}
          </SectionLabel>
          <h2>
            {ar ? (
              <>
                قولنا مغسلتك
                <br />
                ماشية إزاي
                <br />
                <span className="blue-slab">دلوقتي.</span>
              </>
            ) : (
              <>
                Tell us how your car wash runs{" "}
                <span className="blue-slab">today.</span>
              </>
            )}
          </h2>
          <p>
            {ar
              ? "مش هنبدأ بشرح طويل ومميزات ملهاش علاقة بيك. جاوبنا على كام سؤال، وهنركز المراجعة على المشكلة اللي فعلًا بتعطلك."
              : "We will not start with a long presentation of features unrelated to your needs. Answer a few questions so the review can focus on the problem that is actually getting in your way."}
          </p>
          <div className="review-path">
            <div>
              <span>01</span>
              {ar ? "نفهم شغلك" : "Understand your operation"}
            </div>
            <div>
              <span>02</span>
              {ar ? "نراجع احتياجك" : "Review your needs"}
            </div>
            <div>
              <span>03</span>
              {ar ? "نحدد الخطوة الجاية" : "Define the next step"}
            </div>
          </div>
        </div>
        <div className="form-panel">
          {status === "success" ? (
            <div className="success-state" role="status" tabIndex={-1} ref={receipt}>
              <span aria-hidden="true">✓</span>
              <h3>
                {ar ? "تمام، استلمنا طلبك." : "We’ve received your request."}
              </h3>
              <p>
                {ar
                  ? "هنراجع المعلومات اللي بعتها ونتواصل معاك عشان نحدد مراجعة تشغيل مناسبة لمغسلتك."
                  : "We will review the information you sent and contact you to arrange an operations review that fits your car wash."}
              </p>
            </div>
          ) : (
            <form ref={form} onSubmit={submit} noValidate aria-busy={status === "sending"}>
              {!deliveryAvailable && <p className="form-availability" role="note">{ar ? "استقبال الطلبات غير مفعّل في هذه المعاينة. تقدر تراجع النموذج، لكن بياناتك لن تصل لفريق Sparkle Auto." : "Live requests are not connected in this preview. You can review the form, but your details will not reach the Sparkle Auto team."}</p>}
              <div className="form-progress">
                <strong>
                  {ar
                    ? step === 0
                      ? "نتعرف عليك"
                      : "نفهم التشغيل"
                    : step === 0
                      ? "A little about you"
                      : "How you operate"}
                </strong>
                <span>{step + 1} / 2</span>
              </div>
              <div className="form-progress-line">
                <span style={{ width: step === 0 ? "50%" : "100%" }} />
              </div>
              <div className="form-fields">
                {fields.map((f) => (
                  <div className="field" key={f.name}>
                    <label htmlFor={`field-${f.name}`}>
                      {pick(f.label, locale)} <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id={`field-${f.name}`}
                      name={f.name}
                      type={f.type === "number" ? "text" : f.type}
                      autoComplete={f.auto}
                      inputMode={
                        f.type === "number"
                          ? "numeric"
                          : f.type === "tel"
                            ? "tel"
                            : undefined
                      }
                      dir={f.type === "tel" || f.type === "number" ? "ltr" : undefined}
                      min={f.name === "branches" ? 1 : 0}
                      max={100000}
                      maxLength={200}
                      required
                      value={values[f.name] || ""}
                      onChange={(e) =>
                        setValues({
                          ...values,
                          [f.name]:
                            f.type === "tel" || f.type === "number"
                              ? normalizeDigits(e.target.value)
                              : e.target.value,
                        })
                      }
                      aria-invalid={!!errors[f.name]}
                      aria-describedby={
                        errors[f.name] ? `error-${f.name}` : undefined
                      }
                    />
                    {errors[f.name] && (
                      <p className="field-error" id={`error-${f.name}`}>
                        {errors[f.name]}
                      </p>
                    )}
                  </div>
                ))}
                {step === 1 && (
                  <div className="field field-wide">
                    <label htmlFor="field-problem">
                      {ar ? "أكتر مشكلة محتاج تحلها" : "Main problem to solve"}{" "}
                      *
                    </label>
                    <select
                      id="field-problem"
                      name="problem"
                      value={values.problem || ""}
                      onChange={(e) =>
                        setValues({ ...values, problem: e.target.value })
                      }
                      required
                      aria-invalid={!!errors.problem}
                      aria-describedby={
                        errors.problem ? "error-problem" : undefined
                      }
                    >
                      <option value="">
                        {ar
                          ? "اختار المشكلة الأقرب"
                          : "Choose the closest match"}
                      </option>
                      {problems.map((p, i) => (
                        <option value={String(i)} key={i}>
                          {pick(p, locale)}
                        </option>
                      ))}
                    </select>
                    {errors.problem && (
                      <p className="field-error" id="error-problem">
                        {errors.problem}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="honeypot" aria-hidden="true">
                <label>
                  Website
                  <input
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={values.website || ""}
                    onChange={(e) =>
                      setValues({ ...values, website: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="form-actions">
                {step === 1 && (
                  <button
                    type="button"
                    className="button secondary"
                    onClick={() => {
                      setStep(0);
                      setErrors({});
                      requestAnimationFrame(() => form.current?.querySelector<HTMLInputElement>("input")?.focus());
                    }}
                    disabled={status === "sending"}
                  >
                    {ar ? "رجوع" : "Back"}
                  </button>
                )}
                <button
                  className="button primary"
                  disabled={status === "sending"}
                  type="submit"
                >
                  {status === "sending"
                    ? ar
                      ? "جاري إرسال الطلب…"
                      : "Sending your request…"
                    : step === 0
                      ? ar
                        ? "نكمل عن التشغيل"
                        : "Continue"
                      : pick(cta, locale)}
                  
                </button>
              </div>
              {(status === "error" || status === "unconfigured") && (
                <p className="form-error" role="alert">
                  {status === "unconfigured"
                    ? ar
                      ? "إرسال الطلبات لسه مش متاح في المعاينة. لم يتم إرسال بياناتك؛ المدخلات محفوظة هنا."
                      : "Submission is not connected in this preview. Your details have not been sent and remain here."
                    : ar
                      ? "لم نقدر نؤكد استلام الطلب. بياناتك لسه موجودة هنا؛ تقدر تحاول تاني."
                      : "We could not confirm receipt. Your details are still here; you can try again."}
                </p>
              )}
              <p className="form-privacy">
                {ar
                  ? "الهدف من البيانات هو فهم احتياج مغسلتك والتواصل بخصوص المراجعة فقط. المدخلات تبقى في هذه الصفحة حتى الإرسال، ولا تُحفظ على جهازك بعد إغلاقها."
                  : "These details are intended for understanding your needs and contacting you about the review. Entries stay in this page until submission and are not saved on your device after it closes."}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

