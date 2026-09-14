import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

// Remove only the white area connected to the canvas edge. This keeps the
// official mark's enclosed white details while giving browser icons a truly
// transparent background.
const source = 'public/brand/logo.jpg';
const { data, info } = await sharp(source).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const pixels = info.width * info.height;
const outside = new Uint8Array(pixels);
const queue = new Uint32Array(pixels);
let head = 0;
let tail = 0;
const canBeBackground = index => {
  const offset = index * 3;
  return Math.min(data[offset], data[offset + 1], data[offset + 2]) >= 205;
};
const enqueue = index => {
  if (!outside[index] && canBeBackground(index)) {
    outside[index] = 1;
    queue[tail++] = index;
  }
};
for (let x = 0; x < info.width; x++) {
  enqueue(x);
  enqueue((info.height - 1) * info.width + x);
}
for (let y = 0; y < info.height; y++) {
  enqueue(y * info.width);
  enqueue(y * info.width + info.width - 1);
}
while (head < tail) {
  const index = queue[head++];
  const x = index % info.width;
  const y = Math.floor(index / info.width);
  if (x > 0) enqueue(index - 1);
  if (x + 1 < info.width) enqueue(index + 1);
  if (y > 0) enqueue(index - info.width);
  if (y + 1 < info.height) enqueue(index + info.width);
}
const rgba = Buffer.alloc(pixels * 4);
for (let index = 0; index < pixels; index++) {
  const sourceOffset = index * 3;
  const targetOffset = index * 4;
  rgba[targetOffset] = data[sourceOffset];
  rgba[targetOffset + 1] = data[sourceOffset + 1];
  rgba[targetOffset + 2] = data[sourceOffset + 2];
  rgba[targetOffset + 3] = outside[index] ? 0 : 255;
}
const transparentMark = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toBuffer();

await sharp(transparentMark)
  .resize({ width: 460, height: 460, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 26, bottom: 26, left: 26, right: 26, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile('src/app/icon.png');
await sharp(transparentMark)
  .resize({ width: 164, height: 164, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({ top: 8, bottom: 8, left: 8, right: 8, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile('src/app/apple-icon.png');
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(transparentMark)
  .resize({ width: Math.round(size * 0.9), height: Math.round(size * 0.9), fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .extend({
    top: Math.floor((size - Math.round(size * 0.9)) / 2),
    bottom: Math.ceil((size - Math.round(size * 0.9)) / 2),
    left: Math.floor((size - Math.round(size * 0.9)) / 2),
    right: Math.ceil((size - Math.round(size * 0.9)) / 2),
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((png, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile('src/app/favicon.ico', Buffer.concat([header, ...images]));
