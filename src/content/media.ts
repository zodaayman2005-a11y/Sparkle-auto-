import { screens, strategies, type Pair } from "./site";
export type ProofAsset = {
  id: string;
  status: "missing" | "ready" | "disabled";
  src?: string;
  title: Pair;
  language?: "ar" | "en";
  width: number;
  height: number;
};
export const proofAssets: Record<string, ProofAsset> = Object.fromEntries([
  ...screens.map((s) => [
    s.id,
    { id: s.id, title: s.title, status: "ready", src: `/product/${s.id.replace("screen-", "")}.jpg`, language: "en", width: 1280, height: 837 },
  ]),
  [
    "booking-phone",
    {
      id: "booking-phone",
      title: { ar: "حجز العميل", en: "Customer booking" },
      status: "missing",
      width: 900,
      height: 2200,
    },
  ],
]);
export type VideoAsset = {
  status: "missing" | "ready" | "disabled";
  provider?: "native" | "drive";
  src?: string;
  originalUrl?: string;
  poster?: string;
  captions?: { src: string; lang: string; label: string }[];
};
export const videoAssets: Record<string, VideoAsset> = Object.fromEntries(
  [...strategies, ...screens].map((s) => [s.id, { status: "missing" }]),
);
// Supplied by the project owner. Open the provider page without an embedded keyboard trap.
export const strategyOverview = {
  status: "ready",
  provider: "drive",
  originalUrl: "https://drive.google.com/file/d/1fMEnIthjp5DJ_iot-cUua40-U6_ac1jR/view",
} satisfies VideoAsset;
