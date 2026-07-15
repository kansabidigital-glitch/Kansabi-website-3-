import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";

export const metadata: Metadata = {
  title: "Growth Playbooks | Kansabi",
  description:
    "Sector playbooks showing exactly how we'd run a growth engagement — sample engagements with industry benchmarks, not invented case studies.",
};

export default function PlaybooksPage() {
  return (
    <PageStub
      eyebrow="Playbooks — sample engagements"
      title="How we'd grow your business"
      description="We don't publish invented case studies. Instead, each playbook walks through a real engagement plan for a sector — aesthetic clinics, B2B SaaS — with industry benchmarks in place of client claims. The first two playbooks land here soon."
      ctaLabel="Talk through your sector"
    />
  );
}
