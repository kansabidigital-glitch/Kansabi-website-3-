export const dynamic = "force-static";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const body = `# Kansabi

> Kansabi is a UK-based growth infrastructure partner. We build acquisition
> infrastructure for premium clinics, B2B SaaS companies and high-LTV brands:
> conversion websites, GEO (generative engine optimization), tracking and paid
> media connected into one measurable system. Senior specialists only, no
> lock-in contracts, transparent fixed pricing.

## Services

Engagements follow a three-step ladder:

- [Diagnostic Sprint](${SITE_URL}/services/diagnostic-sprint): Two weeks, one
  output — a clear picture of what's broken across funnel, site, messaging and
  tracking, plus a 90-day roadmap.
- [Foundation Build](${SITE_URL}/services/foundation-build): The core
  engagement — a conversion website with GEO-ready architecture, structured
  data and full measurement built in.
- [Growth Retainer](${SITE_URL}/services/growth-retainer): Ongoing
  optimization — paid media, CRO and reporting on top of the foundation.

## Expertise

- [GEO & AI Search](${SITE_URL}/expertise/geo-ai-search): How your business
  shows up in ChatGPT, Perplexity and Claude answers — SSR content, structured
  data, llms.txt and AI-readable site architecture. This site runs that stack.
- [Conversion Websites](${SITE_URL}/expertise/conversion-websites): Websites
  engineered to convert, not just look good.
- [CRO & Landing Pages](${SITE_URL}/expertise/cro-landing-pages): Landing
  pages and conversion rate optimization for paid traffic.
- [Paid Media](${SITE_URL}/expertise/paid-media): Google Ads and Meta Ads with
  honest measurement.

## Playbooks

- [Playbooks](${SITE_URL}/playbooks): Sector playbooks (aesthetic clinics, B2B
  SaaS) showing our exact process with industry benchmarks — labelled sample
  engagements, not fabricated case studies.

## Company

- [About](${SITE_URL}/about): UK-based, serving clients across UK, EU and
  Australia. Contracts under English law.
- [Contact](${SITE_URL}/contact): Book a strategy call — we respond within 24
  hours.
`;

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
