import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const checkOnly = process.argv.includes("--check");
const entries = [];
async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes:true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith(".webp")) entries.push(file);
  }
}
await walk("public/art");
let total = 0;
for (const source of entries) {
  const metadata = await sharp(source).metadata();
  for (const width of [320,640,960,1280]) {
    const relative = source.replaceAll("\\", "/").replace(/^public\//, "").replace(/\.webp$/, `-${width}.webp`);
    const destination = path.join("public/delivery", relative);
    if (!checkOnly) {
      await fs.mkdir(path.dirname(destination), { recursive:true });
      if (width >= metadata.width) await fs.copyFile(source, destination);
      else await sharp(source).resize({ width, withoutEnlargement:true }).webp({ quality:88, effort:5 }).toFile(destination);
    }
    const delivered = await sharp(destination).metadata();
    if (delivered.width !== Math.min(width, metadata.width) || delivered.format !== "webp") throw new Error(`Invalid delivery image: ${destination}`);
    total += (await fs.stat(destination)).size;
  }
}
console.log(`${checkOnly ? "Verified" : "Prepared"} ${entries.length * 4} static image candidates: ${total} bytes on disk. One candidate per image is selected by the browser.`);
