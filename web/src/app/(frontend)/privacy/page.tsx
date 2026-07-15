import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";

export const metadata: Metadata = {
  title: "Privacy Policy | Kansabi",
  description: "How Kansabi collects, uses and protects your data.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <PageStub
      eyebrow="Legal"
      title="Privacy Policy"
      description="Our full UK GDPR privacy policy is being finalised and will be published here before launch. Until then, any data you share with us via the contact form is used solely to respond to your enquiry."
      ctaLabel="Contact us"
    />
  );
}
