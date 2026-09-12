import { chromium } from '@playwright/test';
import fs from 'node:fs';
const root='artifacts/research/2026-09-07';
const targets=[["aceternity-tabs","https://ui.aceternity.com/components/tabs"],["aceternity-sticky","https://ui.aceternity.com/components/sticky-scroll-reveal"],["magic-video","https://magicui.design/docs/components/hero-video-dialog"],["feature197","https://www.shadcnblocks.com/block/feature197"],["swissbrut","https://www.framer.com/marketplace/templates/swissbrut/"],["cofounder","https://www.framer.com/marketplace/templates/cofounder/"]];
const b=await chromium.launch();const results=[];
for(let i=0;i<targets.length;i+=2)await Promise.all(targets.slice(i,i+2).map(async([id,url])=>{
 const p=await b.newPage({viewport:{width:1440,height:1000}});const entry={id,url};
 try {const r=await p.goto(url,{waitUntil:'domcontentloaded',timeout:22000});entry.status=r.status();await p.waitForTimeout(1800);await Promise.race([p.evaluate(()=>document.fonts.ready),new Promise(r=>setTimeout(r,3000))]);entry.finalUrl=p.url();entry.title=await p.title();entry.text=(await p.locator('body').innerText()).slice(0,22000);entry.links=await p.locator('a[href]').evaluateAll(es=>es.map(e=>({text:e.textContent.trim().slice(0,70),url:e.href})).filter(e=>e.text).slice(0,120));entry.controls=await p.locator('button,[role=tab]').evaluateAll(es=>es.map(e=>({role:e.getAttribute('role'),text:e.textContent.trim().slice(0,80),label:e.getAttribute('aria-label')})).slice(0,50));
 await p.screenshot({path:`${root}/screenshots/${id}-top.png`});await p.evaluate(()=>window.scrollTo(0,1100));await p.waitForTimeout(650);await p.screenshot({path:`${root}/screenshots/${id}-middle.png`});entry.captured=true;
 }catch(e){entry.error=e.message;}results.push(entry);console.log(id,entry.status,entry.title||entry.error);await p.close();
}));await b.close();fs.writeFileSync(`${root}/component-evidence.json`,JSON.stringify(results,null,2));
