"use server";

import { headers as nextHeaders } from "next/headers";
import { revalidatePath } from "next/cache";
import { getPayload } from "@/lib/payload";
import { isLeadStatus } from "@/lib/leads";

// Update a lead's status from the dashboard table. The action re-authenticates
// the Payload session on every call (defence in depth — the layout gate is not
// enough on its own for a mutation) and runs the write under that user with
// normal access control, so only signed-in staff can change a lead.
export async function updateLeadStatus(formData: FormData) {
  const id = formData.get("id");
  const status = formData.get("status");

  if (typeof id !== "string" || id.length === 0 || !isLeadStatus(status)) {
    throw new Error("Invalid lead update request");
  }

  const payload = await getPayload();
  const { user } = await payload.auth({ headers: await nextHeaders() });
  if (!user) throw new Error("Unauthorized");

  await payload.update({
    collection: "leads",
    id,
    data: { status },
    user,
    overrideAccess: false,
  });

  revalidatePath("/dashboard/leads");
  revalidatePath("/dashboard");
}
