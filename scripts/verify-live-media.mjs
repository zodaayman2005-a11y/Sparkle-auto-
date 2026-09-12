import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";

// Read-only smoke test. Never submits a real lead or starts third-party media.
const base = process.argv[2];
if (!base) throw new Error("Pass the deployed origin to verify");
const browser = await chromium.launch();
const results = [];
try {
  for (const locale of ["ar", "en"]) {
    for (const width of [390, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: width === 390 ? 2 : 1 });
      const errors = [];
      const requests = [];
      page.on("pageerror", error => errors.push(error.message));
      page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
      page.on("request", request => requests.push(request.url()));
      const response = await page.goto(`${base}${locale === "ar" ? "/" : "/en"}`);
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      const hero = await page.locator(".hero-backdrop").evaluate(async image => { await image.decode(); return image.currentSrc; });
      assert.match(hero, /\/delivery\/hero\/.+\.webp$/);
      assert.equal(requests.some(url => url.includes("-original.png") || url.includes("drive.google.com")), false);
      const image = await page.request.get(hero);
      const bytes = (await image.body()).length;
      assert.equal(image.status(), 200);
      assert.ok(bytes < (width === 390 ? 100000 : 400000));
      const cache = image.headers()["cache-control"];
      assert.match(cache, /immutable/);
      const logo = await page.locator(".header .brand img").getAttribute("src");
      assert.equal(logo, "/delivery/brand/logo-144.webp");
      const brandResponse = await page.request.get(`${base}${logo}`);
      assert.equal(brandResponse.status(), 200);
      assert.equal((await brandResponse.body()).length, 12448);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
      await page.screenshot({ path: `artifacts/performance/live-${locale}-${width}.png` });
      if (width === 390) {
        const menu = page.getByRole("button", { name: locale === "ar" ? "افتح القائمة" : "Open menu", exact: true });
        await menu.click();
        await page.getByRole("dialog").waitFor();
        await page.screenshot({ path: `artifacts/performance/live-drawer-${locale}.png` });
        await page.keyboard.press("Escape");
        assert.ok(await menu.evaluate(button => button === document.activeElement));
      }
      assert.deepEqual(errors, []);
      results.push({ locale, width, hero, bytes, cache, logo, errors });
      await page.close();
    }
  }
  await fs.writeFile("artifacts/performance/live-verification.json", JSON.stringify({ base, checkedAt: new Date().toISOString(), results }, null, 2));
  console.log(JSON.stringify(results, null, 2));
} finally { await browser.close(); }
