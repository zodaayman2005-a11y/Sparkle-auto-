import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const widths = [320, 360, 390, 430, 768, 1024, 1280, 1440];
for (const lang of ["ar", "en"])
  for (const width of widths)
    test(`${lang} ${width}: reflow, content and language`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(lang === "ar" ? "/" : "/en");
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await expect(page.locator(".strategy-art-story .audience-scene")).toHaveCount(5);
      await expect(page.locator(".system-proof-story .audience-scene")).toHaveCount(7);
      await expect(page.locator(".journey-rail li")).toHaveCount(8);
      await expect(page.locator(".setup-story .audience-scene")).toHaveCount(5);
      await expect(page.locator("video")).toHaveCount(0);
      expect(errors).toEqual([]);
      if (width < 1024)
        await expect(page.locator('.audience-story[data-pinned="true"]')).toHaveCount(0);
      await page.waitForTimeout(350);
      await page.screenshot({
        path: `artifacts/visual/final-${lang}-${width}.png`,
        fullPage: true,
      });
    });
for (const lang of ["ar", "en"])
  test(`${lang} automated accessibility`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(lang === "ar" ? "/" : "/en");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
  });
test("mobile menu, Escape, focus return and locale link", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  for (const target of await page.locator(".header > a, .language-link, .footer nav a").all()) {
    const box = await target.boundingBox();
    expect(box && box.width >= 44 && box.height >= 44).toBeTruthy();
  }
  const menu = page.getByRole("button", { name: "افتح القائمة" });
  await menu.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Tab");
  expect(
    await page.evaluate(() => !!document.activeElement?.closest("dialog")),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(menu).toBeFocused();
  await menu.click();
  await page.getByRole("dialog").getByRole("link", { name: "الأسعار" }).click();
  await expect(page).toHaveURL(/#pricing$/);
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.locator(".language-link").click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
});
test("FAQ and pricing toggle", async ({ page }) => {
  await page.goto("/");
  const faq = page.locator(".faq-item").nth(2).getByRole("button");
  const answerId = await faq.getAttribute("aria-controls");
  expect(answerId).toBeTruthy();
  await faq.click();
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(`#${answerId}`)).toBeVisible();
  await faq.click();
  await expect(page.locator(`#${answerId}`)).toBeHidden();
  await page.getByRole("button", { name: "سنوي", exact: true }).click();
  await expect(
    page.locator(".price-card").first().locator(".price strong"),
  ).toHaveText("12,900");
  await page.getByRole("button", { name: "شهري", exact: true }).click();
  await expect(
    page.locator(".price-card").first().locator(".price strong"),
  ).toHaveText("1,290");
});
test("fast chapters, deep link, reverse and reduced motion", async ({ page }) => {
  await page.setViewportSize({ width:1440, height:1000 });
  await page.goto("/#strategy-money");
  const story = page.locator(".strategy-art-story");
  await expect(story).toHaveAttribute("data-pinned", "true");
  await expect(story).toHaveAttribute("data-active", "2");
  for (const [id, index] of [["strategy-branches",5],["strategy-journey",1],["strategy-roles",3]] as const) {
    const link = story.locator(`.audience-nav a[href="#${id}"]`);
    await link.click();
    await expect(story).toHaveAttribute("data-active", String(index));
    await expect(link).toHaveAttribute("aria-current", "step");
  }
  await page.emulateMedia({ reducedMotion:"reduce" });
  await expect(story).toHaveAttribute("data-pinned", "false");
  await expect(story.locator("[inert]")).toHaveCount(0);
  await expect(story.locator(".audience-scene")).toHaveCount(5);
  await page.emulateMedia({ reducedMotion:"no-preference" });
  await expect(story).toHaveAttribute("data-pinned", "true");
  await page.setViewportSize({ width:1440, height:600 });
  await expect(story).toHaveAttribute("data-pinned", "false");
});
test("screenshot dialog keyboard and focus return", async ({ page }) => {
  await page.goto("/en");
  const trigger = page
    .getByRole("button", { name: "Enlarge screenshot" })
    .first();
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});
async function fillReview(page: Page) {
  await page.locator("[name=name]").fill("Test Owner");
  await page.locator("[name=phone]").fill("01012345678");
  await page.locator("[name=business]").fill("TEST ONLY");
  await page.locator("[name=area]").fill("Cairo");
  await page.locator(".form-actions button[type=submit]").click();
  for (const [name, value] of Object.entries({
    branches: "2",
    cars: "40",
    role: "Owner",
    current: "Notebook",
    time: "Evening",
  }))
    await page.locator(`[name=${name}]`).fill(value);
  await page.locator("[name=problem]").selectOption("0");
}
test("form validates, preserves values and reports unconfigured receiver honestly", async ({
  page,
}) => {
  await page.goto("/en");
  await page.locator(".form-actions button[type=submit]").click();
  await expect(page.locator("[name=name]")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await fillReview(page);
  await page.locator(".form-actions button[type=submit]").click();
  await expect(page.locator(".form-error[role=alert]")).toContainText(
    "not connected",
  );
  await expect(page.locator("[name=branches]")).toHaveValue("2");
  await expect(page.locator(".success-state")).toHaveCount(0);
  await page.getByRole("button", { name: "Back", exact: true }).click();
  await expect(page.locator("[name=name]")).toHaveValue("Test Owner");
});
test("form success/error/loading with intercepted local response only", async ({
  page,
}) => {
  await page.goto("/en");
  let count = 0;
  await page.route("**/api/operations-review", async (route) => {
    count++;
    await new Promise((r) => setTimeout(r, 300));
    await route.fulfill({
      status: 502,
      contentType: "application/json",
      body: JSON.stringify({ code: "delivery_failed" }),
    });
  });
  await fillReview(page);
  const send = page.locator(".form-actions button[type=submit]");
  await send.click();
  await expect(send).toBeDisabled();
  await expect(page.locator(".form-error[role=alert]")).toContainText(
    "could not confirm receipt",
  );
  expect(count).toBe(1);
  await page.unroute("**/api/operations-review");
  await page.route("**/api/operations-review", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ received: true }),
    }),
  );
  await send.click();
  await expect(page.locator(".success-state")).toContainText(
    "received your request",
  );
});
test("server rejects invalid input and never fabricates receipt", async ({
  request,
}) => {
  expect(
    (
      await request.post("/api/operations-review", { data: { name: "only" } })
    ).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/operations-review", {
        data: [],
        headers: { Origin: "https://invalid.example" },
      })
    ).status(),
  ).toBe(403);
  const r = await request.post("/api/operations-review", {
    data: {
      name: "TEST",
      phone: "01012345678",
      business: "TEST",
      area: "TEST",
      branches: "1",
      cars: "0",
      role: "TEST",
      current: "TEST",
      time: "TEST",
      problem: "0",
    },
  });
  expect(r.status()).toBe(503);
  expect((await r.json()).received).toBeUndefined();
});
test("no-JavaScript English has correct language and visible narrative", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const p = await context.newPage();
  await p.goto("/en");
  await expect(p.locator("html")).toHaveAttribute("lang", "en");
  await expect(p.locator("h1")).toContainText("in control");
  await expect(p.locator(".strategy-art-story .audience-scene")).toHaveCount(5);
  await context.close();
});

