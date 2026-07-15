import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Conversion Website Agency | Kansabi",
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
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Conversion Websites", path: "/expertise/conversion-websites" },
          ]),
        ]}
      />
      <PageStub
        eyebrow="Expertise — Web & Experience"
        title="Conversion Websites"
      description="A website is not a brochure — it's the hardest-working part of your sales system. We build fast, measurable sites where every page has a job and every visit is accounted for."
      />
    </>
  );
}
