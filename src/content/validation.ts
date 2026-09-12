export function normalizeDigits(value: string) {
  return value
    .replace(/[٠-٩]/g, (c) => String(c.charCodeAt(0) - 1632))
    .replace(/[۰-۹]/g, (c) => String(c.charCodeAt(0) - 1776));
}
export function validPhone(value: string) {
  const normalized = normalizeDigits(value);
  const digits = normalized.replace(/\D/g, "");
  return (
    /^\+?[\d\s()-]+$/.test(normalized) &&
    digits.length >= 8 &&
    digits.length <= 15
  );
}

export const reviewFieldNames = ["name", "phone", "business", "area", "branches", "cars", "role", "current", "time", "problem"] as const;
export type FieldError = "required" | "phone" | "integer" | "choice" | "length";

/** One set of rules for form feedback and the server boundary. */
export function reviewFieldError(name: string, value: string): FieldError | undefined {
  const text = normalizeDigits(value.trim());
  if (!text) return "required";
  if (text.length > 200) return "length";
  if (name === "phone" && !validPhone(text)) return "phone";
  if ((name === "branches" || name === "cars") && (!/^\d+$/.test(text) || Number(text) < (name === "branches" ? 1 : 0) || Number(text) > 100000)) return "integer";
  if (name === "problem" && !/^[0-7]$/.test(text)) return "choice";
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
