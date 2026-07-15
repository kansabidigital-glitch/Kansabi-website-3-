import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Landing Page & CRO Agency | Kansabi",
  description:
    "Landing pages that are tested, measured and keep improving — conversion as a discipline, not a guess.",
};

export default function CroLandingPagesPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: "Landing Pages & CRO",
            description:
              "Landing pages that are tested, measured and keep improving — conversion as a discipline, not a guess.",
            path: "/expertise/cro-landing-pages",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Landing Pages & CRO", path: "/expertise/cro-landing-pages" },
          ]),
        ]}
      />
      <PageStub
        eyebrow="Expertise — Web & Experience"
        title="Landing Pages & CRO"
      description="Pages that convert, not just impress. We run a test-and-learn loop — audit, hypotheses, A/B tests, ship — so your landing pages get measurably better every month."
      />
    </>
  );
}
