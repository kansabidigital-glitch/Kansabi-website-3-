import Link from "next/link";
import {
  ModuleCard,
  PageHeader,
  PlaceholderPanel,
} from "@/components/dashboard/ui";
import { ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";

async function checkDatabase() {
  if (!process.env.DATABASE_URL) return false;
  try {
    const { getPayload } = await import("@/lib/payload");
    const payload = await getPayload();
    await payload.find({ collection: "users", limit: 1, depth: 0 });
    return true;
  } catch {
    return false;
  }
}

export default async function DashboardOverviewPage() {
  const dbOk = await checkDatabase();
  const hasPayload = Boolean(process.env.PAYLOAD_SECRET);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <>
      <PageHeader
        label="Overview"
        title="Operations hub"
        description="Manage content, monitor infrastructure, and connect growth data sources — all from one place."
      />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Database", ok: dbOk },
          { label: "Payload CMS", ok: hasPayload && dbOk },
          { label: "Site URL", ok: Boolean(siteUrl) },
          { label: "Analytics", ok: false },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-cloud bg-pure px-5 py-4"
          >
            <p className="label">{item.label}</p>
            <p className="mt-2 text-lg font-light text-soft-black">
              {item.ok ? "Ready" : "Setup needed"}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ModuleCard
          title="Payload CMS"
          description="Manage pages, blog posts, media, and SEO settings."
          status={hasPayload && dbOk ? "connected" : "pending"}
          action={
            <a
              href="/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-soft-black px-4 py-2 text-sm font-medium text-pure transition-colors hover:bg-muted-charcoal"
            >
              Open Payload Admin
              <ExternalLink size={14} />
            </a>
          }
        >
          <ul className="space-y-1.5 text-xs text-stone-gray">
            <li>• Pages & landing content</li>
            <li>• Blog posts for SEO</li>
            <li>• Site-wide meta settings</li>
          </ul>
        </ModuleCard>

        <ModuleCard
          title="Neon PostgreSQL"
          description="Primary database for Payload CMS and future dashboard data."
          status={dbOk ? "connected" : process.env.DATABASE_URL ? "pending" : "disconnected"}
          action={
            <Link
              href="/dashboard/infrastructure"
              className="text-sm font-medium text-soft-black hover:opacity-70"
            >
              View infrastructure →
            </Link>
          }
        />

        <ModuleCard
          title="Google Analytics"
          description="Traffic, sessions, and conversion tracking."
          status="pending"
        >
          <PlaceholderPanel label="GA4 property ID — coming soon" />
        </ModuleCard>

        <ModuleCard
          title="Meta & Google Ads"
          description="Campaign performance, spend, and ROAS."
          status="pending"
        >
          <PlaceholderPanel label="Ads API integration — coming soon" />
        </ModuleCard>
      </div>
    </>
  );
}
