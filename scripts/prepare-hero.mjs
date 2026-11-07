import fs from "node:fs/promises";
import sharp from "sharp";
import { createHash } from "node:crypto";

const checkOnly = process.argv.includes("--check");
const manifest = {};
for (const locale of ["ar", "en"]) {
  const bytes = await fs.readFile(`public/hero/hero-${locale}-original.png`);
  const hash = createHash("sha256").update(bytes).digest("hex");
  const sizes = [1280, 1920, 2560, 3840];
  const base = `/delivery/hero/${locale}-${hash.slice(0, 12)}-hq-v2`;
  await fs.mkdir("public/delivery/hero", { recursive: true });
  const variants = [];
  for (const width of sizes) {
    const file = `public${base}-${width}.webp`;
    if (!checkOnly) await sharp(bytes).resize({ width }).webp({ quality: 98, effort: 6, smartSubsample: true }).toFile(file);
    const metadata = await sharp(file).metadata();
    if (metadata.width !== width || metadata.format !== "webp") throw new Error(`Invalid hero: ${file}`);
    const size = (await fs.stat(file)).size;
    if (size > 2_000_000) throw new Error(`High-quality hero budget exceeded: ${file}`);
    variants.push({ width, bytes: size });
  }
  const preview = await sharp(bytes).resize(48).webp({ quality: 55 }).toBuffer();
  manifest[locale] = { base, sizes, sourceSha256: hash, sourceBytes: bytes.length, variants, blurDataURL: `data:image/webp;base64,${preview.toString("base64")}` };
  console.log(`${locale} high-quality hero: ${JSON.stringify(variants)}`);
}
if (checkOnly) {
  const committed = JSON.parse(await fs.readFile("src/content/hero-media.json", "utf8"));
  if (JSON.stringify(committed) !== JSON.stringify(manifest)) throw new Error("Hero manifest differs. Run node scripts/prepare-hero.mjs.");
} else await fs.writeFile("src/content/hero-media.json", JSON.stringify(manifest, null, 2) + "\n");
