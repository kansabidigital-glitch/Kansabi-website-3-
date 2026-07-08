import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { MetricsSection } from "@/components/sections/metrics";
import { WhySection } from "@/components/sections/why";
import { ServicesSection } from "@/components/sections/services";
import { ExpertiseSection } from "@/components/sections/expertise";
import { ProcessSection } from "@/components/sections/process";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MetricsSection />
        <WhySection />
        <ServicesSection />
        <ExpertiseSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
