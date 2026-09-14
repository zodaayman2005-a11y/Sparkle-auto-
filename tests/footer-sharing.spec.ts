import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import sharp from "sharp";

for (const locale of ["ar", "en"]) {
  for (const width of [320, 390, 1024, 1440]) {
    test(`${locale} ${width}: footer links and native scroll boundary`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      expect((await page.goto(locale === "ar" ? "/" : "/en"))?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      const footer = page.locator("footer");
      await footer.scrollIntoViewIfNeeded();
      await expect(footer.locator("nav a")).toHaveCount(8);
      for (const link of await footer.locator('a[href^="#"]').all()) {
        await expect(page.locator((await link.getAttribute("href"))!)).toHaveCount(1);
        const box = await link.boundingBox();
        expect(box && box.width >= 44 && box.height >= 44).toBeTruthy();
      }
      const nativeBoundary = await page.evaluate(() => CSS.supports("overscroll-behavior-y", "none"));
      if (nativeBoundary) {
        await expect(page.locator("html")).toHaveCSS("overscroll-behavior-y", "none");
        await expect(page.locator("body")).toHaveCSS("overscroll-behavior-y", "none");
      } else await expect(page.locator("html")).toHaveAttribute("data-scroll-boundary", "fallback");
      await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
      if (!nativeBoundary) {
        expect(await footer.evaluate(element => element.dispatchEvent(new WheelEvent("wheel", { deltaY: 120, bubbles:true, cancelable:true })))).toBe(false);
        expect(await footer.evaluate(element => element.dispatchEvent(new WheelEvent("wheel", { deltaY: -120, bubbles:true, cancelable:true })))).toBe(true);
      }
      await page.mouse.wheel(0, 1800);
      await expect.poll(() => page.evaluate(() => Math.abs(document.documentElement.scrollHeight - (document.querySelector("footer")!.getBoundingClientRect().bottom + scrollY)))).toBeLessThan(2);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.screenshot({ path: `${process.env.FOOTER_QA_DIR || "artifacts/footer-sharing"}/${locale}-${width}.png` });
      await footer.locator(".footer-top").click();
      await expect(page.locator("h1")).toBeInViewport();
    });
  }
  test(`${locale}: footer contrast and semantics`, async ({ page }) => {
    await page.goto(locale === "ar" ? "/" : "/en");
    await page.locator("footer").scrollIntoViewIfNeeded();
    expect((await new AxeBuilder({ page }).include("footer").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations).toEqual([]);
  });
}

test("sharing bots receive the supplied image and icon metadata without JavaScript", async ({ request }) => {
  for (const userAgent of ["facebookexternalhit/1.1", "WhatsApp/2.24", "Twitterbot/1.0", "TelegramBot"]) {
    for (const route of ["/", "/en"]) {
      const response = await request.get(route, { headers: { "User-Agent": userAgent } });
      const html = (await response.text()).split("</head>")[0];
      expect(response.status()).toBe(200);
      expect(html).toContain('property="og:image" content="https://sparkle-auto-landing.vercel.app/brand/share-cover-v1.jpg"');
      expect(html).toContain('name="twitter:card" content="summary_large_image"');
      expect(html).toContain(`property="og:url" content="https://sparkle-auto-landing.vercel.app${route === "/" ? "" : route}"`);
      expect(html).toContain('rel="apple-touch-icon"');
      expect(html).toContain('href="/favicon.ico');
    }
  }
  for (const path of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/brand/share-cover-v1.jpg"]) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toMatch(/^image\//);
    expect((await response.body()).length).toBeGreaterThan(100);
  }
  for (const path of ["/icon.png", "/apple-icon.png"]) {
    const response = await request.get(path);
    const metadata = await sharp(await response.body()).metadata();
    expect(metadata.hasAlpha).toBe(true);
    expect(metadata.channels).toBe(4);
  }
});

test("legacy boundary preserves nested scrolling, pinch zoom and inward input", async ({ page }) => {
  await page.addInitScript(() => {
    const supports = CSS.supports.bind(CSS);
    CSS.supports = (property: string, value?: string) => property === "overscroll-behavior-y" ? false : value === undefined ? supports(property) : supports(property, value);
  });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-scroll-boundary", "fallback");
  const result = await page.evaluate(() => {
    scrollTo(0, document.documentElement.scrollHeight);
    const footer = document.querySelector("footer")!;
    const nested = document.createElement("div");
    nested.style.cssText = "position:fixed;bottom:0;height:60px;overflow:auto;width:100px";
    nested.innerHTML = '<div style="height:300px">Scroll test</div>';
    footer.append(nested);
    const wheel = (target: Element, deltaY: number, ctrlKey = false) => target.dispatchEvent(new WheelEvent("wheel", { deltaY, ctrlKey, bubbles:true, cancelable:true }));
    const nestedAllowed = wheel(nested, 120);
    nested.scrollTop = nested.scrollHeight;
    const nestedEndBlocked = !wheel(nested, 120);
    nested.remove();
    const touch = (type: string, points: Array<{ clientX:number; clientY:number }>) => {
      const event = new Event(type, { bubbles:true, cancelable:true });
      Object.defineProperty(event, "touches", { value:points });
      return footer.dispatchEvent(event);
    };
    touch("touchstart", [{ clientX:20, clientY:100 }]);
    const outwardTouchBlocked = !touch("touchmove", [{ clientX:20, clientY:50 }]);
    const pinchAllowed = touch("touchmove", [{ clientX:20, clientY:30 }, { clientX:40, clientY:50 }]);
    const inwardAllowed = wheel(footer, -120);
    const zoomAllowed = wheel(footer, 120, true);
    scrollTo(0, 100);
    const middleAllowed = wheel(footer, 120);
    return { nestedAllowed, nestedEndBlocked, outwardTouchBlocked, pinchAllowed, inwardAllowed, zoomAllowed, middleAllowed };
  });
  expect(Object.values(result)).toEqual(Array(7).fill(true));
});
