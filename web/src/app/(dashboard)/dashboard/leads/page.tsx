import Link from "next/link";
import { PageHeader } from "@/components/dashboard/ui";
import { LeadStatusSelect } from "@/components/dashboard/lead-status-select";
import {
  LEAD_STATUS_LABEL,
  formatLeadDate,
  isLeadStatus,
  type Lead,
  type LeadStatus,
} from "@/lib/leads";

export const dynamic = "force-dynamic";

const PER_PAGE = 20;

const FILTERS: { value: "all" | LeadStatus; label: string }[] = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
];

type LeadPage = {
  dbOk: boolean;
  docs: Lead[];
  page: number;
  totalPages: number;
  totalDocs: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

async function getLeads(
  status: LeadStatus | undefined,
  page: number
): Promise<LeadPage> {
  const empty: LeadPage = {
    dbOk: false,
    docs: [],
    page: 1,
    totalPages: 1,
    totalDocs: 0,
    hasPrevPage: false,
    hasNextPage: false,
  };

  if (!process.env.DATABASE_URL) return empty;

  try {
    const { getPayload } = await import("@/lib/payload");
    const payload = await getPayload();
    const result = await payload.find({
      collection: "leads",
      where: status ? { status: { equals: status } } : {},
      sort: "-createdAt",
      limit: PER_PAGE,
      page,
      depth: 0,
      overrideAccess: true,
    });

    return {
      dbOk: true,
      docs: result.docs as unknown as Lead[],
      page: result.page ?? 1,
      totalPages: result.totalPages ?? 1,
      totalDocs: result.totalDocs ?? 0,
      hasPrevPage: result.hasPrevPage ?? false,
      hasNextPage: result.hasNextPage ?? false,
    };
  } catch {
    return empty;
  }
}

function buildHref(status: LeadStatus | undefined, page: number): string {
  const params = new URLSearchParams();
  if (status) params.set("status", status);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/dashboard/leads?${qs}` : "/dashboard/leads";
}

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; page?: string }>;
}) {
  const params = await searchParams;
  const status = isLeadStatus(params.status) ? params.status : undefined;
  const requestedPage = Number.parseInt(params.page ?? "1", 10);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  const data = await getLeads(status, page);

  return (
    <>
      <PageHeader
        label="Leads"
        title="Contact submissions"
        description="Every lead captured through the site. Change status inline — it syncs straight to Payload."
      />

      <div className="mb-5 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active =
            f.value === "all" ? status === undefined : status === f.value;
          const href = buildHref(f.value === "all" ? undefined : f.value, 1);
          return (
            <Link
              key={f.value}
              href={href}
              className={
                active
                  ? "rounded-full border border-soft-black bg-soft-black px-3.5 py-1.5 text-xs font-medium text-pure"
                  : "rounded-full border border-cloud bg-pure px-3.5 py-1.5 text-xs font-medium text-stone-gray transition-colors hover:border-fog"
              }
            >
              {f.label}
            </Link>
          );
        })}
        <span className="ml-auto text-xs text-fog">
          {data.totalDocs} {data.totalDocs === 1 ? "lead" : "leads"}
        </span>
      </div>

      {data.docs.length === 0 ? (
        <div className="rounded-xl border border-dashed border-cloud bg-pure px-5 py-16 text-center">
          <p className="text-sm text-stone-gray">
            {!data.dbOk
              ? "Connect the database to see leads."
              : status
                ? `No ${LEAD_STATUS_LABEL[status].toLowerCase()} leads.`
                : "No leads yet — submissions from the contact form will show up here."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-cloud bg-pure">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-cloud text-left">
                <Th>Name</Th>
                <Th>Company</Th>
                <Th>Email</Th>
                <Th>Source</Th>
                <Th>UTM</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cloud">
              {data.docs.map((lead) => (
                <tr key={String(lead.id)} className="align-top">
                  <td className="px-4 py-3">
                    <span className="text-soft-black">{lead.name}</span>
                    {lead.message ? (
                      <details className="mt-1">
                        <summary className="cursor-pointer text-xs text-fog transition-colors hover:text-stone-gray">
                          Message
                        </summary>
                        <p className="mt-1 max-w-xs whitespace-pre-wrap text-xs leading-relaxed text-stone-gray">
                          {lead.message}
                        </p>
                      </details>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-stone-gray">{lead.company || "—"}</td>
                  <td className="px-4 py-3">
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-stone-gray underline-offset-2 hover:text-soft-black hover:underline"
                    >
                      {lead.email}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-stone-gray">{lead.source || "—"}</td>
                  <td className="px-4 py-3 text-stone-gray">
                    {lead.utm?.utm_source || "—"}
                  </td>
                  <td className="px-4 py-3">
                    <LeadStatusSelect id={String(lead.id)} status={lead.status} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 text-fog">
                    {formatLeadDate(lead.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.totalPages > 1 && (
        <div className="mt-5 flex items-center justify-between text-sm">
          <PageLink
            href={buildHref(status, page - 1)}
            disabled={!data.hasPrevPage}
            label="← Previous"
          />
          <span className="text-xs text-fog">
            Page {data.page} of {data.totalPages}
          </span>
          <PageLink
            href={buildHref(status, page + 1)}
            disabled={!data.hasNextPage}
            label="Next →"
          />
        </div>
      )}
    </>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-2.5 text-[11px] font-medium uppercase tracking-wide text-fog">
      {children}
    </th>
  );
}

function PageLink({
  href,
  disabled,
  label,
}: {
  href: string;
  disabled: boolean;
  label: string;
}) {
  if (disabled) {
    return <span className="text-fog opacity-50">{label}</span>;
  }
  return (
    <Link href={href} className="font-medium text-soft-black hover:opacity-70">
      {label}
    </Link>
  );
}
