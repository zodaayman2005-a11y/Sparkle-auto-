import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: { loader:"custom", loaderFile:"./src/lib/image-loader.ts", deviceSizes:[320,640,960,1280], imageSizes:[48] },
};
export default config;
