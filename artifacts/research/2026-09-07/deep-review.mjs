import {chromium} from '@playwright/test';
import fs from 'node:fs';
const root='artifacts/research/2026-09-07', results=[];
const browser=await chromium.launch();
for(const [id,url] of [['swiss-live','https://swissbrut.framer.website/'],['cofounder-live','https://cofounder.framer.ai/'],['aceternity-demo','https://ui.aceternity.com/components/tabs'],['resend-demo','https://resend.com/']]) {
 const p=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'}); const r={id,url};
 try {const response=await p.goto(url,{waitUntil:'domcontentloaded',timeout:30000});r.status=response.status();await p.waitForTimeout(4500);
 if(id==='aceternity-demo'){const button=p.getByRole('button',{name:'Services',exact:true});await button.scrollIntoViewIfNeeded();await button.click();await p.waitForTimeout(600);r.action='Click Services';r.result=await p.getByText('Services tab',{exact:true}).count();r.visibleText=(await p.locator('main').innerText()).slice(-1000);}
 if(id==='resend-demo'){const tab=p.getByRole('tab',{name:'Python',exact:true}).first();await tab.scrollIntoViewIfNeeded();await tab.click();await p.waitForTimeout(600);r.action='Click Python language tab';r.selected=await tab.getAttribute('aria-selected');r.pythonPanelVisible=await p.getByRole('tabpanel').filter({hasText:'import resend'}).count();}
 await p.screenshot({path:`${root}/screenshots/${id}-desktop.png`});
 await p.setViewportSize({width:390,height:844});await p.evaluate(()=>window.scrollTo(0,0));await p.waitForTimeout(1000);await p.screenshot({path:`${root}/screenshots/${id}-mobile.png`});r.mobileOverflow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);r.title=await p.title();
 }catch(e){r.error=e.message;}results.push(r);console.log(JSON.stringify(r));await p.close();
}await browser.close();fs.writeFileSync(`${root}/deep-evidence.json`,JSON.stringify(results,null,2));
