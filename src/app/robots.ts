import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  // Keep public locale pages crawlable while excluding internal tooling and APIs.
  return { rules:{ userAgent:"*", allow:"/", disallow:["/design", "/api/"] } };
}
