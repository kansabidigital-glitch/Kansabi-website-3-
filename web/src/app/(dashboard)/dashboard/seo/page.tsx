import { headers as nextHeaders } from "next/headers";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/dashboard/ui";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

// JSON-LD coverage — kept parallel to lib/jsonld.ts. Static on purpose: it
// documents which schema each SSR page emits, not a live probe.
const JSONLD_COVERAGE: { path: string; schemas: string[] }[] = [
  { path: "/", schemas: ["Organization", "WebSite", "FAQPage"] },
  { path: "/services/diagnostic-sprint", schemas: ["Service", "FAQPage", "BreadcrumbList"] },
  { path: "/services/foundation-build", schemas: ["Service", "FAQPage", "BreadcrumbList"] },
  { path: "/services/growth-retainer", schemas: ["Service", "FAQPage", "BreadcrumbList"] },
  { path: "/expertise/geo-ai-search", schemas: ["Service", "BreadcrumbList"] },
  { path: "/expertise/conversion-websites", schemas: ["Service", "BreadcrumbList"] },
  { path: "/expertise/cro-landing-pages", schemas: ["Service", "BreadcrumbList"] },
  { path: "/expertise/paid-media", schemas: ["Service", "BreadcrumbList"] },
];

type Probe = {
  path: string;
  ok: boolean;
  statusCode: number | null;
  detail: string;
};

async function getBaseUrl(): Promise<string> {
  const h = await nextHeaders();
  const host = h.get("host");
  if (host) {
    const proto =
      h.get("x-forwarded-proto") ??
      (host.startsWith("localhost") || host.startsWith("127.0.0.1")
        ? "http"
        : "https");
    return `${proto}://${host}`;
  }
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

async function probe(baseUrl: string, path: string): Promise<Probe> {
  try {
    const res = await fetch(`${baseUrl}${path}`, { cache: "no-store" });
    const body = res.ok ? await res.text() : "";
    let detail = res.ok ? "reachable" : res.statusText || "unreachable";

    if (path === "/sitemap.xml" && res.ok) {
      const count = (body.match(/<loc>/g) ?? []).length;
      detail = `${count} URL${count === 1 ? "" : "s"}`;
    }

    return { path, ok: res.ok, statusCode: res.status, detail };
  } catch {
    return { path, ok: false, statusCode: null, detail: "fetch failed" };
  }
}

export default async function SeoPage() {
  const baseUrl = await getBaseUrl();
  const probes = await Promise.all(
    ["/robots.txt", "/llms.txt", "/sitemap.xml"].map((p) => probe(baseUrl, p))
  );

  return (
    <>
      <PageHeader
        label="SEO & GEO"
        title="Crawlability & structured data"
        description="Live status of the machine-readable layer — what search engines and AI crawlers actually see."
      />

      <div className="mb-4 flex items-center justify-between">
        <p className="label">Discovery files</p>
        <span className="text-xs text-fog">Live · fetched now</span>
      </div>
      <div className="mb-10 grid gap-3 sm:grid-cols-3">
        {probes.map((p) => (
          <div
            key={p.path}
            className="rounded-xl border border-cloud bg-pure px-5 py-4"
          >
            <div className="flex items-center justify-between">
              <code className="text-xs text-soft-black">{p.path}</code>
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  p.ok ? "bg-soft-black" : "bg-red-400"
                )}
                aria-hidden
              />
            </div>
            <p className="mt-2 text-sm font-light text-soft-black">
              {p.statusCode ? `${p.statusCode} · ${p.detail}` : p.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="label">JSON-LD coverage</p>
        <span className="text-xs text-fog">
          {JSONLD_COVERAGE.length} pages
        </span>
      </div>
      <div className="mb-10 overflow-x-auto rounded-xl border border-cloud bg-pure">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-cloud text-left">
              <th className="px-4 py-2.5 text-[11px] font-medium uppercase tracking-wide text-fog">
                Page
              </th>
              <th className="px-4 py-2.5 text-[11px] font-medium uppercase tracking-wide text-fog">
                Schema
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cloud">
            {JSONLD_COVERAGE.map((row) => (
              <tr key={row.path}>
                <td className="px-4 py-3">
                  <code className="text-xs text-soft-black">{row.path}</code>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {row.schemas.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-cloud bg-warm-white px-2.5 py-0.5 text-[11px] text-stone-gray"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <ExternalTool
          title="Rich Results Test"
          description="Validate the structured data Google reads."
          href="https://search.google.com/test/rich-results"
        />
        <ExternalTool
          title="Search Console"
          description="Impressions, clicks, coverage, and indexing."
          href="https://search.google.com/search-console"
        />
      </div>
    </>
  );
}

function ExternalTool({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start justify-between gap-4 rounded-xl border border-cloud bg-pure px-5 py-4 transition-colors hover:border-fog"
    >
      <div>
        <p className="text-sm font-medium text-soft-black">{title}</p>
        <p className="mt-1 text-xs text-zen-accent">{description}</p>
      </div>
      <ExternalLink size={14} className="mt-0.5 shrink-0 text-fog" />
    </a>
  );
}
