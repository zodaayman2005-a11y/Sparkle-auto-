import { chromium } from "playwright";
import fs from "node:fs/promises";
import assert from "node:assert/strict";
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
const result = { source: "User-supplied Google Drive video", playback: [], captions: [], issues: [] };
try {
  await page.goto("http://127.0.0.1:3100/", { waitUntil: "networkidle" });
  assert.equal(await page.locator("iframe").count(), 0);
  await page.locator(".strategy-video-cover").click();
  const frame = page.frameLocator(".strategy-video-inline iframe");
  const nestedPlayer = frame.locator('iframe[title="YouTube video player"]');
  await nestedPlayer.waitFor({ state:"visible", timeout:45000 });
  await nestedPlayer.click();
  await page.keyboard.press("k");
  const anyPlaying = async () => {
    for (const nested of page.frames()) if (await nested.locator("video").evaluateAll(videos => videos.some(v => !v.paused && v.currentTime > 0)).catch(() => false)) return true;
    return false;
  };
  for (let i=0; i<20 && !await anyPlaying(); i++) await page.waitForTimeout(500);
  await page.keyboard.press("c");
  await page.waitForTimeout(500);
  result.captionUi = await frame.locator('button[aria-label*="الترجمة"]').evaluateAll(elements => elements.map(el => ({ pressed:el.getAttribute("aria-pressed"), disabled:el.getAttribute("aria-disabled"), label:el.getAttribute("aria-label") })));
  await frame.getByRole("button", { name:"الإعدادات", exact:true }).click();
  result.settingsUi = await frame.locator("body").innerText();
  await frame.getByRole("menuitem", {name:/الترجمة والشرح/}).click();
  result.captionMenu = await frame.locator("body").innerText();
  await frame.getByRole("button", { name:"الإعدادات", exact:true }).click();
  for (const nested of page.frames()) {
    const videos = await nested.locator("video").evaluateAll(elements => elements.map(video => ({
      readyState: video.readyState, currentTime: video.currentTime, paused: video.paused,
      duration: video.duration, error: video.error?.message || null, networkState:video.networkState, hasSource:Boolean(video.currentSrc), tracks: Array.from(video.textTracks).map(track => ({ language: track.language, kind: track.kind, label: track.label, mode: track.mode }))
    }))).catch(() => []);
    result.playback.push(...videos);
    const captionButtons = await nested.getByRole("button", { name: /caption|subtitle|ترجمة|شرح/i }).allTextContents().catch(() => []);
    result.captions.push(...captionButtons);
  }
  await page.screenshot({ path: "artifacts/release-hardening/qa/video-playing.png", caret: "initial" });
  assert.equal(result.playback.some(video => video.readyState >= 2 && video.currentTime > 0 && !video.paused), true);
  assert.equal(await page.locator("dialog").count(), 0);
  await page.keyboard.press("Escape");
  let closeFocused = false;
  result.tabTrace=[];
  for (let i=0; i<80 && !closeFocused; i++) {
    await page.keyboard.press("Tab");
    await page.waitForTimeout(50);
    closeFocused = await page.getByRole("button", {name:"إغلاق الفيديو", exact:true}).evaluate(el => el === document.activeElement);
    result.tabTrace.push(await page.evaluate(() => ({tag:document.activeElement?.tagName,text:document.activeElement?.textContent?.slice(0,80),title:document.activeElement?.getAttribute("title")})));
  }
  result.keyboardExitFromPlayer = closeFocused;
  assert.equal(closeFocused, true);
  await page.keyboard.press("Enter");
  await page.locator("iframe").waitFor({ state: "detached", timeout: 2000 });
  assert.equal(await page.locator("iframe").count(), 0);
  assert.equal(await page.locator(".strategy-video-cover").evaluate(el => el === document.activeElement), true);
  result.closedWithKeyboard = true;
} catch (error) {
  result.issues.push(error.message);
  for (const nested of page.frames().slice(1)) console.log(await nested.locator("body").innerText().catch(() => ""));
} finally {
  await fs.writeFile("artifacts/release-hardening/video-check.json", JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  await context.close();
  await browser.close();
}
