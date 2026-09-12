import { test, expect } from "@playwright/test";
test("two-chapter prototype plus zero and one chapter fixtures", { tag: "@development" }, async ({
  page,
}) => {
  for (const count of [0, 1, 2]) {
    await page.goto("/design/motion?count=" + count);
    await expect(page.locator(".strategy-art-story .audience-scene")).toHaveCount(count);
    if (count === 0) await expect(page.locator("#strategies")).toHaveCount(0);
  }
});
test("ready test video plays only after click, closes, reopens, handles failure", { tag: "@development" }, async ({
  page,
}) => {
  await page.goto("/design/motion");
  await expect(page.locator("video")).toHaveCount(0);
  const button = page.getByRole("button", { name: "Play test video" });
  await button.click();
  await expect(page.locator("video")).toBeVisible();
  await expect
    .poll(() =>
      page.locator("video").evaluate((e: HTMLVideoElement) => e.readyState),
    )
    .toBeGreaterThanOrEqual(2);
  await page.keyboard.press("Escape");
  await expect(page.locator("video")).toHaveCount(0);
  await expect(button).toBeFocused();
  await page.route("**/api/test-video", (route) =>
    route.fulfill({ status: 404, body: "" }),
  );
  await button.click();
  await expect(page.locator("dialog [role=alert]")).toContainText(
    "unavailable",
  );
  await page.getByRole("button", { name: "Close", exact: true }).click();
  await expect(page.locator("dialog")).toHaveCount(0);
});

