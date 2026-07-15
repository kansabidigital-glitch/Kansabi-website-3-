import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";

export const metadata: Metadata = {
  title: "Cookie Policy | Kansabi",
  description: "How Kansabi uses cookies and how you can control them.",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <PageStub
      eyebrow="Legal"
      title="Cookie Policy"
      description="Our full cookie policy — including a consent manager to control preferences — arrives with our analytics setup before launch. Right now this site sets no marketing or analytics cookies."
      ctaLabel="Contact us"
    />
  );
}
