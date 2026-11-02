import assert from "node:assert/strict";
import { access, stat } from "node:fs/promises";
import sharp from "sharp";

const images = ["brand/logo.jpg", "brand/share-cover-v1.jpg", "product/bookings.jpg", "product/team.jpg", "product/finance.jpg", "product/loyalty.jpg", "media/sparkle-film-poster.jpg"];
images.push(...["bookings", "workforce", "finance", "customers", "whatsapp"].map(name => `product/2026-10-31/${name}.png`));
images.push(...["bookings", "workforce", "finance", "customers", "whatsapp"].map(name => `product/2026-10-31/en/${name}.png`));
for (const image of images) {
  const file = `public/${image}`;
  const metadata = await sharp(file).metadata();
  assert.ok(metadata.width > 0 && metadata.height > 0, image);
  assert.ok((await stat(file)).size < 5_000_000, `Image budget: ${image}`);
}
for (const weight of [400, 500, 700, 800]) await access(`public/fonts/alexandria-arabic-${weight}-normal.woff2`);
for (const weight of [400, 500, 700]) await access(`public/fonts/space-grotesk-latin-${weight}-normal.woff2`);
// Preserve the previously supplied full-quality locale-specific hero originals.
for (const locale of ["ar", "en"]) {
  const hero = await sharp(`public/hero/hero-${locale}-original.png`).metadata();
  assert.equal(hero.format, "png");
  assert.equal(hero.width, 6688);
  assert.equal(hero.height, 3764);
}
const filmBytes = (await stat("public/media/sparkle-auto-film.mp4")).size;
assert.ok(filmBytes > 0 && filmBytes < 80_000_000, "Film must meet the selected 80 MB delivery budget.");
console.log(`PASS: ${images.length} images, 2 original hero scenes, 7 fonts and the supplied film (${filmBytes} bytes).`);
