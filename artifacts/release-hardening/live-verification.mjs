import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';

const base = 'https://sparkle-auto-landing-2sq8r7it2-zodaayman2005-3362s-projects.vercel.app';
const output = 'artifacts/release-hardening/live';
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch();
const results = [];
try {
  for (const locale of ['ar', 'en']) for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: width === 1440 ? 1000 : 844 } });
    const page = await context.newPage();
    const errors = [];
    const warnings = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') errors.push(message.text());
      if (message.type() === 'warning') warnings.push(message.text());
    });
    const response = await page.goto(base + (locale === 'en' ? '/en' : '/'), { waitUntil: 'networkidle', timeout: 60000 });
    assert.equal(response.status(), 200);
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(async () => {
      const images = Array.from(document.images);
      images.forEach(image => image.loading = 'eager');
      await Promise.all(images.map(image => image.decode().catch(() => null)));
    });
    const state = await page.evaluate(() => ({
      locale: document.documentElement.lang,
      direction: document.documentElement.dir,
      heading: document.querySelector('h1')?.textContent,
      robots: document.querySelector('meta[name="robots"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
      overflow: document.documentElement.scrollWidth > innerWidth,
      broken: Array.from(document.images).filter(image => !image.naturalWidth).map(image => image.currentSrc),
      runtimeImageTransforms: Array.from(document.images).some(image => image.currentSrc.includes('/_next/image?')),
      embeddedFrames: document.querySelectorAll('iframe').length,
      strategyBackground: getComputedStyle(document.querySelector('#strategies')).backgroundColor,
      proofBackground: getComputedStyle(document.querySelector('#showcase')).backgroundColor,
      formNotice: document.querySelector('.form-availability')?.textContent,
      videoTarget: document.querySelector('.strategy-video-cover')?.getAttribute('target')
    }));
    assert.equal(state.locale, locale);
    assert.equal(state.direction, locale === 'ar' ? 'rtl' : 'ltr');
    assert.match(state.robots, /noindex/);
    assert.equal(state.canonical, null);
    assert.equal(state.overflow, false);
    assert.deepEqual(state.broken, []);
    assert.equal(state.runtimeImageTransforms, false);
    assert.equal(state.embeddedFrames, 0);
    assert.ok(state.formNotice);
    await page.screenshot({ path: `${output}/${locale}-${width}-hero.png` });
    await page.screenshot({ path: `${output}/${locale}-${width}-full.png`, fullPage: true });
    if (width === 390) {
      await page.locator('.menu-trigger').click();
      await page.screenshot({ path: `${output}/${locale}-drawer.png` });
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.menu-trigger').evaluate(element => element === document.activeElement), true);
      await page.goto(base + (locale === 'en' ? '/en' : '/') + '#fit-case-8', { waitUntil: 'networkidle' });
      await page.waitForTimeout(900);
      const anchorTop = await page.locator('#fit-case-8').evaluate(element => element.getBoundingClientRect().top);
      assert.ok(anchorTop >= 75 && anchorTop < 200, `${locale}: anchor at ${anchorTop}`);
      state.anchorTop = anchorTop;
      await page.screenshot({ path: `${output}/${locale}-deep-anchor.png` });
    }
    assert.deepEqual(errors, []);
    assert.deepEqual(warnings, []);
    results.push({ locale, width, status: response.status(), ...state, errors, warnings });
    console.log(`${locale} ${width}: passed`);
    await context.close();
  }
  const context = await browser.newContext();
  const routes = {};
  for (const path of ['/design', '/design/motion', '/api/test-video', '/robots.txt']) {
    const response = await context.request.get(base + path);
    routes[path] = response.status();
    assert.equal(response.status(), path === '/robots.txt' ? 200 : 404);
  }
  const invalid = await context.request.post(base + '/api/operations-review', { data: {}, headers: { origin: base } });
  assert.equal(invalid.status(), 400);
  const originalHashes = [];
  for (const name of ['overview','bookings','car-status','finance','team','inventory','loyalty']) {
    const path = `/product/${name}.jpg`;
    const response = await context.request.get(base + path);
    assert.equal(response.status(), 200);
    const expected = createHash('sha256').update(await fs.readFile(`public${path}`)).digest('hex');
    const actual = createHash('sha256').update(await response.body()).digest('hex');
    assert.equal(actual, expected);
    originalHashes.push({ path, sha256: actual, originalUnchanged: true });
  }
  await fs.writeFile(`${output}/results.json`, JSON.stringify({
    verifiedAt: new Date().toISOString(), base, target: 'preview', authenticated: false,
    results, routes, invalidEmptyRequestStatus: invalid.status(), originalHashes,
    actualLeadSent: false, productionPromoted: false
  }, null, 2));
  console.log('Unauthenticated live preview verification passed.');
} finally { await browser.close(); }
