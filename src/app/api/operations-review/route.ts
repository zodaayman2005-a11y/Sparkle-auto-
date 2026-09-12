import { isRecord, reviewFieldError, reviewFieldNames, normalizeDigits } from "@/content/validation";
import { NextRequest, NextResponse } from "next/server";

const MAX_BYTES = 10_000;
const fail = (code: string, status: number) => NextResponse.json({ code }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.get("host")) return fail("origin_rejected", 403);
    } catch { return fail("origin_rejected", 403); }
  }
  if (!request.headers.get("content-type")?.includes("application/json")) return fail("invalid_request", 415);
  if (Number(request.headers.get("content-length")) > MAX_BYTES) return fail("too_large", 413);
  let data: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return fail("invalid_request", 400);
    const decoder = new TextDecoder();
    let raw = "";
    let bytes = 0;
    try {
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > MAX_BYTES) { await reader.cancel(); return fail("too_large", 413); }
        raw += decoder.decode(value, { stream: true });
      }
      raw += decoder.decode();
    } finally { reader.releaseLock(); }
    data = JSON.parse(raw);
  } catch { return fail("invalid_request", 400); }
  if (!isRecord(data) || data.website) return fail("invalid_request", 400);
  const payload: Record<string, string> = {};
  for (const field of reviewFieldNames) {
    const value = data[field];
    if (typeof value !== "string" || reviewFieldError(field, value)) return fail("invalid_fields", 400);
    payload[field] = ["phone", "branches", "cars"].includes(field) ? normalizeDigits(value.trim()) : value.trim();
  }
  const destination = process.env.OPERATIONS_REVIEW_WEBHOOK_URL;
  if (!destination) return fail("not_configured", 503);
  try {
    const url = new URL(destination);
    if (url.protocol !== "https:") return fail("not_configured", 503);
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, locale: data.locale === "en" ? "en" : "ar" }),
      signal: AbortSignal.timeout(10_000),
      redirect: "error",
    });
    if (!response.ok) return fail("delivery_failed", 502);
    return NextResponse.json({ received: true }, { headers: { "Cache-Control": "no-store" } });
  } catch { return fail("delivery_failed", 502); }
}
