import assert from "node:assert/strict";

const origin = process.env.QA_URL || "http://127.0.0.1:3100";
const pages = ["", "/platform", "/film", "/subscription", "/faq", "/contact"];
let count = 0;
for (const locale of ["ar", "en"]) {
  for (const page of pages) {
    const route = (locale === "en" ? "/en" : "") + page || "/";
    const response = await fetch(origin + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, new RegExp(`<html[^>]+lang="${locale}"`), route);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
    const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
    assert.equal(new URL(canonical).pathname, route);
    assert.ok(!html.includes('class="price-card'), route);
    assert.ok(!html.includes("Management System in Egypt"), route);
    assert.ok(!html.includes("SPARKLE AUTO / ") && !html.includes("سباركل أوتو / "), `${route}: removed page label`);
    if (page === "/subscription") {
      const cards = [...html.matchAll(/<article class="mp-price-option"[^>]*>([\s\S]*?)<\/article>/g)].map(match => match[1].replace(/<!--[\s\S]*?-->/g, ""));
      assert.equal(cards.length, 2, `${route}: two business types`);
      const expected = [
        { amounts: [7500, 350], extras: [3500, 150], installment: 2500, total: 7500 },
        { amounts: [10000, 550], extras: [5000, 250], installment: 3334, total: 10002 },
      ];
      const format = n => n.toLocaleString(locale === "ar" ? "ar-EG" : "en-GB");
      expected.forEach((plan, index) => {
        assert.ok(cards[index].includes(locale === "ar" ? "أول 6 شهور صيانة مجانًا" : "First 6 months of maintenance free"), `${route}: owner-confirmed free maintenance`);
        for (const value of [...plan.amounts, plan.total]) assert.ok(cards[index].includes(`<bdi>${format(value)}</bdi>`), `${route}: amount ${value}`);
        for (const value of plan.extras) assert.ok(cards[index].includes(`<bdi>+${format(value)}</bdi>`), `${route}: extra ${value}`);
        assert.ok(cards[index].includes(`<bdi>3 × ${format(plan.installment)}</bdi>`), `${route}: installments`);
      });
      assert.ok(html.includes('class="mp-payment-toggle" role="group"'), `${route}: payment selector`);
      assert.ok(html.includes(locale === "ar" ? "مش متأكد إن السيستم مناسب؟" : "Not sure the system fits?"), `${route}: restored trial copy`);
    }
    if (page === "/platform") {
      const imageTags = html.match(/<img\b[^>]*class="mp-shot-image"[^>]*>/g) || [];
      assert.equal(imageTags.length, 5, `${route}: five product screenshots`);
      const imageSources = imageTags.map(tag => /src="([^"]+)"/.exec(tag)?.[1]);
      assert.equal(new Set(imageSources).size, 5, `${route}: five distinct product screens`);
      assert.ok(imageSources.every(src => src?.startsWith(`/product/2026-10-31/${locale === "en" ? "en/" : ""}`) && (locale === "en" || !src.includes("/en/"))), `${route}: every screenshot matches the locale`);
      for (const image of ["bookings", "workforce", "finance", "customers", "whatsapp"]) {
        assert.ok(imageSources.includes(`/product/2026-10-31/${locale === "en" ? "en/" : ""}${image}.webp`), `${route}: ${image} in ${locale}`);
      }
      assert.ok(html.includes(locale === "en" ? "Platform screenshot · English interface" : "لقطة من المنصة · واجهة عربية"), route);
    }
    count++;
  }
}
for (const asset of ["/brand/logo.jpg", "/product/bookings.jpg", "/product/team.jpg", "/product/finance.jpg", "/product/loyalty.jpg", "/media/sparkle-film-poster.jpg", "/hero/hero-ar-original.png", "/hero/hero-en-original.png"]) {
  assert.equal((await fetch(origin + asset, { method: "HEAD" })).status, 200, asset);
  count++;
}
for (const image of ["bookings", "workforce", "finance", "customers", "whatsapp"]) {
  assert.equal((await fetch(`${origin}/product/2026-10-31/${image}.png`, { method: "HEAD" })).status, 200, image);
  count++;
}
for (const image of ["bookings", "workforce", "finance", "customers", "whatsapp"]) {
  assert.equal((await fetch(`${origin}/product/2026-10-31/en/${image}.png`, { method: "HEAD" })).status, 200, image);
  count++;
}
const range = await fetch(origin + "/media/sparkle-auto-film.mp4", { headers: { Range: "bytes=0-31" } });
assert.equal(range.status, 206);
assert.equal((await range.arrayBuffer()).byteLength, 32);
count++;
assert.equal((await fetch(origin + "/unknown-page")).status, 404);
count++;
const api = await fetch(origin + "/api/operations-review", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
assert.equal(api.status, 400);
count++;
console.log(`PASS: ${count} route, metadata, asset, video-range and API-boundary checks.`);
