import { PageHeader, ModuleCard } from "@/components/dashboard/ui";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        label="Settings"
        title="Dashboard settings"
        description="Access control and integration configuration."
      />
      <div className="grid gap-4">
        <ModuleCard
          title="Dashboard access"
          description="Production dashboard is protected via DASHBOARD_ACCESS_KEY environment variable."
          status={process.env.DASHBOARD_ACCESS_KEY ? "connected" : "pending"}
        >
          <p className="text-xs text-fog">
            Set DASHBOARD_ACCESS_KEY in Vercel for production preview access.
          </p>
        </ModuleCard>
        <ModuleCard
          title="Site URL"
          description="Used for SEO, sitemap, and Payload CORS/CSRF."
          status={process.env.NEXT_PUBLIC_SITE_URL ? "connected" : "pending"}
        >
          <p className="text-xs font-mono text-stone-gray">
            {process.env.NEXT_PUBLIC_SITE_URL ?? "Not set"}
          </p>
        </ModuleCard>
      </div>
    </>
  );
}
