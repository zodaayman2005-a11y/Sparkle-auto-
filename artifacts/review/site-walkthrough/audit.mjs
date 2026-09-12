import {chromium,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
const root='artifacts/review/site-walkthrough';fs.mkdirSync(root+'/screenshots',{recursive:true});
const base='https://sparkle-auto-landing-1bzl026dy-zodaayman2005-3362s-projects.vercel.app';
const b=await chromium.launch();const report={url:base,date:new Date().toISOString(),browser:b.version(),matrix:[],flows:[],axe:[]};
for(const lang of ['ar','en']){
 const ctx=await b.newContext();const p=await ctx.newPage();p.setDefaultTimeout(12000);const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(base+(lang==='en'?'/en':'/'),{waitUntil:'networkidle'});
 for(const width of [1440,1280,1024,768,430,390,360,320]){
  await p.setViewportSize({width,height:900});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(180);
  const data=await p.evaluate(()=>({lang:document.documentElement.lang,dir:document.documentElement.dir,overflow:document.documentElement.scrollWidth>innerWidth,pageHeight:document.documentElement.scrollHeight,h1Height:document.querySelector('h1').getBoundingClientRect().height,missingProof:document.querySelectorAll('[data-proof-status=missing]').length,brokenImages:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),badAnchors:[...document.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h.length>1&&!document.getElementById(h.slice(1)))}));
  report.matrix.push({lang,width,...data});
  if([1440,768,390,320].includes(width)){await p.evaluate(()=>window.scrollTo(0,0));await p.screenshot({path:`${root}/screenshots/${lang}-${width}-full.png`,fullPage:true});}
  if([1440,390].includes(width)){
   for(const sel of ['.hero','#problem','#definition','#audience','#strategies','#strategy-money','#showcase','#screen-finance','#journey','#setup','#subscription','#pricing','#faq','#review','.final-section']){
    const el=p.locator(sel).first();if(!await el.count())continue;await el.evaluate(e=>window.scrollTo({top:Math.max(0,e.getBoundingClientRect().top+scrollY-100),behavior:'instant'}));await p.waitForTimeout(200);await p.screenshot({path:`${root}/screenshots/${lang}-${width}-${sel.replace(/[.#]/g,'')}.png`});
   }
  }
 }
 for(const width of [1440,390]){await p.setViewportSize({width,height:900});await p.evaluate(()=>window.scrollTo(0,0));const a=await new AxeBuilder({page:p}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();report.axe.push({lang,width,violations:a.violations.map(v=>({id:v.id,impact:v.impact,targets:v.nodes.map(n=>n.target)}))});}
 const flows=[];async function check(name,fn){try{await fn();flows.push({name,pass:true});}catch(e){flows.push({name,pass:false,error:e.message});}}
 await check('menu Escape focus',async()=>{const menu=p.getByRole('button',{name:lang==='ar'?'افتح القائمة':'Open menu'});await menu.click();await expect(p.getByRole('dialog')).toBeVisible();await p.screenshot({path:`${root}/screenshots/${lang}-menu.png`});await p.keyboard.press('Tab');if(!await p.evaluate(()=>!!document.activeElement.closest('dialog')))throw Error('focus outside');await p.keyboard.press('Escape');await expect(menu).toBeFocused();});
 await check('FAQ keyboard',async()=>{const q=p.locator('.faq-item button').nth(2);await q.focus();await p.keyboard.press('Enter');await expect(q).toHaveAttribute('aria-expanded','true');await p.screenshot({path:`${root}/screenshots/${lang}-faq-open.png`});await p.keyboard.press('Enter');await expect(q).toHaveAttribute('aria-expanded','false');});
 await check('pricing yearly/monthly',async()=>{await p.getByRole('button',{name:lang==='ar'?'سنوي':'Yearly',exact:true}).click();await expect(p.locator('.price-card .price strong').first()).toHaveText('12,900');await p.getByRole('button',{name:lang==='ar'?'شهري':'Monthly',exact:true}).click();await expect(p.locator('.price-card .price strong').first()).toHaveText('1,290');});
 await check('enlarge + Escape',async()=>{const trigger=p.getByRole('button',{name:lang==='ar'?'كبّر الشاشة':'Enlarge screenshot'}).first();await trigger.click();await expect(p.getByRole('dialog')).toBeVisible();await p.screenshot({path:`${root}/screenshots/${lang}-enlarge.png`});await p.keyboard.press('Escape');await expect(trigger).toBeFocused();});
 await check('form validation and intercepted failure',async()=>{await p.locator('.form-actions button[type=submit]').click();await expect(p.locator('[name=name]')).toHaveAttribute('aria-invalid','true');for(const [k,v]of Object.entries({name:'TEST PREVIEW',phone:'01012345678',business:'NO SEND',area:'Cairo'}))await p.locator(`[name=${k}]`).fill(v);await p.locator('.form-actions button[type=submit]').click();for(const[k,v]of Object.entries({branches:'2',cars:'40',role:'Owner',current:'Notebook',time:'Evening'}))await p.locator(`[name=${k}]`).fill(v);await p.locator('[name=problem]').selectOption('0');await p.route('**/api/operations-review',r=>r.fulfill({status:503,contentType:'application/json',body:JSON.stringify({code:'not_configured'})}));await p.locator('.form-actions button[type=submit]').click();await expect(p.locator('.form-error')).toBeVisible();await expect(p.locator('.success-state')).toHaveCount(0);await expect(p.locator('[name=branches]')).toHaveValue('2');await p.screenshot({path:`${root}/screenshots/${lang}-form-error.png`});});
 await check('fast scroll and reduced motion',async()=>{await p.setViewportSize({width:1440,height:1000});for(const id of ['strategy-branches','strategy-journey','strategy-roles']){await p.locator('#'+id).evaluate(e=>e.scrollIntoView({behavior:'instant'}));await expect(p.locator(`.chapter-nav a[href="#${id}"]`)).toHaveAttribute('aria-current','step');}await p.emulateMedia({reducedMotion:'reduce'});await expect(p.locator('.story-sticky')).toHaveCount(0);await expect(p.locator('.story-chapter .inline-proof')).toHaveCount(5);await p.screenshot({path:`${root}/screenshots/${lang}-reduced.png`});});
 report.flows.push({lang,flows,errors});await ctx.close();console.log(lang,JSON.stringify(flows));
}await b.close();fs.writeFileSync(root+'/results.json',JSON.stringify(report,null,2));console.log('DONE');


