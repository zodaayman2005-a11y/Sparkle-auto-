import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const locale of ["ar", "en"] as const) {
  test(`${locale}: header stays usable across layout boundaries`, async ({ page }) => {
    await page.goto(locale === "ar" ? "/" : "/en");
    for (const width of [320, 360, 390, 599, 600, 768, 1024, 1279, 1280, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const wide = width >= 1280;
      await expect(page.locator(".desktop-nav")).toBeVisible({ visible: wide });
      await expect(page.locator(".menu-trigger")).toBeVisible({ visible: !wide });
      expect(await page.locator(".header").evaluate(el => {
        const children = Array.from(el.children).filter(child => child.getBoundingClientRect().width > 0);
        const boxes = children.map(child => child.getBoundingClientRect()).sort((a, b) => a.left - b.left);
        return boxes.every((box, i) => box.left >= 0 && box.right <= innerWidth && (!i || boxes[i - 1].right <= box.left));
      })).toBe(true);
      if (!wide) {
        await page.locator(".menu-trigger").click();
        await expect(page.locator(".drawer-links > a")).toHaveCount(8);
        for (const link of await page.locator(".drawer-links > a").all()) {
          const href = await link.getAttribute("href");
          await expect(page.locator(href!)).toHaveCount(1);
        }
        await page.keyboard.press("Escape");
        await expect(page.locator(".menu-trigger")).toBeFocused();
        expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
      }
    }
    await page.locator(".header-wrap").screenshot({ path: `artifacts/header-refresh/${locale}-desktop.png` });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator(".header-wrap").screenshot({ path: `artifacts/header-refresh/${locale}-mobile.png` });
    await page.locator(".menu-trigger").click();
    await page.locator(".drawer").screenshot({ path: `artifacts/header-refresh/${locale}-drawer.png` });
    const a11y = await new AxeBuilder({ page }).include(".drawer").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(a11y.violations).toEqual([]);
    await page.locator('.drawer-links a[href="#fit"]').click();
    await expect(page).toHaveURL(/#fit$/);
    await expect(page.locator(".drawer")).toHaveCount(0);
    await page.locator(".menu-trigger").click();
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(page.locator(".drawer")).toHaveCount(0);
    expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
  });
}
