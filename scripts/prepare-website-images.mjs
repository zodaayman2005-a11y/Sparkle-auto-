import fs from "node:fs/promises";
import sharp from "sharp";

// Derivatives only: owner-supplied screenshots and poster remain unchanged.
for (const language of ["", "en/"]) {
  for (const name of ["bookings", "workforce", "finance", "customers", "whatsapp"]) {
    const base = `public/product/2026-10-31/${language}${name}`;
    await sharp(`${base}.png`).webp({ lossless: true, effort: 6 }).toFile(`${base}.webp`);
    const [original, delivery] = await Promise.all([
      sharp(`${base}.png`).ensureAlpha().raw().toBuffer(),
      sharp(`${base}.webp`).ensureAlpha().raw().toBuffer(),
    ]);
    if (!original.equals(delivery)) throw new Error(`Screenshot pixels changed: ${base}`);
  }
}
await sharp("public/media/sparkle-film-poster.jpg").webp({ quality: 85, effort: 6 }).toFile("public/media/sparkle-film-poster-v1.webp");
console.log(`Prepared 10 pixel-identical screenshots and a ${(await fs.stat("public/media/sparkle-film-poster-v1.webp")).size}-byte film poster.`);
