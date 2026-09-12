import {chromium} from '@playwright/test';
import fs from 'node:fs';
(async()=>{
 const browser=await chromium.launch(); const report={environment:{browser:browser.version(),server:'Next.js production on localhost',physicalDevice:false},routes:[],performance:[]};
 for(const lang of ['ar','en']) for(const width of [1440,390]){
  const ctx=await browser.newContext({viewport:{width,height:900}});const p=await ctx.newPage();
  await p.goto('http://127.0.0.1:3100'+(lang==='en'?'/en':'/'));await p.evaluate(()=>document.fonts.ready);
  for(const [label,selector] of [['hero','.hero'],['problem','#problem'],['strategy','#strategy-money'],['proof','#screen-finance'],['final','.final-section']]){
   if(await p.locator(selector).count()){
    await p.locator(selector).first().evaluate(e=>window.scrollTo({top:Math.max(0,e.getBoundingClientRect().top+scrollY-110),behavior:'instant'}));
    await p.waitForTimeout(400);
    await p.screenshot({path:`artifacts/visual/production-${lang}-${width}-${label}.png`});
   }
  }
  const dead=await p.locator('a[href^="#"]').evaluateAll(a=>a.map(e=>e.getAttribute('href')).filter(h=>h.length>1&&!document.getElementById(h.slice(1))));
  report.routes.push({lang,width,missingAnchorTargets:dead});await ctx.close();
 }
 const ctx=await browser.newContext({viewport:{width:390,height:844}}),p=await ctx.newPage(),cdp=await ctx.newCDPSession(p);
 await cdp.send('Network.enable');await cdp.send('Network.setCacheDisabled',{cacheDisabled:true});await cdp.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:93750});await cdp.send('Emulation.setCPUThrottlingRate',{rate:4});
 await p.addInitScript(()=>{window.__perf={lcp:0,shiftSum:0};new PerformanceObserver(l=>l.getEntries().forEach(e=>window.__perf.lcp=e.startTime)).observe({type:'largest-contentful-paint',buffered:true});new PerformanceObserver(l=>l.getEntries().forEach(e=>{if(!e.hadRecentInput)window.__perf.shiftSum+=e.value})).observe({type:'layout-shift',buffered:true});});
 await p.goto('http://127.0.0.1:3100/');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(2000);
 report.performance.push({conditions:'single cold-cache local sample, 390x844, CPU4x, RTT150ms, download1.6Mbps; not field CWV',...await p.evaluate(()=>({...window.__perf,resources:performance.getEntriesByType('resource').map(r=>({name:r.name.split('/').pop(),bytes:r.transferSize,type:r.initiatorType})),videoElements:document.querySelectorAll('video').length}))});
 report.productionFixtureStatus={motion:(await p.request.get('http://127.0.0.1:3100/design/motion')).status(),video:(await p.request.get('http://127.0.0.1:3100/api/test-video')).status()};
 await ctx.close();await browser.close();fs.writeFileSync('artifacts/visual/production-audit.json',JSON.stringify(report,null,2));console.log(JSON.stringify({routes:report.routes,performance:report.performance.map(({resources,...r})=>({...r,resourceBytes:resources.reduce((s,r)=>s+r.bytes,0),videoBytes:resources.filter(r=>r.type==='video').reduce((s,r)=>s+r.bytes,0)})),fixtures:report.productionFixtureStatus},null,2));
})();
