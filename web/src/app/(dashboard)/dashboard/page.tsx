import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PageHeader,
  StatCard,
  LeadStatusPill,
} from "@/components/dashboard/ui";
import {
  LEAD_STATUSES,
  formatLeadDate,
  daysAgo,
  type Lead,
  type LeadStatus,
} from "@/lib/leads";

export const dynamic = "force-dynamic";

type Overview = {
  dbOk: boolean;
  last7: number;
  last30: number;
  byStatus: Record<LeadStatus, number>;
  recent: Lead[];
};

async function getOverview(): Promise<Overview> {
  const empty: Overview = {
    dbOk: false,
    last7: 0,
    last30: 0,
    byStatus: { new: 0, contacted: 0, qualified: 0 },
    recent: [],
  };

  if (!process.env.DATABASE_URL) return empty;

  try {
    const { getPayload } = await import("@/lib/payload");
    const payload = await getPayload();

    const [last7, last30, recent, ...statusCounts] = await Promise.all([
      payload.count({
        collection: "leads",
        where: { createdAt: { greater_than: daysAgo(7).toISOString() } },
        overrideAccess: true,
      }),
      payload.count({
        collection: "leads",
        where: { createdAt: { greater_than: daysAgo(30).toISOString() } },
        overrideAccess: true,
      }),
      payload.find({
        collection: "leads",
        sort: "-createdAt",
        limit: 5,
        depth: 0,
        overrideAccess: true,
      }),
      ...LEAD_STATUSES.map((status) =>
        payload.count({
          collection: "leads",
          where: { status: { equals: status } },
          overrideAccess: true,
        })
      ),
    ]);

    const byStatus = LEAD_STATUSES.reduce(
      (acc, status, i) => {
        acc[status] = statusCounts[i]?.totalDocs ?? 0;
        return acc;
      },
      { new: 0, contacted: 0, qualified: 0 } as Record<LeadStatus, number>
    );

    return {
      dbOk: true,
      last7: last7.totalDocs,
      last30: last30.totalDocs,
      byStatus,
      recent: recent.docs as unknown as Lead[],
    };
  } catch {
    return empty;
  }
}

export default async function DashboardOverviewPage() {
  const data = await getOverview();
  const hasPayload = Boolean(process.env.PAYLOAD_SECRET);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  const systemCards = [
    { label: "Database", ok: data.dbOk },
    { label: "Payload CMS", ok: hasPayload && data.dbOk },
    { label: "Site URL", ok: Boolean(siteUrl) },
    { label: "GTM container", ok: Boolean(gtmId) },
  ];

  return (
    <>
      <PageHeader
        label="Overview"
        title="Operations hub"
        description="System health and the live lead pulse from your website — first-party data only."
      />

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {systemCards.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.ok ? "Ready" : "Setup needed"}
          />
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="label">Lead pulse</p>
        <Link
          href="/dashboard/leads"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-soft-black hover:opacity-70"
        >
          All leads
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Last 7 days" value={String(data.last7)} hint="new leads" />
        <StatCard label="Last 30 days" value={String(data.last30)} hint="new leads" />
        <StatCard
          label="Open (new)"
          value={String(data.byStatus.new)}
          hint="awaiting first contact"
        />
        <StatCard
          label="Qualified"
          value={String(data.byStatus.qualified)}
          hint={`${data.byStatus.contacted} contacted`}
        />
      </div>

      <div className="rounded-xl border border-cloud bg-pure">
        <div className="flex items-center justify-between border-b border-cloud px-5 py-3">
          <p className="text-sm font-medium text-soft-black">Recent leads</p>
          <span className="text-xs text-fog">Last 5</span>
        </div>

        {data.recent.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-fog">
            {data.dbOk
              ? "No leads yet — submissions from the contact form land here."
              : "Connect the database to see leads."}
          </p>
        ) : (
          <ul className="divide-y divide-cloud">
            {data.recent.map((lead) => (
              <li
                key={String(lead.id)}
                className="flex items-center justify-between gap-4 px-5 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm text-soft-black">
                    {lead.name}
                    {lead.company ? (
                      <span className="text-stone-gray"> · {lead.company}</span>
                    ) : null}
                  </p>
                  <p className="truncate text-xs text-fog">
                    {lead.source || "—"} · {formatLeadDate(lead.createdAt)}
                  </p>
                </div>
                <LeadStatusPill status={lead.status} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
