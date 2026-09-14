import { chromium } from 'playwright';
import { writeFile } from 'node:fs/promises';

// Controlled lab diagnostic; frame intervals are not field Core Web Vitals.
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await page.goto(process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3100');
await page.evaluate(() => document.fonts.ready);
await page.locator('.setup-story .audience-nav a').nth(1).click();
await page.waitForTimeout(600);
const cdp = await page.context().newCDPSession(page);
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
await page.evaluate(() => {
  const audit = window.scrollAudit = { gaps: [], longTasks: [], running: true };
  let previous;
  const tick = time => {
    if (previous) audit.gaps.push(time - previous);
    previous = time;
    if (audit.running) requestAnimationFrame(tick);
  };
  new PerformanceObserver(list => audit.longTasks.push(...list.getEntries().map(entry => entry.duration))).observe({ type: 'longtask' });
  requestAnimationFrame(tick);
});
const chapters = [];
for (const direction of [1, -1]) {
  for (let i = 0; i < 12; i++) {
    await page.mouse.wheel(0, direction * 140);
    await page.waitForTimeout(180);
    chapters.push(await page.locator('.setup-story').getAttribute('data-active'));
  }
}
const measurements = await page.evaluate(() => {
  const audit = window.scrollAudit;
  audit.running = false;
  const gaps = [...audit.gaps].sort((a, b) => a - b);
  return {
    frameSamples: gaps.length,
    medianFrameIntervalMs: gaps[Math.floor(gaps.length * .5)],
    p95FrameIntervalMs: gaps[Math.floor(gaps.length * .95)],
    maxFrameIntervalMs: Math.max(...gaps),
    longTaskCount: audit.longTasks.length,
    longestTaskMs: Math.max(0, ...audit.longTasks),
    overflow: document.documentElement.scrollWidth > innerWidth,
  };
});
const result = { environment: 'Chromium, 1366x768, production build, 4x CPU slowdown, native wheel forward/reverse; one local lab run', ...measurements, chapters, errors };
await writeFile('artifacts/scroll-stability/scroll-lab.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result));
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.locator('#setup-step-2').scrollIntoViewIfNeeded();
await page.screenshot({ path: 'artifacts/scroll-stability/reduced-motion.png' });
await browser.close();
