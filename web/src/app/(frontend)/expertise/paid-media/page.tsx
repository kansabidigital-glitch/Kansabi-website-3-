import type { Metadata } from "next";
import { ExpertisePaidMediaPage } from "@/components/sections/expertise-paid-media-page";
import { JsonLd } from "@/components/seo/json-ld";
import { paidMediaExpertise } from "@/data/site-content";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Paid Media Agency (Google & Meta) | Kansabi",
  description:
    "Google & Meta Ads run against pipeline, not vanity clicks — with first-party tracking that proves which spend turns into revenue.",
};

export default function PaidMediaPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: "Paid Media",
            description:
              "Google & Meta Ads run against pipeline, not vanity clicks — with first-party tracking that proves which spend turns into revenue.",
            path: "/expertise/paid-media",
          }),
          faqPageSchema(paidMediaExpertise.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expertise", path: "/#expertise" },
            { name: "Paid Media", path: "/expertise/paid-media" },
          ]),
        ]}
      />
      <ExpertisePaidMediaPage />
    </>
  );
}
