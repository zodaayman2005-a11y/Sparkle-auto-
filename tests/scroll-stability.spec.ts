import { expect, test } from "@playwright/test";

const storySelectors = [".fit .audience-story", ".strategy-art-story", ".system-proof-story", ".setup-story"];

for (const locale of ["ar", "en"]) {
  for (const width of [1440, 1366]) {
    test(`${locale} ${width}: stories survive fast forward and reverse without overlapping copy`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 1440 ? 900 : 768 });
      const errors: string[] = [];
      page.on("pageerror", error => errors.push(error.message));
      await page.goto(locale === "ar" ? "/" : "/en");
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator(".setup-intro")).toHaveCSS("position", "static");
      for (const selector of storySelectors) {
        const story = page.locator(selector);
        await expect(story).toHaveAttribute("data-pinned", "true");
        const count = await story.locator(".audience-scene").count();
        for (const index of [0, count - 1, 1, count - 2, 0]) {
          await story.evaluate((element, index) => {
            const track = element.querySelector<HTMLElement>(".audience-track")!;
            const stage = element.querySelector<HTMLElement>(".audience-stage")!;
            const count = element.querySelectorAll(".audience-scene").length;
            const top = parseFloat(getComputedStyle(stage).top);
            scrollTo({ top: scrollY + track.getBoundingClientRect().top - top + (index + .5) * (track.offsetHeight - stage.offsetHeight) / count, behavior: "instant" });
          }, index);
          await expect(story).toHaveAttribute("data-active", String(index + 1));
          const geometry = await story.evaluate(element => {
            const scenes = Array.from(element.querySelectorAll<HTMLElement>(".audience-scene"));
            const visible = scenes.filter(scene => getComputedStyle(scene).visibility === "visible");
            const current = visible[0];
            const copy = current?.querySelector(".audience-scene-copy")?.getBoundingClientRect();
            const area = element.querySelector(".audience-scenes")!.getBoundingClientRect();
            return { visible: visible.length, fits: !!copy && copy.top >= area.top - 1 && copy.bottom <= area.bottom + 1 };
          });
          expect(geometry).toEqual({ visible: 1, fits: true });
        }
        await story.locator(".audience-stage").screenshot({ path: `artifacts/scroll-stability/${locale}-${width}-${selector.includes("setup") ? "setup" : selector.includes("system") ? "proof" : selector.includes("strategy") ? "strategy" : "fit"}.png` });
      }
      expect(errors).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
  }

  for (const width of [320, 390, 768]) {
    test(`${locale} ${width}: flowing stories animate without hiding copy or creating dead space`, async ({ page }) => {
      await page.setViewportSize({ width, height: width === 768 ? 1024 : 844 });
      await page.goto(locale === "ar" ? "/" : "/en");
      await expect(page.locator('.audience-story[data-pinned="true"]')).toHaveCount(0);
      for (const selector of storySelectors) {
        const story = page.locator(selector);
        const scene = story.locator(".audience-scene").nth(1);
        await scene.scrollIntoViewIfNeeded();
        await expect(scene).toHaveAttribute("data-entered", "true");
        await expect(scene.locator(".audience-art")).toHaveCSS("animation-name", "story-art-enter");
        await expect(story.locator("[inert]")).toHaveCount(0);
        await expect(scene.locator(".audience-scene-copy")).toBeVisible();
        await page.waitForTimeout(550);
        await scene.screenshot({ path: `artifacts/scroll-stability/${locale}-${width}-${selector.includes("setup") ? "setup" : selector.includes("system") ? "proof" : selector.includes("strategy") ? "strategy" : "fit"}.png` });
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
  }
}

test("resize, reduced motion and no-script alternatives retain readable chapters", async ({ page, browser }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#setup-step-3");
  const story = page.locator(".setup-story");
  await expect(story).toHaveAttribute("data-active", "3");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(story).toHaveAttribute("data-pinned", "false");
  await expect(page.locator("#setup-step-3")).toBeInViewport();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator('.audience-story[data-enhanced="true"]')).toHaveCount(0);
  await expect(page.locator("#setup-step-3 .audience-art")).toHaveCSS("animation-name", "none");
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('.audience-story[data-pinned="true"]')).toHaveCount(0);
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("/");
  await expect(staticPage.locator(".audience-scene[inert]")).toHaveCount(0);
  await expect(staticPage.locator(".setup-story .audience-scene")).toHaveCount(5);
  await context.close();
});

test("resizing mid-story without a hash preserves the current reading position", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const story = page.locator(".setup-story");
  await expect(story).toHaveAttribute("data-pinned", "true");
  await story.evaluate(element => {
    const track = element.querySelector<HTMLElement>(".audience-track")!;
    const stage = element.querySelector<HTMLElement>(".audience-stage")!;
    scrollTo(0, scrollY + track.getBoundingClientRect().top - parseFloat(getComputedStyle(stage).top) + .5 * (track.offsetHeight - stage.offsetHeight));
  });
  await expect(story).toHaveAttribute("data-active", "3");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(story).toHaveAttribute("data-pinned", "false");
  await expect.poll(() => page.locator("#setup-step-3 .audience-scene-copy").evaluate(element => element.getBoundingClientRect().top)).toBeGreaterThan(80);
  await expect(page.locator("#setup-step-3 .audience-scene-copy")).toBeInViewport();
});
