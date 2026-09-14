import { expect, test } from '@playwright/test';
const artifacts = process.env.RAPID_QA_DIR || 'artifacts/rapid-use';

for (const locale of ['ar', 'en'] as const) {
  for (const width of [320, 360, 390, 768, 1024, 1440]) {
    test(`${locale} ${width}: rapid FAQ, pricing and navigation stay under user control`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.goto(locale === 'ar' ? '/' : '/en');
      await page.evaluate(() => document.fonts.ready);
      const items = page.locator('.faq-item');
      const lengths = await items.evaluateAll(nodes => nodes.map(node => node.querySelector('.faq-answer')!.textContent!.length));
      const longest = lengths.indexOf(Math.max(...lengths));
      await items.nth(longest).locator('h3 button').click();
      const next = items.nth(longest + 1).locator('h3 button');
      await next.scrollIntoViewIfNeeded();
      const before = (await next.boundingBox())!.y;
      await next.click();
      await expect(next).toHaveAttribute('aria-expanded', 'true');
      expect(Math.abs((await next.boundingBox())!.y - before)).toBeLessThan(2);
      for (let i = 0; i < 6; i++) await next.click({ delay: 0 });
      await expect(next).toHaveAttribute('aria-expanded', 'true');
      if (width === 390 || width === 1440) await page.screenshot({ path: `${artifacts}/${locale}-${width}-faq.png` });
      if (width >= 981) {
        await items.nth(24).scrollIntoViewIfNeeded();
        await page.locator('.faq-categories button').nth(1).click();
        await expect(page.locator('.faq-results-count')).toBeInViewport();
        await expect(page.locator('.faq-categories button').nth(1)).toBeInViewport();
      }
      const search = page.locator('#faq-search-input');
      await search.fill('no-matching-question-xyz');
      await expect(page.locator('.faq-empty')).toBeVisible();
      await expect.poll(() => page.evaluate(() => {
        const range = document.documentElement.scrollHeight - innerHeight;
        const expected = range > 0 ? Math.max(0, Math.min(1, scrollY / range)) : 0;
        return Math.abs(Number((document.querySelector('.reading-rail') as HTMLElement).style.getPropertyValue('--progress')) - expected);
      })).toBeLessThan(.001);
      await search.fill('');
      await page.locator('.faq-categories button').first().click();
      await expect(items).toHaveCount(30);
      await expect(search).toHaveCSS('font-size', '16px');

      const yearly = page.locator('.billing-switch button').nth(1);
      const monthly = page.locator('.billing-switch button').first();
      await yearly.scrollIntoViewIfNeeded();
      const height = await page.locator('#pricing').evaluate(el => el.getBoundingClientRect().height);
      for (let i = 0; i < 3; i++) { await yearly.click(); await monthly.click(); }
      expect(Math.abs(await page.locator('#pricing').evaluate(el => el.getBoundingClientRect().height) - height)).toBeLessThan(2);
      // Real anchor events with very little time between destinations.
      for (const id of ['faq', 'pricing', 'review', 'faq', 'review']) {
        await page.locator(`footer nav a[href="#${id}"]`).evaluate(el => (el as HTMLAnchorElement).click());
        await page.waitForTimeout(30);
      }
      await expect(page).toHaveURL(/#review$/);
      await expect(page.locator('#review h2')).toBeInViewport();
      await page.waitForTimeout(250);
      const y = await page.evaluate(() => scrollY);
      expect((await page.locator('#review .section-label').boundingBox())!.y).toBeGreaterThan((await page.locator('.header-wrap').boundingBox())!.height);
      await page.waitForTimeout(250);
      expect(Math.abs(await page.evaluate(() => scrollY) - y)).toBeLessThan(2);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect(errors).toEqual([]);
      await page.screenshot({ path: `${artifacts}/${locale}-${width}-form.png` });
    });
  }
}

test('late story layout must not pull a reader back to an old anchor', async ({ page }) => {
  await page.goto('/en#faq');
  await page.waitForTimeout(1000);
  // Dragging a scrollbar starts with a pointer, not a wheel or touch event.
  await page.locator('body').dispatchEvent('pointerdown', { pointerType: 'mouse' });
  await page.evaluate(() => scrollBy(0, 500));
  const y = await page.evaluate(() => scrollY);
  await page.evaluate(() => dispatchEvent(new Event('sparkle:layout')));
  await page.waitForTimeout(180);
  expect(Math.abs(await page.evaluate(() => scrollY) - y)).toBeLessThan(2);
});

test('short viewport keeps FAQ controls in flow', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 600 });
  await page.goto('/');
  await expect(page.locator('.faq-intro')).toHaveCSS('position', 'static');
});

for (const locale of ['ar', 'en'] as const) {
  for (const width of [390, 1440]) {
    test(`${locale} ${width}: form step reversal, validation and repeated send`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(locale === 'ar' ? '/#review' : '/en#review');
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(300);
      let requests = 0;
      await page.route('**/api/operations-review', async route => {
        requests++;
        await new Promise(resolve => setTimeout(resolve, 150));
        await route.fulfill({ status: 200, json: { received: true } });
      });
      const send = page.locator('.form-actions button[type=submit]');
      await send.click();
      await expect(page.locator('[name=name]')).toBeFocused();
      const field = page.locator('[name=name]').locator('..');
      expect((await field.boundingBox())!.y).toBeGreaterThan(80);
      for (const [name, value] of Object.entries({name:'QA local only',phone:'01012345678',business:'Test',area:'Cairo'})) {
        await page.locator(`[name=${name}]`).fill(value);
      }
      for (let i = 0; i < 3; i++) {
        await send.click();
        await expect(page.locator('[name=branches]')).toBeFocused();
        expect((await page.locator('[name=branches]').locator('..').boundingBox())!.y).toBeGreaterThan(80);
        await page.getByRole('button', {name: locale === 'ar' ? 'رجوع' : 'Back', exact:true}).click();
        await expect(page.locator('[name=name]')).toBeFocused();
        await expect(page.locator('[name=name]')).toHaveValue('QA local only');
      }
      await send.click();
      for (const [name, value] of Object.entries({branches:'2',cars:'30',role:'Owner',current:'Notebook',time:'Evening'})) {
        await page.locator(`[name=${name}]`).fill(value);
      }
      await page.locator('[name=problem]').selectOption('0');
      await page.locator('#review form').evaluate(el => {
        (el as HTMLFormElement).requestSubmit();
        (el as HTMLFormElement).requestSubmit();
      });
      await expect(page.locator('.success-state')).toBeVisible();
      expect(requests).toBe(1);
      await expect(page.locator('.success-state')).toBeFocused();
      await expect(page.locator('.review-card-icon')).toHaveCSS('background-color', 'rgb(221, 243, 255)');
      await page.locator('.form-panel').screenshot({path:`${artifacts}/${locale}-${width}-receipt.png`});
    });
  }
}
