import { readFile } from "node:fs/promises";
import { join } from "node:path";
export async function GET() {
  if (process.env.NODE_ENV !== "development")
    return new Response(null, { status: 404 });
  try {
    const b = await readFile(
      join(process.cwd(), "tests/fixtures/explanation.webm"),
    );
    return new Response(b, {
      headers: { "Content-Type": "video/webm", "Cache-Control": "no-store" },
    });
  } catch {
    return new Response(null, { status: 404 });
  }
}
