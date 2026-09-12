import { chromium } from "@playwright/test";
import fs from "node:fs/promises";

// Same conditions before and after. Lab observations, never field CWV claims.
const [base = "http://127.0.0.1:3130", output = "artifacts/performance/loading.json"] = process.argv.slice(2);
const browser = await chromium.launch();
const results = [];
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send("Network.enable");
    await cdp.send("Network.setCacheDisabled", { cacheDisabled: true });
    await cdp.send("Network.emulateNetworkConditions", { offline: false, latency: 80, downloadThroughput: 750000, uploadThroughput: 250000 });
    await cdp.send("Emulation.setCPUThrottlingRate", { rate: 4 });
    await page.addInitScript(() => {
      window.loadingAudit = { lcp: 0, shiftSum: 0 };
      new PerformanceObserver(list => list.getEntries().forEach(entry => { window.loadingAudit.lcp = entry.startTime; })).observe({ type: "largest-contentful-paint", buffered: true });
      new PerformanceObserver(list => list.getEntries().forEach(entry => { if (!entry.hadRecentInput) window.loadingAudit.shiftSum += entry.value; })).observe({ type: "layout-shift", buffered: true });
    });
    await page.goto(base, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.locator(".hero-backdrop").evaluate(async img => { await img.decode(); });
    const heroReady = await page.evaluate(() => performance.now());
    await page.waitForTimeout(1200);
    results.push(await page.evaluate(({ width, heroReady }) => ({ width, heroReady, ...window.loadingAudit,
      resources: performance.getEntriesByType("resource").map(r => ({ name: new URL(r.name).pathname, bytes: r.transferSize, duration: r.duration, type: r.initiatorType })),
      hero: { source: document.querySelector(".hero-backdrop").currentSrc, naturalWidth: document.querySelector(".hero-backdrop").naturalWidth },
    }), { width, heroReady }));
    console.log(JSON.stringify({ width, heroReady, ...await page.evaluate(() => window.loadingAudit) }));
    await context.close();
  }
  await fs.mkdir(new URL("../artifacts/performance/", import.meta.url), { recursive: true });
  await fs.writeFile(output, JSON.stringify({ conditions: { base, cache: "cold", cpu: "4x", downloadMbps: 6, latencyMs: 80, dpr: 1, browser: browser.version(), fieldData: false }, results }, null, 2));
} finally { await browser.close(); }
