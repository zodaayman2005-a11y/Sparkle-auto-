import { chromium } from "playwright";
import fs from "node:fs/promises";
import assert from "node:assert/strict";

const base = process.env.QA_URL || "http://127.0.0.1:3100";
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
const results = [];
try {
  for (const locale of ["ar", "en"]) {
    const page = await context.newPage();
    await page.goto(base + (locale === "ar" ? "/" : "/en"), {waitUntil:"networkidle"});
    const trigger = page.locator(".strategy-video-cover");
    await trigger.focus();
    await page.screenshot({path:`artifacts/release-hardening/qa/${locale}-video-cover-focus.png`,caret:"initial"});
    const [popup] = await Promise.all([page.waitForEvent("popup"), page.keyboard.press("Enter")]);
    await popup.waitForLoadState("domcontentloaded");
    assert.match(popup.url(), /drive\.google\.com\/file\/d\/1fMEnIthjp5DJ_iot-cUua40-U6_ac1jR/);
    assert.equal(await page.locator("iframe").count(), 0);
    await popup.close();
    await page.bringToFront();
    assert.equal(await trigger.evaluate(el => el === document.activeElement), true);
    await page.keyboard.press("Tab");
    assert.equal(await trigger.evaluate(el => el === document.activeElement), false);
    results.push({locale, nativeNewTab:true, embeddedFrames:0, focusRetained:true, keyboardContinues:true});
    await page.close();
  }
  await fs.writeFile("artifacts/release-hardening/video-check.json", JSON.stringify({base,results,sourcePlaybackEvidence:"baseline/provider-embed-check.json",captionStatus:"Provider offers automatic Arabic captions; no reviewed caption file or transcript is supplied."},null,2));
  console.log(JSON.stringify(results));
} finally { await browser.close(); }
