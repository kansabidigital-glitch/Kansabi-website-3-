import { PageHeader, PlaceholderPanel, ModuleCard } from "@/components/dashboard/ui";

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        label="Analytics"
        title="Traffic & conversions"
        description="GA4 sessions, funnel drop-off, and landing page performance."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <ModuleCard
          title="Google Analytics 4"
          description="Sessions, users, conversion events."
          status="pending"
        >
          <PlaceholderPanel label="GA4 Measurement ID required" />
        </ModuleCard>
        <ModuleCard
          title="Landing page analysis"
          description="Bounce rate, time on page, conversion by URL."
          status="pending"
        >
          <PlaceholderPanel />
        </ModuleCard>
      </div>
    </>
  );
}
