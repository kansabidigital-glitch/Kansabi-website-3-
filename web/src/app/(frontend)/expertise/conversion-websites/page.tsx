import type { Metadata } from "next";
import { ExpertiseConversionPage } from "@/components/sections/expertise-conversion-page";
import { JsonLd } from "@/components/seo/json-ld";
import { conversionExpertise } from "@/data/site-content";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Conversion Website Design Agency | Kansabi",
  description:
    "Fast, measurable websites wired into your sales system — built to convert, not just to look good.",
};

export default function ConversionWebsitesPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: "Conversion Websites",
            description:
              "Fast, measurable websites wired into your sales system — built to convert, not just to look good.",
            path: "/expertise/conversion-websites",
          }),
          faqPageSchema(conversionExpertise.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Expertise", path: "/#expertise" },
            {
              name: "Conversion Websites",
              path: "/expertise/conversion-websites",
            },
          ]),
        ]}
      />
      <ExpertiseConversionPage />
    </>
  );
}
