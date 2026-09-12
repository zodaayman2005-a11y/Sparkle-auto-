import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { createHash } from "node:crypto";

const checkOnly = process.argv.includes("--check");
const entries = [];
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes:true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (/\.(webp|jpg)$/.test(entry.name)) entries.push(file);
  }
}
await walk("public/art");
let total = 0;
for (const source of entries) {
  const metadata = await sharp(source).metadata();
  for (const width of [320,640,960,1280]) {
    const relative = source.replaceAll("\\", "/").replace(/^public\//, "").replace(/\.(webp|jpg)$/, `-${width}.webp`);
    const destination = path.join("public/delivery", relative);
    if (!checkOnly) {
      await fs.mkdir(path.dirname(destination), { recursive:true });
      if (width >= metadata.width && metadata.format === "webp") await fs.copyFile(source, destination);
      else await sharp(source).resize({ width, withoutEnlargement:true }).webp({ quality: metadata.format === "webp" ? 88 : 92, effort:5 }).toFile(destination);
    }
    const delivered = await sharp(destination).metadata();
    if (delivered.width !== Math.min(width, metadata.width) || delivered.format !== "webp") throw new Error(`Invalid delivery image: ${destination}`);
    total += (await fs.stat(destination)).size;
  }
}
console.log(`${checkOnly ? "Verified" : "Prepared"} ${entries.length * 4} static image candidates: ${total} bytes on disk. One candidate per image is selected by the browser.`);

// 48 CSS px brand mark at 3x density; preserve the supplied source and its proportions.
const logoFile = "public/delivery/brand/logo-144.webp";
if (!checkOnly) {
  await fs.mkdir("public/delivery/brand", { recursive: true });
  await sharp("public/brand/logo.jpg").resize({ width: 144 }).webp({ lossless: true, effort: 6 }).toFile(logoFile);
}
const logo = await sharp(logoFile).metadata();
if (logo.width !== 144 || logo.format !== "webp" || (await fs.stat(logoFile)).size > 30000) throw new Error("Invalid brand delivery image");

// Original 29 MB PNGs remain untouched. Content-hashed delivery files can be cached safely.
const heroManifest = {};
for (const locale of ["ar", "en"]) {
  const source = `public/hero/hero-${locale}-original.png`;
  const bytes = await fs.readFile(source);
  const hash = createHash("sha256").update(bytes).digest("hex");
  const sizes = [640, 960, 1280, 1920, 2560];
  const base = `/delivery/hero/${locale}-${hash.slice(0, 12)}`;
  if (!checkOnly) await fs.mkdir("public/delivery/hero", { recursive: true });
  const variants = [];
  for (const width of sizes) {
    const file = `public${base}-${width}.webp`;
    if (!checkOnly) await sharp(bytes).resize({ width, withoutEnlargement: true }).webp({ quality: 92, effort: 6, smartSubsample: true }).toFile(file);
    const metadata = await sharp(file).metadata();
    if (metadata.width !== width || metadata.format !== "webp") throw new Error(`Invalid hero delivery image: ${file}`);
    const deliveredBytes = (await fs.stat(file)).size;
    if (deliveredBytes > (width <= 960 ? 100000 : 400000)) throw new Error(`Hero transfer budget exceeded: ${file}`);
    variants.push({ width, bytes: deliveredBytes });
  }
  const preview = await sharp(bytes).resize(48).webp({ quality: 55 }).toBuffer();
  heroManifest[locale] = { base, sizes, sourceSha256: hash, sourceBytes: bytes.length, variants, blurDataURL: `data:image/webp;base64,${preview.toString("base64")}` };
  console.log(`${locale} hero: ${bytes.length} original bytes -> ${JSON.stringify(variants)}`);
}
const manifestPath = "src/content/hero-media.json";
if (checkOnly) {
  const committed = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  if (JSON.stringify(committed) !== JSON.stringify(heroManifest)) throw new Error("Hero manifest differs. Run npm run assets:build.");
} else await fs.writeFile(manifestPath, JSON.stringify(heroManifest, null, 2) + "\n");
