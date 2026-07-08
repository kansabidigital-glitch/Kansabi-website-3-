import { PageHeader, ModuleCard, PlaceholderPanel } from "@/components/dashboard/ui";
import { ExternalLink } from "lucide-react";

export default function ContentPage() {
  return (
    <>
      <PageHeader
        label="Content"
        title="Content management"
        description="Create and publish pages, blog posts, and media via Payload CMS."
      />

      <div className="grid gap-4">
        <ModuleCard
          title="Payload CMS Admin"
          description="Full content editor — pages, blog, media library, SEO fields, site settings."
          status="connected"
          action={
            <div className="flex flex-wrap gap-3">
              <a
                href="/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-soft-black px-4 py-2 text-sm font-medium text-pure hover:bg-muted-charcoal"
              >
                Open Payload Admin
                <ExternalLink size={14} />
              </a>
              <a
                href="/admin/collections/pages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cloud px-4 py-2 text-sm font-medium text-soft-black hover:border-fog"
              >
                Pages
              </a>
              <a
                href="/admin/collections/blog-posts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cloud px-4 py-2 text-sm font-medium text-soft-black hover:border-fog"
              >
                Blog Posts
              </a>
              <a
                href="/admin/globals/site-settings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cloud px-4 py-2 text-sm font-medium text-soft-black hover:border-fog"
              >
                Site Settings
              </a>
            </div>
          }
        />

        <ModuleCard
          title="Landing page sync"
          description="Connect homepage sections to CMS fields — hero, metrics, services."
          status="pending"
        >
          <PlaceholderPanel label="CMS-driven landing sections — next iteration" />
        </ModuleCard>
      </div>
    </>
  );
}
