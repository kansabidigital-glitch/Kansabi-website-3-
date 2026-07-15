import type { Metadata } from "next";
import { PageStub } from "@/components/layout/page-stub";

export const metadata: Metadata = {
  title: "About | Kansabi",
  description:
    "Kansabi is a London-based growth infrastructure studio. Simplicity grows: senior specialists, transparent scope, no lock-in.",
};

export default function AboutPage() {
  return (
    <PageStub
      eyebrow="About"
      title="Simplicity grows"
      description="Kansabi is a London-based growth infrastructure studio. One founder-led senior team, transparent scope, no juniors and no lock-in — because the systems that actually grow a business are the simple ones, executed seriously."
    />
  );
}
