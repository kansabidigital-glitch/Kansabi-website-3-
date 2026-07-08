import { PageHeader, PlaceholderPanel, ModuleCard } from "@/components/dashboard/ui";
import { ExternalLink } from "lucide-react";

export default function SeoPage() {
  return (
    <>
      <PageHeader
        label="SEO"
        title="Search & visibility"
        description="Rankings, content clusters, GEO signals, and CMS-managed meta."
      />
      <div className="grid gap-4">
        <ModuleCard
          title="CMS SEO fields"
          description="Meta title, description, OG images, noindex — managed per page in Payload."
          status="connected"
          action={
            <a
              href="/admin/globals/site-settings"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-soft-black hover:opacity-70"
            >
              Edit default SEO in Payload
              <ExternalLink size={14} />
            </a>
          }
        />
        <div className="grid gap-4 md:grid-cols-2">
          <ModuleCard
            title="Search Console"
            description="Impressions, clicks, average position."
            status="pending"
          >
            <PlaceholderPanel label="Google Search Console API" />
          </ModuleCard>
          <ModuleCard
            title="GEO / AI visibility"
            description="AI search optimization signals and content clusters."
            status="pending"
          >
            <PlaceholderPanel />
          </ModuleCard>
        </div>
      </div>
    </>
  );
}
