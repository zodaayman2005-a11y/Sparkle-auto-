import { expect, test } from "@playwright/test";

for (const locale of ["ar", "en"]) {
  test(`${locale}: real videos play, seek and close without downloading before interaction`, async ({ page }) => {
    test.setTimeout(90000);
    await page.setViewportSize({ width: 390, height: 844 });
    const mediaRequests: string[] = [];
    page.on("request", request => { if (request.url().includes("/media/")) mediaRequests.push(request.url()); });
    await page.goto(locale === "ar" ? "/" : "/en");
    expect(mediaRequests).toEqual([]);
    for (const selector of [".strategy-video-cover", ".system-video-trigger"]) {
      const trigger = page.locator(selector);
      await trigger.scrollIntoViewIfNeeded();
      const before = await page.evaluate(() => scrollY);
      await trigger.click();
      const video = page.locator("dialog video");
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.currentTime), { timeout: 20000 }).toBeGreaterThan(.1);
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) => element.readyState)).toBeGreaterThanOrEqual(2);
      await video.evaluate((element: HTMLVideoElement) => { element.currentTime = element.duration * .75; });
      await expect.poll(() => video.evaluate((element: HTMLVideoElement) => !element.seeking && element.currentTime > element.duration * .7), { timeout: 20000 }).toBe(true);
      await expect(page.locator("iframe")).toHaveCount(0);
      await page.screenshot({ path: `artifacts/scroll-stability/${locale}-${selector.includes("strategy") ? "strategy" : "system"}-playing.png` });
      await page.keyboard.press("Escape");
      await expect(video).toHaveCount(0);
      await expect(trigger).toBeFocused();
      expect(Math.abs(await page.evaluate(() => scrollY) - before)).toBeLessThan(2);
    }
  });
}

test("failed native video has a localized recovery state and retains close control", async ({ page }) => {
  await page.goto("/");
  await page.locator(".strategy-video-cover").click();
  // WebKit's native media process bypasses Playwright route interception.
  // Load a genuinely missing URL to exercise the browser's network error path.
  await page.locator("dialog video").evaluate((video: HTMLVideoElement) => {
    video.src = "/media/missing-video-test.mp4";
    video.load();
  });
  await expect(page.locator("dialog [role=alert]")).toContainText("تعذّر تشغيل الفيديو");
  await page.getByRole("button", { name: "إغلاق", exact: true }).click();
  await expect(page.locator("dialog")).toHaveCount(0);
});
