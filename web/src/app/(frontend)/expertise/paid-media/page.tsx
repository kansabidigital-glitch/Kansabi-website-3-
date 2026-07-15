import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Paid Media Agency | Kansabi",
  description:
    "Google & Meta Ads run against pipeline, not vanity clicks — with tracking that proves what works.",
};

export default function PaidMediaPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: "Paid Media",
            description:
              "Google & Meta Ads run against pipeline, not vanity clicks — with tracking that proves what works.",
            path: "/expertise/paid-media",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Paid Media", path: "/expertise/paid-media" },
          ]),
        ]}
      />
      <PageStub
        eyebrow="Expertise — Demand & Systems"
      title="Paid Media"
      description="Ads are only as good as the system they feed. We run Google and Meta against pipeline — qualified leads, tracked end to end — and we'll tell you honestly when ads aren't your best channel."
      />
    </>
  );
}
