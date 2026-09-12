"use client";
import type { ImageLoaderProps } from "next/image";

/** Static delivery files are reproducible with npm run assets:build. */
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!src.startsWith("/art/") || !src.endsWith(".webp")) return src;
  const size = [320, 640, 960, 1280].find(candidate => candidate >= width) || 1280;
  return `/delivery${src.slice(0, -5)}-${size}.webp`;
}
