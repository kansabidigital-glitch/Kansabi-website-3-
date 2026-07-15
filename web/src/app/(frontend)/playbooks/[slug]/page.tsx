import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaybookPage } from "@/components/sections/playbook-page";
import { JsonLd } from "@/components/seo/json-ld";
import { getPlaybook, playbooks } from "@/data/site-content";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return playbooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook) return {};
  return {
    title: playbook.meta.title,
    description: playbook.meta.description,
    alternates: { canonical: playbook.href },
  };
}

export default async function PlaybookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook) notFound();

  return (
    <>
      <JsonLd
        schemas={[
          articleSchema({
            name: playbook.title,
            description: playbook.meta.description,
            path: playbook.href,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Playbooks", path: "/playbooks" },
            { name: playbook.sector, path: playbook.href },
          ]),
        ]}
      />
      <PlaybookPage playbook={playbook} />
    </>
  );
}
