import type { Metadata } from "next";
import { ExpertiseCroPage } from "@/components/sections/expertise-cro-page";
import { JsonLd } from "@/components/seo/json-ld";
import { croExpertise } from "@/data/site-content";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/jsonld";

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
          faqPageSchema(croExpertise.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expertise", path: "/#expertise" },
            {
              name: "Landing Pages & CRO",
              path: "/expertise/cro-landing-pages",
            },
          ]),
        ]}
      />
      <ExpertiseCroPage />
    </>
  );
}
