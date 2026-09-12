import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { createHash } from "node:crypto";
const files=[];
async function walk(dir){for(const entry of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())await walk(file);else if(/\.(webp|jpg)$/.test(file))files.push(file);}}
for(const dir of ["public/art","public/product","public/brand","public/delivery"])await walk(dir);
const assets=[];
for(const file of files){const data=await fs.readFile(file);const metadata=await sharp(data).metadata();const source=file.replaceAll("\\","/");assets.push({path:source,classification:source.startsWith("public/product/")?"REAL":source.includes("/delivery/")?"CODE_DELIVERY_VARIANT":"REUSED",state:"integrated",bytes:data.length,sha256:createHash("sha256").update(data).digest("hex"),width:metadata.width,height:metadata.height,alpha:Boolean(metadata.hasAlpha),format:metadata.format});}
await fs.writeFile("artifacts/release-hardening/ASSET-MANIFEST.json",JSON.stringify({date:"2026-09-08",newAiGeneration:0,productSources:"../product-screens/ASSET-MANIFEST.json",originals:"../../assets/brand/",notes:["User supplied all character story scenes and locale hero backgrounds.","Telephone and resolved telephone are reused prior generated assets; see ../visual/GENERATION-LOG.md.","Delivery variants are deterministic resize/encoding, not newly generated artwork.","Unused portrait hero-owner.webp archived as assets/brand/hero-owner-legacy.webp.","No product screenshot pixels changed."],assets},null,2));
console.log(`${assets.length} real/reused/delivery files recorded with dimensions, format and SHA-256.`);
