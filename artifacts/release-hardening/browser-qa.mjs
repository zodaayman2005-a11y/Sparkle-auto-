import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
import assert from "node:assert/strict";

const base = process.env.QA_URL || "http://127.0.0.1:3100";
const dir = "artifacts/release-hardening/qa";
await fs.mkdir(dir, {recursive:true});
const browser = await chromium.launch();
const results = [];
const sections = [".hero", ".intro-proof", "#problem", "#system", ".fit", "#strategies", "#showcase", "#journey", "#setup", "#pricing", "#faq", "#review", ".final-section"];
async function ready(page, locale) {
  await page.goto(base + (locale === "en" ? "/en" : "/"), {waitUntil:"networkidle"});
  await page.evaluate(()=>document.fonts.ready);
  await page.evaluate(async()=>{
    const images=Array.from(document.images);
    images.forEach(image=>image.loading="eager");
    await Promise.all(images.map(image=>image.decode().catch(()=>null)));
  });
}
try {
  for (const locale of ["ar","en"]) for (const width of [1440,1024,768,390,360,320]) {
    const height = width>=1024 ? 1000 : width===768 ? 1024 : width===390 ? 844 : 800;
    const context=await browser.newContext({viewport:{width,height}});
    const page=await context.newPage();
    const errors=[];
    page.on("pageerror", error=>errors.push(error.message));
    page.on("console", message=>{if(message.type()==="error")errors.push(message.text());});
    await ready(page,locale);
    const broken=await page.locator("img").evaluateAll(images=>images.filter(image=>!image.complete||!image.naturalWidth).map(image=>image.currentSrc));
    assert.deepEqual(broken,[]);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
    assert.equal(overflow,false);
    const bounds=await page.locator("h1,h2,h3,p,button,input,select,.header a,.footer a").evaluateAll(elements=>elements.filter(el=>{
      if(!el.checkVisibility()||el.closest("[inert]"))return false;
      const r=el.getBoundingClientRect(); return r.width>0 && (r.left < -2 || r.right > innerWidth+2);
    }).map(el=>({tag:el.tagName,text:el.textContent?.slice(0,70)})));
    assert.deepEqual(bounds,[]);
    await page.screenshot({path:`${dir}/${locale}-${width}-full.png`,fullPage:true,caret:"initial"});
    await page.screenshot({path:`${dir}/${locale}-${width}-hero.png`,caret:"initial"});
    if([1440,768,390].includes(width)) for(const section of sections.slice(1)) {
      await page.locator(section).evaluate(el=>el.scrollIntoView({behavior:"instant",block:"start"}));
      await page.waitForTimeout(150);
      await page.screenshot({path:`${dir}/${locale}-${width}-${section.replace(/[.#]/g,"")}.png`,caret:"initial"});
    }
    const axe=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa","wcag21aa"]).analyze();
    assert.deepEqual(axe.violations.map(issue=>({id:issue.id,nodes:issue.nodes.map(n=>n.target)})),[]);
    assert.deepEqual(errors,[]);
    const result={locale,width,height,overflow,bounds,broken,consoleErrors:errors,axeViolations:axe.violations.length,pageHeight:await page.locator("body").evaluate(e=>e.scrollHeight)};
    results.push(result); console.log(JSON.stringify(result));
    await context.close();
  }
  for(const locale of ["ar","en"]) {
    const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:"reduce"});
    const page=await context.newPage();
    await ready(page,locale);
    assert.equal(await page.locator('.audience-story[data-pinned="true"]').count(),0);
    await page.locator("#strategies").evaluate(e=>e.scrollIntoView({behavior:"instant"}));
    await page.screenshot({path:`${dir}/${locale}-390-reduced-motion.png`,caret:"initial"});
    await page.locator(".menu-trigger").click();
    await page.screenshot({path:`${dir}/${locale}-390-drawer.png`,caret:"initial"});
    await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(()=>Boolean(document.activeElement?.closest("dialog"))),true);
    await page.keyboard.press("Escape");
    await page.locator(".faq-item").nth(2).locator("button").click();
    await page.screenshot({path:`${dir}/${locale}-390-faq.png`,caret:"initial"});
    await page.locator('.form-actions [type="submit"]').click();
    assert.equal(await page.locator('[name="name"]').getAttribute("aria-invalid"),"true");
    await page.screenshot({path:`${dir}/${locale}-390-validation.png`,caret:"initial"});
    await page.locator(".intro-proof button").click();
    await page.locator(".screenshot-tools button").click();
    await page.screenshot({path:`${dir}/${locale}-390-original.png`,caret:"initial"});
    await page.keyboard.press("Escape");
    await page.setViewportSize({width:720,height:500});
    await page.goto(base+(locale==="en"?"/en":"/"));
    await page.screenshot({path:`${dir}/${locale}-200-percent-reflow.png`,caret:"initial"});
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    await context.close();
  }
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage();
  for(const locale of ["ar","en"]) for(const hash of ["strategy-journey","strategy-money","strategy-roles","strategy-retention","strategy-branches","screen-overview","screen-bookings","screen-car-status","screen-finance","screen-team","screen-inventory","screen-loyalty","setup-step-1","setup-step-5"]) {
    await page.goto(base+(locale==="en"?"/en":"/")+`#${hash}`,{waitUntil:"networkidle"});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(850);
    await page.screenshot({path:`${dir}/${locale}-1440-${hash}.png`,caret:"initial"});
  }
  const routeStatuses={};
  for(const route of ["/design","/design/motion","/api/test-video"]) { const response=await page.request.get(base+route); routeStatuses[route]=response.status(); assert.equal(response.status(),404); }
  assert.equal((await page.request.get(base+"/robots.txt")).status(),200);
  await fs.writeFile(`${dir}/results.json`,JSON.stringify({base,engine:"Chromium",matrix:results,productionRoutes:routeStatuses},null,2));
  console.log("Browser matrix and production route checks passed.");
} finally { await browser.close(); }
