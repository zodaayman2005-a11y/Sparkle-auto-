import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

// Technical resizes of the official mark: no redrawing or palette changes.
const source = 'public/brand/logo.jpg';
await sharp(source).resize(192, 192).png().toFile('src/app/icon.png');
await sharp(source).resize(180, 180).png().toFile('src/app/apple-icon.png');
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(source).resize(size, size).ensureAlpha().png().toBuffer()));
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
