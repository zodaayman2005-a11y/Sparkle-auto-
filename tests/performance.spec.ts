import { test, expect } from "@playwright/test";

for (const locale of ["ar", "en"]) {
  test(`${locale}: responsive hero, no original download and stable mobile separation`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    const urls: string[] = [];
    page.on("request", request => urls.push(request.url()));
    await page.goto(locale === "ar" ? "/" : "/en");
    await page.locator(".hero-backdrop").evaluate((image: HTMLImageElement) => image.decode());
    const src = await page.locator(".hero-backdrop").evaluate((image: HTMLImageElement) => image.currentSrc);
    expect(src).toMatch(/\/delivery\/hero\/.+-960\.webp$/);
    expect(urls.filter(url => /\/hero\/.+-original\.png/.test(url))).toEqual([]);
    expect(urls.filter(url => url.includes("drive.google.com"))).toEqual([]);
    const response = await page.request.get(src);
    expect((await response.body()).byteLength).toBeLessThan(100000);
    expect(response.headers()["cache-control"]).toContain("immutable");
    const clear = await page.evaluate(() => {
      const copy = document.querySelector(".hero-copy")!.getBoundingClientRect();
      const art = document.querySelector(".hero-art-layer")!.getBoundingClientRect();
      return art.top >= copy.bottom + 19 && document.documentElement.scrollWidth <= innerWidth;
    });
    expect(clear).toBe(true);
    await context.close();
  });
}

for (const locale of ["ar", "en"]) {
  test(`${locale}: tablet artwork stays below copy without vertical cropping`, async ({ page }) => {
    for (const width of [768, 1024]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(locale === "ar" ? "/" : "/en");
      await page.evaluate(() => document.fonts.ready);
      const layout = await page.evaluate(() => {
        const copy = document.querySelector(".hero-copy")!.getBoundingClientRect();
        const art = document.querySelector(".hero-art-layer")!.getBoundingClientRect();
        return { clear: art.top > copy.bottom, ratio: art.width / art.height };
      });
      expect(layout.clear).toBe(true);
      expect(layout.ratio).toBeCloseTo(16 / 9, 2);
    }
  });
}

test("FAQ search and filtering recover without losing keyboard access", async ({ page }) => {
  await page.goto("/en");
  const search = page.getByLabel("Search the FAQs");
  await search.fill("Excel");
  await expect(page.locator(".faq-item")).toHaveCount(2);
  await search.fill("a question that does not exist 123456789");
  await expect(page.locator(".faq-empty")).toBeVisible();
  await page.getByRole("button", { name: "Show all questions", exact: true }).click();
  await expect(page.locator(".faq-item")).toHaveCount(30);
  const question = page.locator(".faq-item h3 button").nth(4);
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Space");
  await expect(question).toHaveAttribute("aria-expanded", "false");
});
