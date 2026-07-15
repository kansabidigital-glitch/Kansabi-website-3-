import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";

export const metadata: Metadata = {
  title: "Terms of Service | Kansabi",
  description: "The terms that govern working with Kansabi.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <PageStub
      eyebrow="Legal"
      title="Terms of Service"
      description="Our full terms of service are being finalised and will be published here before launch. Engagements run under English law with clear, written scope — no lock-in contracts."
      ctaLabel="Contact us"
    />
  );
}
