import { faqs } from "@/data/site-content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const ORG_ID = `${SITE_URL}/#organization`;

type JsonLdObject = Record<string, unknown>;

export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Kansabi",
    url: SITE_URL,
    description:
      "Growth infrastructure partner. We build acquisition infrastructure for B2B SaaS and high-LTV brands: conversion websites, GEO, tracking and paid media connected into one system.",
    areaServed: ["GB", "EU", "AU"],
    knowsAbout: [
      "Generative Engine Optimization",
      "Conversion Rate Optimization",
      "Web Design",
      "Paid Media",
      "Analytics",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_URL}/contact`,
    },
  };
}

export function webSiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Kansabi",
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
  };
}

export function faqPageSchema(
  items: { q: string; a: string }[] = faqs
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: ["GB", "EU", "AU"],
  };
}

export function itemListSchema(
  items: { name: string; path: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}

// Playbooks are illustrative sample engagements, not case studies — Article
// (not Review/AggregateRating) keeps the schema honest: no fabricated social
// proof. Author + publisher point at the Organization node.
export function articleSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description,
    url: `${SITE_URL}${path}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
