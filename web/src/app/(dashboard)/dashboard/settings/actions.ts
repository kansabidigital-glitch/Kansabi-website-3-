"use server";

import { headers as nextHeaders } from "next/headers";
import { revalidatePath } from "next/cache";
import { getPayload } from "@/lib/payload";

// Manually flush the ISR cache for the whole public site. Re-authenticates the
// Payload session so a stray cross-site POST can't trigger a rebuild.
export async function revalidateSite(): Promise<{ ok: boolean; at: string }> {
  const payload = await getPayload();
  const { user } = await payload.auth({ headers: await nextHeaders() });
  if (!user) throw new Error("Unauthorized");

  revalidatePath("/", "layout");
  return { ok: true, at: new Date().toISOString() };
}
