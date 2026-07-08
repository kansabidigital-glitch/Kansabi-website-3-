import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().optional(),
  PAYLOAD_SECRET: z.string().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  DASHBOARD_ACCESS_KEY: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  DASHBOARD_ACCESS_KEY: process.env.DASHBOARD_ACCESS_KEY,
});

export function assertProductionEnv() {
  if (env.NODE_ENV !== "production") return;

  const missing: string[] = [];
  if (!env.DATABASE_URL) missing.push("DATABASE_URL");
  if (!env.PAYLOAD_SECRET || env.PAYLOAD_SECRET.length < 32) {
    missing.push("PAYLOAD_SECRET (min 32 chars)");
  }
  if (!env.NEXT_PUBLIC_SITE_URL) missing.push("NEXT_PUBLIC_SITE_URL");

  if (missing.length > 0) {
    throw new Error(
      `Missing required production env vars: ${missing.join(", ")}`
    );
  }
}
