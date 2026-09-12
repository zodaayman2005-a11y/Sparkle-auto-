import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { screens } from "../src/content/site";
import { reviewFieldError } from "../src/content/validation";

test("frozen marketing copy and untouched supplied product captures", () => {
  expect(readFileSync("src/content/site.ts", "utf8")).toBe(readFileSync("artifacts/release-hardening/baseline/site.ts", "utf8"));
  const manifest: { id: string; sha256: string }[] = JSON.parse(readFileSync("artifacts/product-screens/ASSET-MANIFEST.json", "utf8"));
  for (const screen of screens) {
    const file = `public/product/${screen.id.replace("screen-", "")}.jpg`;
    expect(existsSync(file)).toBe(true);
    expect(createHash("sha256").update(readFileSync(file)).digest("hex")).toBe(manifest.find(asset => asset.id === screen.id)?.sha256);
  }
});

test("Arabic, Persian and Latin number validation share the server rules", () => {
  for (const digits of ["٢", "۲", "2"]) expect(reviewFieldError("branches", digits)).toBeUndefined();
  expect(reviewFieldError("phone", "٠١٠١٢٣٤٥٦٧٨")).toBeUndefined();
  for (const value of ["-1", "2.5", "1e2", "100001"]) expect(reviewFieldError("cars", value)).toBe("integer");
  expect(reviewFieldError("branches", "0")).toBe("integer");
  expect(reviewFieldError("problem", "8")).toBe("choice");
});

for (const locale of ["ar", "en"] as const) {
  test(`${locale}: genuine proof, section contrast and safe preview metadata`, async ({ page }) => {
    await page.goto(locale === "ar" ? "/" : "/en");
    await expect(page.locator('[data-proof-status="missing"]')).toHaveCount(0);
    await expect(page.locator(".proof-placeholder,.comparison")).toHaveCount(0);
    await expect(page.locator(".showcase")).toHaveCSS("background-color", "rgb(3, 19, 46)");
    await expect(page.locator(".strategies")).toHaveCSS("background-color", "rgb(242, 250, 255)");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
    expect(await page.locator(".preview-bar").innerText()).not.toMatch(/PLACEHOLDERS|صور مؤقتة/);
    expect(await page.locator(".site").innerText()).not.toMatch(/[↗↖↘↙]/);
    const links = await page.locator('a[href^="#"]').evaluateAll(elements => elements.map(el => el.getAttribute("href")!.slice(1)));
    for (const id of new Set(links)) await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
  });

  test(`${locale}: narrow full-image inspection and focus restoration`, async ({ page }) => {
    await page.setViewportSize({width:360,height:800});
    await page.goto(locale === "ar" ? "/" : "/en");
    const trigger = page.locator(".screen-chapter .text-link").first();
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    const toggle = dialog.getByRole("button", {name:locale === "ar" ? "الحجم الأصلي" : "Original size"});
    await toggle.click();
    await expect(dialog.locator(".screenshot-pan")).toHaveAttribute("data-full-size", "true");
    await dialog.locator(".screenshot-pan").focus();
    await page.keyboard.press("ArrowRight");
    await expect.poll(() => dialog.locator(".screenshot-pan").evaluate(el=>el.scrollLeft)).toBeGreaterThan(0);
    const results = await new AxeBuilder({page}).include("dialog").withTags(["wcag2a","wcag2aa","wcag21aa"]).analyze();
    expect(results.violations.map(v=>v.id)).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
    expect(await page.evaluate(()=>document.body.style.overflow)).not.toBe("hidden");
  });
}

test("200 percent desktop reflow equivalent, keyboard and short-height static content", async ({page}) => {
  await page.setViewportSize({width:720,height:500});
  for (const route of ["/","/en"]) {
    await page.goto(route);
    await expect(page.locator('.audience-story[data-pinned="true"]')).toHaveCount(0);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
    await page.keyboard.press("Tab");
    await expect(page.locator(".skip-link")).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main")).toBeInViewport();
  }
});

test("oversized bodies, unsupported media and invalid choices cannot reach a receiver", async ({request}) => {
  expect((await request.post("/api/operations-review",{data:"x".repeat(10001),headers:{"Content-Type":"application/json"}})).status()).toBe(413);
  expect((await request.post("/api/operations-review",{data:"name=test",headers:{"Content-Type":"text/plain"}})).status()).toBe(415);
});

test("supplied video uses native external navigation without an embedded focus trap", async ({page}) => {
  for (const route of ["/", "/en"]) {
    await page.goto(route);
    const trigger = page.locator(".strategy-video-cover");
    await expect(trigger).toHaveAttribute("href", "https://drive.google.com/file/d/1fMEnIthjp5DJ_iot-cUua40-U6_ac1jR/view");
    await expect(trigger).toHaveAttribute("target", "_blank");
    await expect(trigger).toHaveAttribute("rel", "noopener noreferrer");
    await expect(trigger).toHaveAccessibleName(/Google Drive/);
    await expect(page.locator("iframe")).toHaveCount(0);
  }
});
