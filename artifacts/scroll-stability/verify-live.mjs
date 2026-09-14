import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'https://sparkle-auto-landing.vercel.app';
const browser = await chromium.launch();
const results = [];
for (const locale of ['ar', 'en']) {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: width === 1440 ? 900 : 844 } });
    const errors = [];
    const mediaRequests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('request', request => { if (request.url().includes('/media/')) mediaRequests.push(request.url()); });
    await page.goto(`${baseURL}${locale === 'en' ? '/en' : '/'}`);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => document.querySelector('.audience-story')?.dataset.enhanced === 'true');
    assert.equal(mediaRequests.length, 0);
    assert.equal(await page.locator('.setup-intro').evaluate(element => getComputedStyle(element).position), 'static');
    for (const selector of ['.fit .audience-story', '.strategy-art-story', '.system-proof-story', '.setup-story']) {
      const story = page.locator(selector);
      assert.equal(await story.getAttribute('data-pinned'), String(width === 1440));
      const scenes = story.locator('.audience-scene');
      const count = await scenes.count();
      if (width === 1440) {
        for (const index of [count - 1, 0]) {
          await story.locator('.audience-nav a').nth(index).click();
          await page.waitForFunction(({ selector, index }) => document.querySelector(selector)?.dataset.active === String(index + 1), { selector, index });
          assert.equal(await story.locator('.audience-scene:visible').count(), 1);
        }
      } else {
        await scenes.nth(1).scrollIntoViewIfNeeded();
        await page.waitForFunction(selector => document.querySelector(selector)?.querySelectorAll('.audience-scene')[1]?.dataset.entered === 'true', selector);
        assert.equal(await story.locator('[inert]').count(), 0);
      }
      const visibleScene = width === 1440 ? scenes.first() : scenes.nth(1);
      await visibleScene.locator('img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
    }
    await page.waitForTimeout(550);
    await page.screenshot({ path: `artifacts/scroll-stability/live-${locale}-${width}-setup.png` });
    if (width === 390) {
      for (const selector of ['.strategy-video-cover', '.system-video-trigger']) {
        const trigger = page.locator(selector);
        await trigger.scrollIntoViewIfNeeded();
        const before = await page.evaluate(() => scrollY);
        await trigger.click();
        await page.waitForFunction(() => document.querySelector('dialog video')?.currentTime > .1, null, { timeout: 45000 });
        await page.locator('dialog video').evaluate(video => { video.currentTime = video.duration * .75; });
        await page.waitForFunction(() => { const video = document.querySelector('dialog video'); return video && !video.seeking && video.currentTime > video.duration * .7; }, null, { timeout: 45000 });
        await page.keyboard.press('Escape');
        assert.equal(await trigger.evaluate(element => document.activeElement === element), true);
        assert.ok(Math.abs(await page.evaluate(() => scrollY) - before) < 2);
      }
    }
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    assert.deepEqual(errors, []);
    results.push({ locale, width, stories: 'passed', videos: width === 390 ? 'played, seeked, closed, focus and scroll restored' : 'not loaded before interaction', pageErrors: errors });
    await page.close();
  }
}
const context = await browser.newContext();
const ranges = [];
for (const name of ['strategy-overview.mp4', 'system-overview.mp4']) {
  const response = await context.request.get(`${baseURL}/media/${name}`, { headers: { Range: 'bytes=0-1023' } });
  assert.equal(response.status(), 206);
  assert.equal((await response.body()).length, 1024);
  ranges.push({ name, status: response.status(), type: response.headers()['content-type'], contentRange: response.headers()['content-range'] });
}
await browser.close();
const evidence = { baseURL, checkedAt: new Date().toISOString(), results, ranges };
await writeFile('artifacts/scroll-stability/live-verification.json', JSON.stringify(evidence, null, 2));
console.log(JSON.stringify(evidence));
