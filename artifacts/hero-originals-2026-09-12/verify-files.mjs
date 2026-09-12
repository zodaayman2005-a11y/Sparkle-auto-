import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import sharp from 'sharp';

const base = process.argv[2];
const assets = [
  { locale:'en', file:'hero-en-original.png', source:'IMG_4180.PNG', driveId:'1Pw5KwZLzf-V4n3Bm65d88z2F9vxyrYg4', bytes:29647936 },
  { locale:'ar', file:'hero-ar-original.png', source:'IMG_4181.PNG', driveId:'1b2qcHexCeIOAkmw17M2yXF3Bn_f1CC26', bytes:29518984 },
];
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const results = [];
for (const asset of assets) {
  const publicPath = `public/hero/${asset.file}`;
  const original = await fs.readFile(`C:/Users/HP/Downloads/${asset.source}`);
  const delivered = await fs.readFile(publicPath);
  const archived = await fs.readFile(`assets/incoming/${asset.file}`);
  assert.equal(original.length, asset.bytes);
  assert.equal(hash(original), hash(delivered));
  assert.equal(hash(original), hash(archived));
  const metadata = await sharp(delivered).metadata();
  assert.equal(metadata.width, 6688);
  assert.equal(metadata.height, 3764);
  assert.equal(metadata.format, 'png');
  let served;
  if (base) {
    const response = await fetch(`${base}/hero/${asset.file}`);
    assert.equal(response.status, 200);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(hash(bytes), hash(original));
    served = { status:response.status, contentType:response.headers.get('content-type'), bytes:bytes.length, sourceIdentical:true };
  }
  results.push({ ...asset, publicPath, width:metadata.width, height:metadata.height, sha256:hash(delivered), sourceIdentical:true, format:'png', reencoded:false, resized:false, served });
}
const report = { verifiedAt:new Date().toISOString(), base:base || null, userRequestedOriginalDelivery:true, assets:results };
await fs.writeFile(`artifacts/hero-originals-2026-09-12/${base ? (base.includes('127.0.0.1') ? 'local' : 'live') : 'source'}-verification.json`, JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
