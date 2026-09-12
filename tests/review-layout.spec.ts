import { test, expect } from "@playwright/test";

for (const locale of ["ar", "en"]) {
  for (const width of [320, 390, 768, 1440]) {
    test(`${locale} ${width}: blue review replaces the closing telephone section`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(locale === "ar" ? "/" : "/en");
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator(".final-section,.final-telephone")).toHaveCount(0);
      await expect(page.locator("#review")).toHaveCSS("background-color", "rgb(1, 162, 255)");
      await expect(page.locator(".review-card-heading h3")).toBeVisible();
      await expect(page.locator("main + footer")).toHaveCount(1);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.locator("#review").screenshot({ path: `artifacts/review-redesign/${locale}-${width}.png`, style: ".header-wrap { visibility: hidden !important; }" });
    });
  }
}
