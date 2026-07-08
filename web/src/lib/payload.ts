import { getPayload as getPayloadClient } from "payload";
import config from "@payload-config";

let cached: Awaited<ReturnType<typeof getPayloadClient>> | null = null;

export async function getPayload() {
  if (cached) return cached;
  cached = await getPayloadClient({ config });
  return cached;
}
