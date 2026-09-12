import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { audience, pick } from "../src/content/site";

for (const locale of ["ar", "en"] as const) {
  test(`audience ${locale}: desktop dwell, ten scenes, keyboard and reversal`, async ({ page }) => {
    await page.setViewportSize({ width:1440, height:1000 });
    await page.goto(`${locale === "en" ? "/en" : "/"}#fit-case-1`);
    const story = page.locator(".fit .audience-story");
    await expect(story).toHaveAttribute("data-pinned", "true");
    for (let index=0;index<10;index++) {
      const link = story.locator(".audience-nav a").nth(index);
      await link.click();
      await expect(story).toHaveAttribute("data-active", String(index+1));
      const scene = story.locator(".audience-scene").nth(index);
      if (index<9) await expect(scene.locator("p")).toHaveText(pick(audience[index], locale));
      await expect(scene).not.toHaveAttribute("inert");
      await scene.locator("img").evaluate((image:HTMLImageElement) => image.decode());
      await page.waitForTimeout(670);
      expect(await scene.evaluate(el => {
        const r=el.getBoundingClientRect();
        const copy=el.querySelector(".audience-scene-copy")!.getBoundingClientRect();
        return copy.top>=r.top-1 && copy.bottom<=r.bottom+1;
      })).toBe(true);
    }
    await story.locator(".audience-nav a").first().click();
    await page.mouse.wheel(0,100);
    await page.waitForTimeout(150);
    await expect(story).toHaveAttribute("data-active","1");
    await story.locator(".audience-nav a").nth(8).focus();
    await page.keyboard.press("Enter");
    await expect(story).toHaveAttribute("data-active","9");
    await story.locator(".audience-nav a").nth(2).click();
    await expect(story).toHaveAttribute("data-active","3");
    await story.locator(".audience-skip").click();
    await expect(page.locator("#fit-after")).toBeInViewport();
  });

  test(`audience ${locale}: mobile flow, deep link, no clipping and reduced motion`, async ({page}) => {
    await page.setViewportSize({width:390,height:844});
    await page.goto(`${locale === "en" ? "/en" : "/"}#fit-case-8`);
    const story=page.locator(".fit .audience-story");
    await expect(story).toHaveAttribute("data-pinned","false");
    await expect(page.locator("#fit-case-8")).toBeInViewport();
    for(let i=0;i<10;i++) {
      const scene=story.locator(".audience-scene").nth(i);
      await scene.scrollIntoViewIfNeeded();
      if(i<9) await expect(scene.locator("p")).toHaveText(pick(audience[i],locale));
      await expect(scene).not.toHaveAttribute("inert");
      expect(await scene.evaluate(el=>el.scrollWidth<=innerWidth)).toBe(true);
    }
    await page.emulateMedia({reducedMotion:"reduce"});
    await expect(story.locator(".audience-stage")).toHaveCSS("position","static");
    const result=await new AxeBuilder({page}).include(".fit").withTags(["wcag2a","wcag2aa","wcag21aa"]).analyze();
    expect(result.violations.map(v=>v.id)).toEqual([]);
  });
}

test("no JavaScript retains all situations and illustrations",async({browser})=>{
  const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const page=await context.newPage();
  await page.goto("/");
  await expect(page.locator(".fit .audience-story")).toHaveAttribute("data-pinned","false");
  await expect(page.locator(".fit .audience-scene img")).toHaveCount(10);
  for(let i=0;i<9;i++) await expect(page.locator(".fit .audience-scene p").nth(i)).toHaveText(pick(audience[i],"ar"));
  await context.close();
});
