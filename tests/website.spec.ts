import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { pageUrl, websitePages } from "../src/content/website";
import { reviewFieldError, normalizeDigits } from "../src/content/validation";

for (const locale of ["ar", "en"] as const) {
  for (const width of [320, 360, 390, 768, 1024, 1440]) {
    test(`${locale} ${width}: six separate pages, locale, reflow and real assets`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const item of websitePages) {
        await page.goto(pageUrl(item.id, locale));
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator("html")).toHaveAttribute("dir", locale === "ar" ? "rtl" : "ltr");
        await expect(page.locator("h1")).toHaveCount(1);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        await expect(page.locator(".mp-locale")).toHaveAttribute("href", pageUrl(item.id, locale === "ar" ? "en" : "ar"));
        await expect(page.locator(".price-card,.audience-story,.hero-scroll")).toHaveCount(0);
        for (const image of await page.locator("img").all()) {
          await image.scrollIntoViewIfNeeded();
          await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
        }
      }
    });
  }
  test(`${locale}: accessible page structures`, async ({ page }) => {
    for (const item of websitePages) {
      await page.goto(pageUrl(item.id, locale));
      // Supplied film has no reviewed timed captions yet; evaluate page structure.
      const result = await new AxeBuilder({ page }).exclude("video").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      expect(result.violations.map(item => item.id)).toEqual([]);
    }
  });
}

test("mobile menu, Escape and focus restoration", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en/platform");
  const trigger = page.getByRole("button", { name: "Open menu", exact: true });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByRole("dialog").getByRole("link", { name: /Why Sparkle\?/ }).click();
  await expect(page).toHaveURL(/\/en\/film$/);
  await expect(page.getByRole("dialog")).toHaveCount(0);
});

test("film is opt-in and cold chapter seeking plays the supplied video", async ({ page }) => {
  await page.goto("/film");
  const video = page.locator("video");
  await expect(video).toHaveAttribute("preload", "none");
  await expect(video).not.toHaveAttribute("autoplay", "");
  expect(await video.evaluate((element: HTMLVideoElement) => element.readyState)).toBe(0);
  await page.getByRole("button", { name: /03:40/ }).click();
  await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime)).toBeGreaterThanOrEqual(220);
  expect(await video.evaluate((element: HTMLVideoElement) => element.duration)).toBeCloseTo(592, 0);
});

test("contact validation and back navigation retain entered data", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "نكمل عن التشغيل" }).click();
  await expect(page.locator("#field-name")).toHaveAttribute("aria-invalid", "true");
  await page.getByLabel("الاسم", { exact: true }).fill("Local QA");
  await page.getByLabel("رقم الموبايل أو WhatsApp", { exact: true }).fill("٠١٠١٢٣٤٥٦٧٨");
  await page.getByLabel("اسم المغسلة", { exact: true }).fill("LOCAL QA ONLY");
  await page.getByLabel("المحافظة أو المنطقة", { exact: true }).fill("Cairo");
  await page.getByRole("button", { name: "نكمل عن التشغيل" }).click();
  await expect(page.locator("#field-branches")).toBeVisible();
  await page.getByRole("button", { name: "رجوع", exact: true }).click();
  await expect(page.locator("#field-name")).toHaveValue("Local QA");
  await expect(page.locator('[name="phone"]')).toHaveValue("01012345678");
});

test("normalization and invalid API bodies retain server protections", async ({ request }) => {
  expect(normalizeDigits("٢۳4")).toBe("234");
  expect(reviewFieldError("branches", "0")).toBe("integer");
  expect(reviewFieldError("phone", "٠١٠١٢٣٤٥٦٧٨")).toBeUndefined();
  expect((await request.post("/api/operations-review", { data: {}, headers: { "Content-Type": "application/json" } })).status()).toBe(400);
  expect((await request.post("/api/operations-review", { data: "x".repeat(10001), headers: { "Content-Type": "application/json" } })).status()).toBe(413);
});
