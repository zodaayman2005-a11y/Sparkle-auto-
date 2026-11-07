import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

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
      if (width >= metadata.width && metadata.format === "webp" && !source.includes("cutouts")) await fs.copyFile(source, destination);
      else await sharp(source).resize({ width, withoutEnlargement:true }).webp({ quality: metadata.format === "webp" ? 88 : 92, effort:5 }).toFile(destination);
    }
    const delivered = await sharp(destination).metadata();
    if (delivered.width !== Math.min(width, metadata.width) || delivered.format !== "webp" || Boolean(delivered.hasAlpha) !== Boolean(metadata.hasAlpha)) throw new Error(`Invalid delivery image: ${destination}`);
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

// Shared high-quality hero delivery pipeline.
await import("./prepare-hero.mjs");
