import type { Metadata } from "next";

type SeoInput = {
  title?: string | null;
  description?: string | null;
  ogImage?: string | null;
  canonicalUrl?: string | null;
  noIndex?: boolean | null;
  siteName?: string;
};

export function buildMetadata({
  title,
  description,
  ogImage,
  canonicalUrl,
  noIndex,
  siteName = "Kansabi",
}: SeoInput): Metadata {
  const metaTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description ?? undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [{ url: ogImage }] : undefined,
      siteName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
