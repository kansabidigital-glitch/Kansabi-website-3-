import { PageHeader, PlaceholderPanel, ModuleCard } from "@/components/dashboard/ui";

export default function AdsPage() {
  return (
    <>
      <PageHeader
        label="Ads"
        title="Paid media performance"
        description="Meta Ads and Google Ads — spend, CPA, ROAS, pipeline."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <ModuleCard
          title="Meta Ads"
          description="Campaign performance, lead volume, cost per result."
          status="pending"
        >
          <PlaceholderPanel label="Meta Business API — connect account" />
        </ModuleCard>
        <ModuleCard
          title="Google Ads"
          description="Search & display campaigns, conversion tracking."
          status="pending"
        >
          <PlaceholderPanel label="Google Ads API — connect account" />
        </ModuleCard>
      </div>
    </>
  );
}
