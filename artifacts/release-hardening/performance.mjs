import { chromium } from "playwright";
import fs from "node:fs/promises";
const base=process.env.QA_URL||"http://127.0.0.1:3100";
const browser=await chromium.launch();
const results=[];
try {
  for(const locale of ["ar","en"]) for(let run=1;run<=3;run++) {
    const context=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:1});
    const page=await context.newPage();
    const cdp=await context.newCDPSession(page);
    await cdp.send("Network.enable");
    await cdp.send("Network.setCacheDisabled",{cacheDisabled:true});
    await cdp.send("Network.emulateNetworkConditions",{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:75000});
    await cdp.send("Emulation.setCPUThrottlingRate",{rate:4});
    await page.addInitScript(()=>{
      window.__lab={lcp:0,shifts:[],events:[]};
      new PerformanceObserver(list=>{for(const entry of list.getEntries())window.__lab.lcp=entry.startTime;}).observe({type:"largest-contentful-paint",buffered:true});
      new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)window.__lab.shifts.push({time:entry.startTime,value:entry.value});}).observe({type:"layout-shift",buffered:true});
      new PerformanceObserver(list=>{for(const entry of list.getEntries())if(entry.interactionId)window.__lab.events.push(entry.duration);}).observe({type:"event",buffered:true,durationThreshold:16});
    });
    await page.goto(base+(locale==="en"?"/en":"/"),{waitUntil:"networkidle"});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(1000);
    await page.locator(".menu-trigger").click();
    await page.keyboard.press("Escape");
    await page.locator(".faq-item").nth(2).locator("button").click();
    await page.waitForTimeout(250);
    const measured=await page.evaluate(()=>{
      const lab=window.__lab;
      let largest=0,sum=0,start=0,previous=0;
      for(const shift of lab.shifts){if(shift.time-previous>1000||shift.time-start>5000){sum=0;start=shift.time;}sum+=shift.value;largest=Math.max(largest,sum);previous=shift.time;}
      const resources=performance.getEntriesByType("resource");
      const navigation=performance.getEntriesByType("navigation")[0];
      return{lcpMs:Math.round(lab.lcp),cls:Number(largest.toFixed(5)),sampledInteractionMaxMs:lab.events.length?Math.max(...lab.events):null,ttfbMs:Math.round(navigation.responseStart),transferredBytes:resources.reduce((sum,entry)=>sum+entry.transferSize,0)+navigation.transferSize,resourceCount:resources.length};
    });
    results.push({locale,run,...measured});console.log(JSON.stringify(results.at(-1)));
    await context.close();
  }
  await fs.writeFile("artifacts/release-hardening/performance.json",JSON.stringify({base,conditions:"Chromium lab, 390x844 at DPR 1; fresh browser context/cache disabled each run; 150ms latency, 1.6Mbit/s download, 4x CPU slowdown. Event Timing samples are interaction proxies, not field INP. Transfer total includes scripted FAQ navigation lazy loads.",results},null,2));
} finally { await browser.close(); }
