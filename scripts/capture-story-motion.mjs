import { chromium } from '@playwright/test';
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3106'}/`);
  await page.evaluate(() => document.fonts.ready);
  const story = page.locator('.setup-story');
  await story.locator('.audience-nav a').nth(1).click();
  const art = story.locator('[data-current="true"] .audience-art');
  await art.locator('img').evaluate(img => img.decode());
  await art.evaluate(el => { const animation = el.getAnimations()[0]; animation.pause(); animation.currentTime = 120; });
  await story.locator('.audience-stage').screenshot({ path: 'artifacts/story-pacing/setup-entering.png' });
  await art.evaluate(el => { const animation = el.getAnimations()[0]; animation.play(); });
  await page.waitForTimeout(700);
  await story.locator('.audience-stage').screenshot({ path: 'artifacts/story-pacing/setup-settled.png' });
} finally { await browser.close(); }
