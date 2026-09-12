import { NextResponse, type NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  const h = new Headers(request.headers);
  h.set(
    "x-sparkle-locale",
    request.nextUrl.pathname === "/en" ||
      request.nextUrl.searchParams.get("locale") === "en"
      ? "en"
      : "ar",
  );
  return NextResponse.next({ request: { headers: h } });
}
export const config = { matcher: ["/", "/en", "/design/:path*"] };
