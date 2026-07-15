export const navServices = [
  {
    label: "Diagnostic Sprint",
    href: "/services/diagnostic-sprint",
    desc: "A 2-week teardown of your funnel, site, messaging and tracking.",
  },
  {
    label: "Foundation Build",
    href: "/services/foundation-build",
    desc: "Conversion website + GEO infrastructure — our core engagement.",
  },
  {
    label: "Growth Retainer",
    href: "/services/growth-retainer",
    desc: "Ongoing partnership: search, paid and content compounding monthly.",
  },
];

// Launch pages only — remaining expertise pages unlock as they're built (Faz 2+).
export const navExpertise = [
  {
    pillar: "Web & Experience",
    items: [
      {
        label: "Conversion Websites",
        href: "/expertise/conversion-websites",
        desc: "Fast, measurable sites wired into your sales system.",
      },
      {
        label: "Landing Pages & CRO",
        href: "/expertise/cro-landing-pages",
        desc: "Pages that are tested and keep improving.",
      },
    ],
  },
  {
    pillar: "Search & AI Visibility",
    items: [
      {
        label: "GEO — AI Search Optimization",
        href: "/expertise/geo-ai-search",
        desc: "Get recommended by ChatGPT, Perplexity and Claude.",
      },
    ],
  },
  {
    pillar: "Demand & Systems",
    items: [
      {
        label: "Paid Media",
        href: "/expertise/paid-media",
        desc: "Google & Meta — pipeline, not just clicks.",
      },
    ],
  },
];

export const geoSnapshotCard = {
  title: "Free GEO snapshot",
  desc: "Is AI recommending your business? Find out in 48h.",
  cta: "Get your snapshot",
  href: "/contact",
};

