import type { Metadata } from "next";
import "../../globals.css";
import { headers as nextHeaders } from "next/headers";
import { redirect } from "next/navigation";
import { getPayload } from "@/lib/payload";
import { RootHtml } from "@/components/layout/root-html";
import { DashboardShell } from "@/components/dashboard/shell";

export const metadata: Metadata = {
  title: "Dashboard | Kansabi",
  robots: { index: false, follow: false },
};

// The dashboard is gated by a real Payload session — no shared access key.
// Anyone without a valid `payload-token` cookie is sent to the admin login.
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headers = await nextHeaders();

  let user: unknown = null;
  try {
    const payload = await getPayload();
    ({ user } = await payload.auth({ headers }));
  } catch {
    // DB/Payload unavailable → treat as unauthenticated rather than 500.
    user = null;
  }

  if (!user) {
    redirect("/admin");
  }

  return (
    <RootHtml>
      <DashboardShell>{children}</DashboardShell>
    </RootHtml>
  );
}
