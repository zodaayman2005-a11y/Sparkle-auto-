import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const origin = process.env.QA_URL || "http://127.0.0.1:3100";
const heroes = JSON.parse(await readFile("src/content/hero-media.json", "utf8"));
for (const [locale, prefix] of [["ar", ""], ["en", "/en"]]) {
  const html = await (await fetch(`${origin}${prefix || "/"}`)).text();
  const image = html.match(/<img[^>]*class="hero-backdrop"[^>]*>/)?.[0];
  assert.ok(image?.includes("srcSet=") || image?.includes("srcset="), "Responsive hero candidates");
  assert.ok(image.includes(heroes[locale].base) && !image.includes("-original.png"), "Use hero delivery files");
  assert.ok(html.includes("/delivery/brand/logo-144.webp"), "Use small logo");
  for (const size of [1280, 2560, 3840]) {
    const response = await fetch(`${origin}${heroes[locale].base}-${size}.webp`);
    assert.equal(response.status, 200);
    assert.ok((await response.arrayBuffer()).byteLength < 2_000_000);
    assert.match(response.headers.get("cache-control"), /immutable/);
  }
  const film = await (await fetch(`${origin}${prefix}/film`)).text();
  const video = film.match(/<video[\s\S]*?<\/video>/)?.[0];
  assert.ok(video?.includes('preload="none"') && !video.includes(".mp4"), "Video source deferred until explicit input");
  assert.ok(video.includes("sparkle-film-poster.jpg"), "Original poster quality");
}
for (const file of ["sparkle-auto-film.mp4"]) {
  const response = await fetch(`${origin}/media/${file}`, { headers: { Range: "bytes=0-65535" } });
  assert.equal(response.status, 206);
  assert.equal((await response.arrayBuffer()).byteLength, 65536);
  assert.match(response.headers.get("content-range"), /^bytes 0-65535\//);
}
console.log("PASS: bilingual responsive hero delivery, caching, deferred video and playback byte ranges.");