export const footerNav = {
  services: navServices.map(({ label, href }) => ({ label, href })),
  expertise: navExpertise.flatMap((p) =>
    p.items.map(({ label, href }) => ({ label, href }))
  ),
  company: [
    { label: "About", href: "/about" },
    { label: "Playbooks", href: "/playbooks" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

// --- Hero -------------------------------------------------------------

export const heroEyebrow = "Growth Infrastructure Partner";

// struck word gets crossed out, emphasis lands in the accent color
export const heroTitle = {
  struck: "Pretty",
  emphasis: "Conversion",
  rest: "websites. Built to be found by AI.",
};

export const heroSubtitle =
  "We build the acquisition system premium UK brands need — a website engineered to convert, wired into search and paid, and structured so ChatGPT, Perplexity and Claude recommend you too.";

export const heroBullets = ["No juniors", "No surprises", "No lock-in"];

export const heroCtas = {
  primary: { label: "Book a strategy call", href: "/contact" },
  secondary: { label: "See how we work", href: "/playbooks" },
};

// Floating benchmark cards over the hero skyline — industry benchmarks,
// not client claims.
export const heroFloatCards = [
  { value: "3-4×", label: "Clinic lead benchmark" },
  { value: "AI-found", label: "GEO ready", accent: true },
  { value: "-30%+", label: "Target CPA" },
  { value: "<2s", label: "Load-time budget" },
  { value: "48h", label: "GEO snapshot" },
];

// --- Industries strip (marquee) ---------------------------------------

export const industries = [
  "Aesthetic Clinics",
  "Dental",
  "B2B SaaS",
  "Legal",
  "Real Estate",
  "Wellness",
];

// --- GEO Spotlight ------------------------------------------------------

export const geoSpotlight = {
  eyebrow: "Built to be found by AI",
  title: "Your customers now ask ChatGPT, not just Google",
  body: "AI answer engines are becoming a real discovery channel — and most sites are invisible to them. We build the infrastructure that puts you in the answer.",
  points: [
    {
      title: "Server-rendered content",
      desc: "Pages AI crawlers can actually read — no client-only rendering hiding your copy.",
    },
    {
      title: "Structured schema",
      desc: "Markup that tells bots exactly who you are, what you offer, and who it's for.",
    },
    {
      title: "An llms.txt file",
      desc: "A direct summary handed to AI systems instead of making them guess.",
    },
  ],
  bots: ["ChatGPT", "Perplexity", "Claude"],
  cta: { label: "See our GEO approach", href: "/expertise/geo-ai-search" },
  proof: "Our own site runs this stack",
};

// --- Services ladder (Sprint → Build → Retainer) ------------------------

export const comparisons = [
  {
    topic: "Pricing & transparency",
    bad: "Opaque retainers with no clarity on what you're paying for.",
    good: "Clear scope, measurable deliverables, and honest reporting.",
  },
  {
    topic: "Strategy & execution",
    bad: "A salesperson closes the deal; juniors do the work.",
    good: "Senior specialists who strategize and ship — same team, start to finish.",
  },
  {
    topic: "Approach",
    bad: "Cookie-cutter playbooks applied to every client.",
    good: "Infrastructure built for your business model, ICP, and revenue goals.",
  },
  {
    topic: "Channel bias",
    bad: "An ads agency will never tell you ads aren't the right channel.",
    good: "Channel-agnostic. We prioritize what actually moves pipeline for you.",
  },
  {
    topic: "Complexity",
    bad: "Dashboards, jargon, and vanity metrics that look impressive but don't convert.",
    good: "Simple systems. Every element tied to acquisition, conversion, or retention.",
  },
  {
    topic: "Reporting",
    bad: "Monthly PDFs that sit unread in your inbox.",
    good: "Live dashboards and weekly insights you can act on immediately.",
  },
];

// Full content for the /services pages (Faz 5). One source: the homepage
// ladder reads step/title/href/description/items/featured/badge; the service
// page template reads the rest. `services` order = ladder order (Sprint → Build → Retainer).
export type ServiceContent = {
  step: string;
  slug: string;
  title: string;
  href: string;
  description: string; // short — homepage ladder card
  items: string[]; // short — homepage ladder card
  featured: boolean;
  badge?: string;
  meta: { title: string; description: string };
  positioning: string; // hero sentence
  problem: string[]; // "sound familiar?" list
  fit: { goodFit: string[]; notYet: string[] };
  deliverables: { title: string; desc: string }[];
  timeline: { phase: string; label: string; detail: string }[];
  benchmarks: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
  nextStep: { slug: string; title: string; blurb: string; href: string };
};

export const services: ServiceContent[] = [
  {
    step: "01",
    slug: "diagnostic-sprint",
    title: "Diagnostic Sprint",
    href: "/services/diagnostic-sprint",
    description:
      "A focused 2-week teardown of your funnel, site, messaging and tracking — so we both know exactly what's broken before we touch anything.",
    items: [
      "Funnel & site audit",
      "Messaging & positioning review",
      "Tracking & attribution check",
      "90-day action roadmap",
    ],
    featured: false,
    meta: {
      title: "Diagnostic Sprint | Kansabi",
      description:
        "A 2-week teardown of your funnel, website, messaging and tracking — ending in a prioritised growth roadmap.",
    },
    positioning:
      "Two weeks. One goal: find out exactly where your funnel leaks. We tear down your website, ads, messaging and tracking, then hand you a prioritised roadmap you can act on — with or without us.",
    problem: [
      "You're spending on traffic and ads, but you can't say where the funnel actually leaks.",
      "The site looks fine, yet enquiries don't match the traffic you're paying for.",
      "Your tracking is a patchwork — you don't fully trust the numbers in GA4.",
      "You're about to invest in a rebuild or a big campaign and want to spend on the right thing.",
    ],
    fit: {
      goodFit: [
        "You already have traffic or ad spend — enough signal to diagnose.",
        "You want a senior second opinion before committing budget.",
        "You'd rather fix the real bottleneck than redesign on a hunch.",
      ],
      notYet: [
        "You're pre-launch with no traffic yet — start with a Foundation Build.",
        "You already know the gaps and just need someone to execute.",
      ],
    },
    deliverables: [
      {
        title: "Funnel & site audit",
        desc: "A page-by-page teardown of where visitors drop, from first click to enquiry.",
      },
      {
        title: "Messaging & positioning review",
        desc: "Whether your offer, proof and hierarchy actually land for your ICP.",
      },
      {
        title: "Tracking & attribution check",
        desc: "GA4, GTM and lead capture audited so you can trust the numbers again.",
      },
      {
        title: "90-day action roadmap",
        desc: "A prioritised, line-item plan you can run with us or hand to your own team.",
      },
    ],
    timeline: [
      {
        phase: "Days 1–3",
        label: "Access & data pull",
        detail: "Analytics, ad accounts, CRM and site access; we map the current funnel end to end.",
      },
      {
        phase: "Days 4–8",
        label: "Teardown",
        detail: "Funnel, messaging and tracking reviewed against your ICP and revenue goals.",
      },
      {
        phase: "Days 9–10",
        label: "Roadmap handover",
        detail: "A prioritised 90-day roadmap, walked through live — yours to keep either way.",
      },
    ],
    benchmarks: [
      { value: "2 weeks", label: "Fixed timeline" },
      { value: "90-day", label: "Roadmap you keep" },
      { value: "No lock-in", label: "Walk away or build" },
    ],
    faqs: [
      {
        q: "What does the Diagnostic Sprint cost?",
        a: "It's a fixed-scope, fixed-fee engagement — we confirm the exact number on a strategy call once we've seen your setup. No retainer, no lock-in, no surprises.",
      },
      {
        q: "How long does it take and how much of my time?",
        a: "Two weeks from access to roadmap. We don't need your team full-time — a kickoff call, account access, and one review session is enough.",
      },
      {
        q: "What do I actually walk away with?",
        a: "A prioritised 90-day roadmap of concrete line items across site, funnel, messaging and tracking, plus the raw findings. You can execute it with us or in-house.",
      },
      {
        q: "Do I have to build with you afterwards?",
        a: "No. The Sprint stands alone. Most clients move into a Foundation Build because the gaps are clear by then, but there's no obligation.",
      },
    ],
    nextStep: {
      slug: "foundation-build",
      title: "Foundation Build",
      blurb:
        "Once the gaps are named, the Foundation Build fixes them — a conversion site wired for search and AI.",
      href: "/services/foundation-build",
    },
  },
  {
    step: "02",
    slug: "foundation-build",
    title: "Foundation Build",
    href: "/services/foundation-build",
    description:
      "Our core engagement: a conversion-focused website plus the GEO infrastructure that gets it recommended by AI search — built once, built right.",
    items: [
      "Conversion website build",
      "GEO / AI search infrastructure",
      "Tracking & analytics setup",
      "Launch support",
    ],
    featured: true,
    badge: "Most engagements",
    meta: {
      title: "Foundation Build | Kansabi",
      description:
        "A conversion website plus GEO infrastructure — built to be found by Google and recommended by AI.",
    },
    positioning:
      "Our core engagement: a conversion-first website wired with GEO infrastructure, so your business is found on Google and recommended by ChatGPT, Perplexity and Claude. Measurable from day one.",
    problem: [
      "Your current site was built to look good, not to convert or be measured.",
      "You're invisible in AI search — ChatGPT and Perplexity don't mention you.",
      "Tracking is missing or broken, so you can't prove what marketing is working.",
      "You need one system, not five disconnected tools bolted together.",
    ],
    fit: {
      goodFit: [
        "You're ready to invest in a foundation, not another patch.",
        "You have a clear offer and want it engineered to convert.",
        "You care about being found by Google and recommended by AI.",
      ],
      notYet: [
        "You're not sure where the real problem is — start with a Diagnostic Sprint.",
        "You only need a single landing page tested — that's a focused CRO engagement.",
      ],
    },
    deliverables: [
      {
        title: "Conversion website build",
        desc: "A fast, server-rendered site engineered around your funnel — not a template.",
      },
      {
        title: "GEO / AI search infrastructure",
        desc: "Schema, llms.txt and AI-readable architecture so ChatGPT, Perplexity and Claude can cite you.",
      },
      {
        title: "Tracking & analytics setup",
        desc: "GA4, GTM and consent wired end to end so every lead is attributed correctly.",
      },
      {
        title: "Launch support",
        desc: "Go-live QA, redirects and a measurement check so nothing breaks in the handover.",
      },
    ],
    timeline: [
      {
        phase: "Week 1",
        label: "Architecture & messaging",
        detail: "Sitemap, funnel logic and positioning locked before a pixel of design.",
      },
      {
        phase: "Weeks 2–3",
        label: "Design & build",
        detail: "Conversion-first pages built server-rendered, with GEO structure baked in.",
      },
      {
        phase: "Week 4",
        label: "Tracking & GEO wiring",
        detail: "GA4/GTM, schema, llms.txt and consent connected and tested against real events.",
      },
      {
        phase: "Launch",
        label: "Go live & verify",
        detail: "QA, redirects and an end-to-end tracking check on launch day — no broken handover.",
      },
    ],
    benchmarks: [
      { value: "<2s", label: "Load-time budget" },
      { value: "AI-found", label: "GEO-ready at launch" },
      { value: "Day one", label: "Measurable tracking" },
    ],
    faqs: [
      {
        q: "How much does a Foundation Build cost?",
        a: "It's scoped per project and depends on page count and integrations. We give a fixed quote after a strategy call or a Diagnostic Sprint, so there are no surprises mid-build.",
      },
      {
        q: "How long until we launch?",
        a: "Most builds go live in three to six weeks once content and access are ready. You get a week-by-week plan up front so you always know what's next.",
      },
      {
        q: "What is GEO and why is it built in from the start?",
        a: "GEO — generative engine optimization — is the structure that lets AI answer engines read and recommend you: server-rendered content, schema, llms.txt and a clean architecture. We build it in rather than bolt it on later. Our own site runs this exact stack.",
      },
      {
        q: "Do you host and maintain it?",
        a: "We build on Next.js and deploy to Vercel, then hand it fully to your team or keep improving it under a Growth Retainer. No lock-in either way.",
      },
    ],
    nextStep: {
      slug: "growth-retainer",
      title: "Growth Retainer",
      blurb:
        "With the foundation live, the Growth Retainer compounds it — search, AI, paid and content, month over month.",
      href: "/services/growth-retainer",
    },
  },
  {
    step: "03",
    slug: "growth-retainer",
    title: "Growth Retainer",
    href: "/services/growth-retainer",
    description:
      "Ongoing partnership once the foundation is live — SEO, GEO, paid media and content compounding month over month.",
    items: [
      "SEO & GEO iteration",
      "Paid media management",
      "Content & topical authority",
      "Monthly reporting & roadmap",
    ],
    featured: false,
    meta: {
      title: "Growth Retainer | Kansabi",
      description:
        "An ongoing growth partnership: SEO/GEO, paid media and content compounding month over month.",
    },
    positioning:
      "Once the foundation works, we compound it: search and AI visibility, paid media and content — one senior team, one live dashboard, month over month.",
    problem: [
      "Your site works, but growth has plateaued and you need momentum.",
      "SEO, GEO, paid and content are handled by different people who don't talk.",
      "You want senior execution without hiring a full in-house team.",
      "You're tired of monthly PDFs and want to see what's actually moving.",
    ],
    fit: {
      goodFit: [
        "You have a converting foundation and want to compound it.",
        "You'd rather one senior team owned the whole growth system.",
        "You want live reporting you can act on, not slideware.",
      ],
      notYet: [
        "Your site or tracking isn't ready yet — start with a Foundation Build.",
        "You need a one-off audit, not an ongoing partnership — that's a Diagnostic Sprint.",
      ],
    },
    deliverables: [
      {
        title: "SEO & GEO iteration",
        desc: "Ongoing technical, content and AI-visibility work so you keep getting found.",
      },
      {
        title: "Paid media management",
        desc: "Google and Meta run toward pipeline, not vanity clicks.",
      },
      {
        title: "Content & topical authority",
        desc: "Content clusters that compound organic and AI recommendation together.",
      },
      {
        title: "Monthly reporting & roadmap",
        desc: "A live dashboard plus a clear next-month plan — no unread PDFs.",
      },
    ],
    timeline: [
      {
        phase: "Every month",
        label: "Plan",
        detail: "Priorities set against pipeline goals, not a fixed checklist.",
      },
      {
        phase: "Ongoing",
        label: "Execute",
        detail: "Search, GEO, paid and content shipped by one senior team.",
      },
      {
        phase: "Weekly",
        label: "Measure",
        detail: "A live dashboard: we double down on what's moving and cut what isn't.",
      },
      {
        phase: "Monthly",
        label: "Review & re-plan",
        detail: "What worked, what's next — no surprises, no lock-in.",
      },
    ],
    benchmarks: [
      { value: "Monthly", label: "Rolling, no lock-in" },
      { value: "1 team", label: "Senior, end to end" },
      { value: "Live", label: "Dashboard, not PDFs" },
    ],
    faqs: [
      {
        q: "How does retainer pricing work?",
        a: "A flat monthly fee scoped to the channels and workload you need, agreed up front. It rolls month to month — no twelve-month lock-in.",
      },
      {
        q: "Is there a minimum commitment?",
        a: "We ask for a short initial ramp so the work can start compounding, then it's rolling. You can pause or leave with notice.",
      },
      {
        q: "What channels does it cover?",
        a: "Typically SEO, GEO, paid media and content — but it's channel-agnostic. We prioritise what moves your pipeline, not what fills a report.",
      },
      {
        q: "How do we track results?",
        a: "A live dashboard tied to pipeline, plus a monthly review. You see the same numbers we do, whenever you want.",
      },
    ],
    nextStep: {
      slug: "diagnostic-sprint",
      title: "Diagnostic Sprint",
      blurb:
        "Not sure the foundation is ready to scale? A Diagnostic Sprint pinpoints what to fix first.",
      href: "/services/diagnostic-sprint",
    },
  },
];

export function getService(slug: string): ServiceContent {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}

// --- GEO / AI Search — flagship expertise page (Faz 6) -------------------
// The one expertise page where "our own site runs this stack" becomes
// clickable proof: the approach layers link to Kansabi's real live
// endpoints (/llms.txt, /robots.txt) built in Faz 3.

export const geoExpertise = {
  eyebrow: "Expertise — Search & AI Visibility",
  title: "Get recommended by ChatGPT, Perplexity and Claude",
  subtitle:
    "Answer engines are the new discovery channel — and most sites are invisible to them. GEO is the infrastructure that puts your business inside the answer, not on a results page your buyers have stopped scrolling.",
  primaryCta: { label: "Get your free GEO snapshot", href: "/contact" },
  secondaryCta: { label: "See the stack", href: "#stack" },
  proof: "Our own site runs this stack",

  problem: {
    eyebrow: "Invisible to AI",
    heading: "You're not losing traffic. You're missing from the answer.",
    symptoms: [
      {
        title: "Competitors show up in AI answers. You don't.",
        desc: "Someone asks ChatGPT for the best option in your space — a rival gets named, and you're not in the room.",
      },
      {
        title: "Your pages are client-rendered — bots see a blank page.",
        desc: "If your copy only appears after JavaScript runs, AI crawlers read nothing and move on.",
      },
      {
        title: "No schema, no llms.txt — AI is guessing who you are.",
        desc: "Without structured signals, answer engines infer your business from scraps, or skip you entirely.",
      },
    ],
  },

  stack: {
    eyebrow: "The approach",
    heading: "Five layers — running live on this page",
    body: "Not an abstract promise. Every layer below is the exact infrastructure this site runs. Where you see a live link, that's our own endpoint — go read it.",
    layers: [
      {
        n: "1",
        title: "Server-rendered content",
        desc: "Full HTML in the first response, so crawlers read your copy without executing a line of JavaScript.",
        proof: { label: "This page ships full HTML", href: null },
      },
      {
        n: "2",
        title: "Structured schema",
        desc: "Organization, Service and FAQ JSON-LD that tells AI exactly who you are and what you offer.",
        proof: { label: "Service + FAQPage in this page's source", href: null },
      },
      {
        n: "3",
        title: "An llms.txt file",
        desc: "A direct, machine-readable summary handed to AI systems instead of making them guess.",
        proof: { label: "View /llms.txt", href: "/llms.txt" },
      },
      {
        n: "4",
        title: "AI-readable architecture",
        desc: "Clean routes and deliberate internal linking so answer engines can map how your pages relate.",
        proof: { label: "Clean, crawlable routes", href: null },
      },
      {
        n: "5",
        title: "Crawler allowlist",
        desc: "AI user-agents explicitly welcomed in robots — not blocked by default like most stacks.",
        proof: { label: "View /robots.txt", href: "/robots.txt" },
      },
    ],
    // Matches the 8 AI user-agents allowlisted in robots.ts (Faz 3).
    bots: [
      "GPTBot",
      "OAI-SearchBot",
      "ChatGPT-User",
      "PerplexityBot",
      "ClaudeBot",
      "Claude-Web",
      "anthropic-ai",
      "Google-Extended",
    ],
  },

  deliverables: {
    eyebrow: "What you get",
    heading: "Concrete outputs, not AI magic",
    body: "GEO ships inside every Foundation Build. As a standalone engagement, here's exactly what lands.",
    items: [
      {
        title: "GEO visibility audit",
        desc: "Which questions your buyers ask AI, and who gets recommended when they do.",
      },
      {
        title: "SSR & architecture fixes",
        desc: "Client-rendered pages rebuilt so crawlers actually read them.",
      },
      {
        title: "Schema implementation",
        desc: "Organization, Service and FAQ JSON-LD wired across the pages that matter.",
      },
      {
        title: "llms.txt + crawler allowlist",
        desc: "A machine-readable summary plus an AI-friendly robots policy, deployed live.",
      },
      {
        title: "Citation & mention tracking",
        desc: "A report on where you surface across AI engines, tracked over time.",
      },
    ],
  },

  benchmarks: [
    { value: "48h", label: "GEO snapshot" },
    { value: "8", label: "AI crawlers allowlisted" },
    { value: "<2s", label: "SSR-first load" },
  ],
  benchmarkNote:
    "Our own site runs this stack. Figures are engagement terms and industry benchmarks — not claims about a specific past client.",

  faqs: [
    {
      q: "What is GEO, and how is it different from SEO?",
      a: "SEO gets you ranked in a list of blue links. GEO — generative engine optimization — gets you named inside the answer an AI gives directly. Same goal, a different surface: structured content AI can read, cite and recommend, rather than a page a human has to scroll to.",
    },
    {
      q: "How do you measure AI visibility?",
      a: "We run the real questions your buyers ask across ChatGPT, Perplexity and Claude, log whether you're mentioned or cited, and track it over time. You get a before/after read on your presence in the answer — not a vanity keyword rank.",
    },
    {
      q: "Which AI engines does this cover?",
      a: "The major answer engines — ChatGPT and OpenAI's search, Perplexity, Claude, and Google's AI surfaces. The underlying work (SSR, schema, llms.txt, a crawler allowlist) is engine-agnostic, so new engines pick you up as they launch.",
    },
    {
      q: "How soon do results show?",
      a: "The GEO snapshot lands in 48 hours. Infrastructure fixes deploy within the engagement; visible movement in AI answers follows as engines re-crawl — typically weeks, not months, once the signals are in place.",
    },
  ],

  cta: {
    heading: "Is AI recommending your business? Find out in 48h.",
    body: "A free GEO snapshot: we run your buyers' questions across the major answer engines and show you exactly where you stand. No pitch, no lock-in.",
    label: "Get your free GEO snapshot",
    href: "/contact",
    crossSell: {
      title: "Foundation Build",
      blurb:
        "GEO is built into every Foundation Build from day one — the full conversion site plus this exact stack.",
      href: "/services/foundation-build",
    },
  },
};

// --- Expertise — 3 pillars, 12 items, 4 launched -------------------------

export const expertise = [
  {
    pillar: "Web & Experience",
    items: [
      {
        title: "Conversion Websites",
        desc: "Fast, measurable sites wired into your sales system.",
        href: "/expertise/conversion-websites",
      },
      {
        title: "Landing Pages & CRO",
        desc: "Pages that are tested and keep improving.",
        href: "/expertise/cro-landing-pages",
      },
      {
        title: "Ecommerce & Booking Flows",
        desc: "Checkout and intake flows built to convert, not just look good.",
      },
      {
        title: "Design Systems & Brand Sites",
        desc: "Component libraries that keep premium brands consistent at scale.",
      },
    ],
  },
  {
    pillar: "Search & AI Visibility",
    items: [
      {
        title: "GEO — AI Search Optimization",
        desc: "Get recommended by ChatGPT, Perplexity and Claude.",
        href: "/expertise/geo-ai-search",
      },
      {
        title: "Technical SEO",
        desc: "Crawlability, schema, and Core Web Vitals that keep you indexable.",
      },
      {
        title: "Content & Topical Authority",
        desc: "Content clusters that compound organic and AI visibility together.",
      },
      {
        title: "Local & Multi-Location SEO",
        desc: "Google Business Profiles and local schema for multi-site brands.",
      },
    ],
  },
  {
    pillar: "Demand & Systems",
    items: [
      {
        title: "Paid Media",
        desc: "Google & Meta — pipeline, not just clicks.",
        href: "/expertise/paid-media",
      },
      {
        title: "Tracking & Attribution",
        desc: "GA4, GTM and CRM pipelines so no lead vanishes unseen.",
      },
      {
        title: "Marketing Automation",
        desc: "Lifecycle flows and CRM automation that nurture without headcount.",
      },
      {
        title: "Reporting Dashboards",
        desc: "Live dashboards instead of monthly PDFs nobody reads.",
      },
    ],
  },
];

// --- Process — first 90 days ---------------------------------------------

export const processSteps = [
  {
    step: "01",
    phase: "Week 0 — Kickoff",
    title: "Kickoff & KPI alignment",
    description:
      "Introductions, access setup, goal alignment, and KPI definition. We set the rhythm for collaboration.",
    tags: ["Day 0", "KPI alignment"],
  },
  {
    step: "02",
    phase: "Weeks 1–2 — Diagnostic Sprint",
    title: "Full infrastructure audit",
    description:
      "Deep-dive into your website, funnel, messaging, and tracking — the gaps get named, not guessed at.",
    tags: ["Site", "Funnel", "Tracking"],
  },
  {
    step: "03",
    phase: "Weeks 3–6 — Build: site + GEO",
    title: "Conversion website + GEO infrastructure",
    description:
      "The Foundation Build: a website engineered to convert, structured so AI search engines can find and recommend it.",
    tags: ["Website", "GEO", "Schema"],
  },
  {
    step: "04",
    phase: "Weeks 6–8 — Launch & quick wins",
    title: "Ship, measure, optimize",
    description:
      "Go live, verify tracking end to end, and land the first round of CRO and channel quick wins.",
    tags: ["Launch", "CRO"],
  },
  {
    step: "05",
    phase: "Week 8+ — Retainer",
    title: "Compound growth",
    description:
      "SEO, GEO, paid media and content compounding month over month — always tied back to pipeline.",
    tags: ["Ongoing", "Compounding"],
  },
];

// --- Playbooks — honest, sample engagements (no invented case studies) --

export const playbooks = [
  {
    sector: "Aesthetic Clinic",
    title: "The Aesthetic Clinic Playbook",
    thesis:
      "How we'd take a London clinic from referral-only to a measurable acquisition system.",
    benchmarks: ["3-4× lead benchmark", "90-day build"],
    href: "/playbooks",
  },
  {
    sector: "B2B SaaS",
    title: "The B2B SaaS Playbook",
    thesis: "From founder-led sales to a repeatable pipeline engine.",
    benchmarks: ["Pipeline-first", "GEO-ready launch"],
    href: "/playbooks",
  },
];

export const playbooksNote =
  "Sample engagement — this is our exact process, not a past client.";

// --- FAQ -------------------------------------------------------------

export const faqs = [
  {
    q: "Who is Kansabi for?",
    a: "Premium UK-based clinics, B2B SaaS companies, and high-LTV brands that need a measurable website and acquisition system — not another agency retainer.",
  },
  {
    q: "How is Kansabi different from a typical agency?",
    a: "We don't sell complexity. We build infrastructure — a conversion website, GEO, tracking and paid media connected into one system. Senior specialists only. Channel-agnostic.",
  },
  {
    q: "What's the minimum engagement?",
    a: "Most engagements start with a Diagnostic Sprint or go straight into a Foundation Build if the gaps are already clear. We'll recommend the right entry point on a strategy call — no lock-in contracts.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We operate from the UK with clients across UK, EU, Australia, and beyond. Contracts under English law, payments via Wise Business.",
  },
  {
    q: "What tools and platforms do you use?",
    a: "Google Ads, Meta Ads, GA4, GTM, HubSpot, Next.js, and custom reporting dashboards — always chosen for your stack, not ours.",
  },
  {
    q: "What happens in a Diagnostic Sprint?",
    a: "Two weeks, one output: a clear picture of what's broken across your funnel, site, messaging and tracking, plus a 90-day roadmap — no slideware, just line items you can act on immediately.",
  },
  {
    q: "Why does GEO matter for my business?",
    a: "Your customers are starting to ask ChatGPT and Perplexity for recommendations, not just Google. If your site isn't built to be read and cited by AI crawlers, you're invisible in that conversation — GEO is how we fix that.",
  },
  {
    q: "Do you have case studies?",
    a: "Not yet, and we won't invent them. Our playbooks show the exact process we'd run for your sector, with industry benchmarks instead of fabricated numbers — once we have real client results, we'll publish them honestly.",
  },
];

export const trustItems = [
  "No juniors — senior team, start to finish",
  "No lock-in contracts",
  "Transparent scope & fixed pricing",
];
