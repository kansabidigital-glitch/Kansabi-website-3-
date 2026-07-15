import { Hero } from "@/components/sections/hero";
import { IndustriesSection } from "@/components/sections/industries";
import { GeoSpotlightSection } from "@/components/sections/geo-spotlight";
import { ServicesSection } from "@/components/sections/services";
import { ExpertiseSection } from "@/components/sections/expertise";
import { WhySection } from "@/components/sections/why";
import { ProcessSection } from "@/components/sections/process";
import { PlaybooksSection } from "@/components/sections/playbooks";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";
import {
  faqPageSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/jsonld";

export default function Home() {
  return (
    <main>
      <JsonLd
        schemas={[organizationSchema(), webSiteSchema(), faqPageSchema()]}
      />
      <Hero />
      <IndustriesSection />
      <GeoSpotlightSection />
      <ServicesSection />
      <ExpertiseSection />
      <WhySection />
      <ProcessSection />
      <PlaybooksSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
