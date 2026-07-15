import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getService } from "@/data/site-content";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/jsonld";

const service = getService("foundation-build");

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
};

export default function FoundationBuildPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: service.title,
            description: service.meta.description,
            path: service.href,
          }),
          faqPageSchema(service.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: service.title, path: service.href },
          ]),
        ]}
      />
      <ServicePage service={service} />
    </>
  );
}
