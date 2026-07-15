import { NextResponse } from "next/server";
import { z } from "zod";
import { getPayload } from "@/lib/payload";

const leadSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().min(1).max(200),
  message: z.string().trim().max(5000).optional().or(z.literal("")),
  source: z.string().trim().max(200).optional(),
  utm: z
    .object({
      utm_source: z.string().max(200).optional(),
      utm_medium: z.string().max(200).optional(),
      utm_campaign: z.string().max(200).optional(),
      utm_term: z.string().max(200).optional(),
      utm_content: z.string().max(200).optional(),
    })
    .optional(),
  // Honeypot — real users never fill this.
  website: z.string().optional(),
});

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Keep the map from growing unbounded on a long-lived instance.
  if (hits.size > 10_000) hits.clear();
  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form fields and try again." },
      { status: 422 }
    );
  }

  // Honeypot filled → pretend success, write nothing.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, message, source, utm } = parsed.data;

  try {
    const payload = await getPayload();
    await payload.create({
      collection: "leads",
      data: {
        name,
        email,
        company,
        message: message || undefined,
        source: source || undefined,
        utm: utm && Object.keys(utm).length > 0 ? utm : undefined,
        status: "new",
      },
      overrideAccess: true,
    });
  } catch (error) {
    console.error("[/api/lead] create failed:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong on our side. Please email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
