"use client";
import type { ImageLoaderProps } from "next/image";
import heroMedia from "@/content/hero-media.json";

/** Static delivery files are reproducible with npm run assets:build. */
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (src === "/hero/hero-ar-original.png" || src === "/hero/hero-en-original.png") {
    const asset = heroMedia[src.includes("-en-") ? "en" : "ar"];
    const size = asset.sizes.find(candidate => candidate >= width) ?? asset.sizes.at(-1);
    return `${asset.base}-${size}.webp`;
  }
  if (!src.startsWith("/art/") || !/\.(webp|jpg)$/.test(src)) return src;
  const size = [320, 640, 960, 1280].find(candidate => candidate >= width) || 1280;
  return `/delivery${src.replace(/\.(webp|jpg)$/, "")}-${size}.webp`;
}
