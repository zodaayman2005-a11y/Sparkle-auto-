import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
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
for (const locale of ["ar", "en"]) {
  const manifest = JSON.parse(await readFile("src/content/hero-media.json", "utf8"))[locale];
  for (const width of manifest.sizes) {
    assert.ok((await stat(`public${manifest.base}-${width}.webp`)).size < (width <= 960 ? 100_000 : 400_000), "Responsive hero budget");
  }
}
assert.ok((await stat("public/delivery/brand/logo-144.webp")).size < 20_000, "Logo delivery budget");
assert.ok((await stat("public/media/sparkle-film-poster-v1.webp")).size < 200_000, "Poster delivery budget");
for (const image of images.filter(image => image.endsWith(".png"))) {
  const source = `public/${image}`;
  const delivery = source.replace(/\.png$/, ".webp");
  assert.ok((await stat(delivery)).size < 100_000, "Screenshot delivery budget");
  assert.ok((await sharp(source).ensureAlpha().raw().toBuffer()).equals(await sharp(delivery).ensureAlpha().raw().toBuffer()), `Screenshot pixels: ${image}`);
}
for (const [resolution, budget] of [[720, 48_000_000], [480, 28_000_000]]) {
  const bytes = await readFile(`public/media/sparkle-film-${resolution}-v1.mp4`);
  assert.ok(bytes.length > 0 && bytes.length < budget, `${resolution}p film delivery budget`);
  // Parse top-level boxes; metadata must precede media for progressive playback.
  const boxes = [];
  for (let offset = 0; offset + 8 <= bytes.length;) {
    const size = bytes.readUInt32BE(offset);
    assert.ok(size >= 8 && offset + size <= bytes.length, "Valid MP4 box");
    boxes.push(bytes.toString("ascii", offset + 4, offset + 8));
    offset += size;
  }
  assert.ok(boxes.indexOf("moov") >= 0 && boxes.indexOf("moov") < boxes.indexOf("mdat"), "Fast-start MP4");
}
console.log(`PASS: ${images.length} images, 2 original hero scenes, 7 fonts and the supplied film (${filmBytes} bytes).`);
