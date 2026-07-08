import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { ok: false, error: "DATABASE_URL not configured" },
      { status: 503 }
    );
  }

  try {
    const { getPayload } = await import("@/lib/payload");
    const payload = await getPayload();
    await payload.find({ collection: "users", limit: 1, depth: 0 });

    return NextResponse.json(
      { ok: true, database: "connected" },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Database check failed";
    return NextResponse.json(
      { ok: false, error: message },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}
