import type { Metadata } from "next";
import { PlaybooksIndex } from "@/components/sections/playbooks-index";
import { JsonLd } from "@/components/seo/json-ld";
import { playbooks } from "@/data/site-content";
import { breadcrumbSchema, itemListSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Playbooks — How we'd approach your sector | Kansabi",
  description:
    "Sector playbooks showing exactly how we'd run a growth engagement — sample engagements mapped to industry benchmarks, not invented case studies.",
  alternates: { canonical: "/playbooks" },
};

export default function PlaybooksPage() {
  return (
    <>
      <JsonLd
        schemas={[
          itemListSchema(
            playbooks.map((p) => ({ name: p.title, path: p.href }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Playbooks", path: "/playbooks" },
          ]),
        ]}
      />
      <PlaybooksIndex />
    </>
  );
}
