import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  // Permit retrieval of the noindex directive on each review page.
  return { rules:{ userAgent:"*", allow:"/", disallow:["/design", "/api/"] } };
}
