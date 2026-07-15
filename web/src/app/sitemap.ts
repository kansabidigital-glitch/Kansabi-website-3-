import type { MetadataRoute } from "next";

// Launch routes — extend as each faz ships its page.
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services/diagnostic-sprint", priority: 0.9 },
  { path: "/services/foundation-build", priority: 0.9 },
  { path: "/services/growth-retainer", priority: 0.9 },
  { path: "/expertise/geo-ai-search", priority: 0.9 },
  { path: "/expertise/conversion-websites", priority: 0.8 },
  { path: "/expertise/cro-landing-pages", priority: 0.8 },
  { path: "/expertise/paid-media", priority: 0.8 },
  { path: "/playbooks", priority: 0.7 },
  { path: "/playbooks/aesthetic-clinic", priority: 0.6 },
  { path: "/playbooks/b2b-saas", priority: 0.6 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
  { path: "/cookies", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
  }));
}
