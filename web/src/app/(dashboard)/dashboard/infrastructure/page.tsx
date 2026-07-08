import { PageHeader, ModuleCard, StatusBadge } from "@/components/dashboard/ui";

export const dynamic = "force-dynamic";

async function checkDatabase() {
  if (!process.env.DATABASE_URL) {
    return { ok: false, message: "DATABASE_URL not configured" };
  }
  try {
    const { getPayload } = await import("@/lib/payload");
    const payload = await getPayload();
    await payload.find({ collection: "users", limit: 1, depth: 0 });
    return { ok: true, message: "Neon PostgreSQL connected" };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Connection failed";
    return { ok: false, message: msg.slice(0, 120) };
  }
}

export default async function InfrastructurePage() {
  const db = await checkDatabase();

  const stack = [
    {
      name: "Neon PostgreSQL",
      provider: "Neon",
      status: db.ok ? ("connected" as const) : ("pending" as const),
      detail: db.message,
    },
    {
      name: "Payload CMS",
      provider: "Payload v3",
      status: process.env.PAYLOAD_SECRET ? ("connected" as const) : ("pending" as const),
      detail: process.env.PAYLOAD_SECRET ? "Secret configured" : "PAYLOAD_SECRET missing",
    },
    {
      name: "Vercel",
      provider: "Hosting",
      status: process.env.VERCEL ? ("connected" as const) : ("pending" as const),
      detail: process.env.VERCEL ? `Deployment: ${process.env.VERCEL_ENV}` : "Local development",
    },
    {
      name: "GitHub",
      provider: "kansabidigital-glitch/Kansabi-website",
      status: "connected" as const,
      detail: "Source control",
    },
  ];

  return (
    <>
      <PageHeader
        label="Infrastructure"
        title="System stack"
        description="Core services powering the Kansabi website and CMS."
      />

      <div className="space-y-3">
        {stack.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border border-cloud bg-pure px-5 py-4"
          >
            <div>
              <p className="text-sm font-medium text-soft-black">{item.name}</p>
              <p className="text-xs text-fog">{item.provider}</p>
              <p className="mt-1 text-xs text-zen-accent">{item.detail}</p>
            </div>
            <StatusBadge status={item.status} />
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-cloud bg-pure p-5">
        <p className="label">Deployment checklist</p>
        <ul className="mt-3 space-y-2 text-sm text-stone-gray">
          <li className="flex items-center gap-2">
            <span className={db.ok ? "text-soft-black" : "text-fog"}>
              {db.ok ? "✓" : "○"}
            </span>
            Neon database connected
          </li>
          <li className="flex items-center gap-2">
            <span className={process.env.PAYLOAD_SECRET ? "text-soft-black" : "text-fog"}>
              {process.env.PAYLOAD_SECRET ? "✓" : "○"}
            </span>
            Payload secret configured
          </li>
          <li className="flex items-center gap-2">
            <span className="text-fog">○</span>
            Vercel env vars set (production)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-fog">○</span>
            Custom domain connected
          </li>
        </ul>
      </div>
    </>
  );
}
