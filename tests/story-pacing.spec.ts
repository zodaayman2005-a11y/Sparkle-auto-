import { expect, test } from '@playwright/test';

const stories = [
  { selector: '.fit .audience-story', dwell: 86, duration: 620 },
  { selector: '.strategy-art-story', dwell: 112, duration: 620 },
  { selector: '.system-proof-story', dwell: 125, duration: 520 },
  { selector: '.setup-story', dwell: 100, duration: 620 },
];

for (const locale of ['ar', 'en']) {
  test(`${locale}: slower chapter pacing and interruptible image entrance`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(locale === 'ar' ? '/' : '/en');
    await page.evaluate(() => document.fonts.ready);
    for (const { selector, dwell, duration } of stories) {
      const story = page.locator(selector);
      await expect(story).toHaveAttribute('data-pinned', 'true');
      const measured = await story.evaluate((element) => {
        const track = element.querySelector<HTMLElement>('.audience-track')!;
        const stage = element.querySelector<HTMLElement>('.audience-stage')!;
        const step = (track.offsetHeight - stage.offsetHeight) / element.querySelectorAll('.audience-scene').length;
        const start = scrollY + track.getBoundingClientRect().top - parseFloat(getComputedStyle(stage).top);
        scrollTo({ top: start + step * .1, behavior: 'instant' });
        return { step, start };
      });
      expect(measured.step).toBeGreaterThanOrEqual(900 * dwell / 100 * 1.39);
      await expect(story).toHaveAttribute('data-active', '1');
      // A modest wheel-sized move must not flip an entire chapter.
      await page.evaluate(() => scrollBy({ top: 400, behavior: 'instant' }));
      await page.waitForTimeout(100);
      await expect(story).toHaveAttribute('data-active', '1');
      await story.locator('.audience-nav a').nth(1).click();
      await expect(story).toHaveAttribute('data-active', '2');
      const art = story.locator('.audience-scene[data-current="true"] .audience-art');
      const middle = await art.evaluate(element => {
        const animation = element.getAnimations()[0];
        animation.pause();
        animation.currentTime = 100;
        return { duration: animation.effect!.getTiming().duration, opacity: Number(getComputedStyle(element).opacity) };
      });
      expect(middle.duration).toBe(duration);
      expect(middle.opacity).toBeGreaterThan(0);
      expect(middle.opacity).toBeLessThan(1);
      await expect(story.locator('.audience-scene[data-current="true"] .audience-scene-copy')).toHaveCSS('animation-name', 'none');
      // Reverse while the entrance is unfinished: only the requested image remains.
      await story.locator('.audience-nav a').first().click();
      await expect(story).toHaveAttribute('data-active', '1');
      await page.waitForTimeout(700);
      await expect(story.locator('.audience-scene[data-current="true"] .audience-art')).toHaveCSS('opacity', '1');
      expect(await story.locator('.audience-scene').evaluateAll(scenes => scenes.filter(scene => getComputedStyle(scene).visibility === 'visible').length)).toBe(1);
    }
  });
}
