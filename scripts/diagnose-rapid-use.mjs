import { chromium } from '@playwright/test';
const browser = await chromium.launch();
const base = process.env.PLAYWRIGHT_BASE_URL || 'http://127.0.0.1:3101';
for (const width of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto(`${base}/en`);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(600);
  const items = page.locator('.faq-item');
  const lengths = await items.evaluateAll(nodes => nodes.map(n => n.querySelector('.faq-answer').textContent.length));
  const index = lengths.indexOf(Math.max(...lengths));
  const first = items.nth(index).locator('h3 button');
  await first.click();
  const next = items.nth(index + 1).locator('h3 button');
  await next.scrollIntoViewIfNeeded();
  const before = await next.boundingBox();
  await next.click();
  await page.waitForTimeout(200);
  console.log(JSON.stringify({ width, case: 'collapse-above-click', index, before, after: await next.boundingBox() }));
  if (width === 1440) {
    await items.nth(24).scrollIntoViewIfNeeded();
    const filter = page.locator('.faq-categories button').nth(1);
    const initial = await filter.boundingBox();
    await filter.click();
    console.log(JSON.stringify({ width, case: 'sticky-filter', before: initial, after: await filter.boundingBox(), focused: await page.locator(':focus').getAttribute('id') }));
  }
  await page.goto(`${base}/en#review`);
  await page.waitForTimeout(700);
  await page.locator('[name=name]').fill('Test');
  await page.locator('[name=phone]').fill('01012345678');
  await page.locator('[name=business]').fill('Test');
  await page.locator('[name=area]').fill('Cairo');
  await page.locator('.form-actions button[type=submit]').click();
  await page.waitForTimeout(200);
  console.log(JSON.stringify({width, case:'form-step-focus', focus:await page.locator(':focus').getAttribute('name'), bounds:await page.locator(':focus').boundingBox()}));
  await page.close();
}
await browser.close();
