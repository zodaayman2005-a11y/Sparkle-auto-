import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch();
const all=[];
for (const locale of ['ar','en']) {
 const context=await browser.newContext({viewport:{width:390,height:844}});
 const page=await context.newPage();
 await page.addInitScript(()=>{
  window.__anchorLog=[];
  const record=(event)=>window.__anchorLog.push({event,time:Math.round(performance.now()),y:scrollY,body:document.body?.scrollHeight,target:document.getElementById('fit-case-8')?.getBoundingClientRect().top});
  for(const event of ['DOMContentLoaded','load','pageshow','sparkle:layout','hashchange','scroll']) addEventListener(event,()=>record(event));
  document.fonts.addEventListener('loadingdone',()=>record('fonts-loadingdone'));
  const native=Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView=function(...args){record('scrollIntoView:'+this.id);return native.apply(this,args);};
 });
 await page.goto('http://127.0.0.1:3100'+(locale==='en'?'/en':'/')+'#fit-case-8',{waitUntil:'networkidle'});
 await page.waitForTimeout(2000);
 all.push({locale,events:await page.evaluate(()=>window.__anchorLog),final:await page.locator('#fit-case-8').boundingBox()});
 await context.close();
}
await fs.writeFile('artifacts/release-hardening/anchor-probe.json',JSON.stringify(all,null,2));
console.log(JSON.stringify(all,null,2));
await browser.close();
