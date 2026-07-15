import type { Metadata } from "next";
import { ExpertiseGeoPage } from "@/components/sections/expertise-geo-page";
import { JsonLd } from "@/components/seo/json-ld";
import { geoExpertise } from "@/data/site-content";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "GEO — AI Search Optimization Agency | Kansabi",
  description:
    "Get recommended by ChatGPT, Perplexity and Claude. GEO makes your business visible where your customers now actually ask.",
};

export default function GeoAiSearchPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: "GEO — AI Search Optimization",
            description:
              "Get recommended by ChatGPT, Perplexity and Claude. GEO makes your business visible where your customers now actually ask.",
            path: "/expertise/geo-ai-search",
          }),
          faqPageSchema(geoExpertise.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expertise", path: "/#expertise" },
            {
              name: "GEO — AI Search Optimization",
              path: "/expertise/geo-ai-search",
            },
          ]),
        ]}
      />
      <ExpertiseGeoPage />
    </>
  );
}
