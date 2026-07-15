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

// --- CRO / Landing Pages expertise (Faz 7) --------------------------------
// The shared expertise-page template: hero + problem + approach + deliverables
// + benchmarks + FAQ + CTA. Content differs per pillar; the structure is reused
// (geoExpertise above follows the same shape).

export const croExpertise = {
  eyebrow: "Expertise — Landing Pages & CRO",
  title: "Pages that convert, not just impress",
  subtitle:
    "A beautiful page that doesn't convert is just expensive decoration. We run a test-and-learn loop — audit, hypotheses, A/B tests, ship — so your landing pages get measurably better every month.",
  primaryCta: { label: "Book a strategy call", href: "/contact" },
  secondaryCta: { label: "See the process", href: "#process" },
  proof: "Every change tied to a number, not a hunch",

  problem: {
    eyebrow: "The bottleneck",
    heading: "Traffic isn't the problem. What happens after the click is.",
    symptoms: [
      {
        title: "Ads get clicked. Nobody books.",
        desc: "You're paying for visits that land, glance, and leave — spend climbs but the enquiries don't follow.",
      },
      {
        title: "Mobile visitors bounce before they read.",
        desc: "Most of your traffic is on a phone, and a page that looks fine on desktop falls apart on a small screen.",
      },
      {
        title: "No idea which page actually works.",
        desc: "Nothing is tested or measured, so every design call is a guess and every 'improvement' is a gamble.",
      },
    ],
  },

  loop: {
    eyebrow: "The approach",
    heading: "Conversion is a loop, not a one-off redesign",
    body: "We don't redesign on taste and hope. We measure what visitors actually do, form a hypothesis, test it against the current page with real traffic, and ship only what wins — then start again. Small gains compound.",
    steps: [
      {
        n: "1",
        title: "Audit & heatmaps",
        desc: "We watch where real visitors click, scroll and drop off — not where we assume they do.",
        tool: "GA4 · Clarity / Hotjar",
      },
      {
        n: "2",
        title: "Hypotheses",
        desc: "Findings become a prioritised backlog of testable changes, ranked by expected impact and effort.",
        tool: "Prioritised backlog",
      },
      {
        n: "3",
        title: "A/B test",
        desc: "Each change runs against the current page with live traffic, so the winner is decided by data, not opinion.",
        tool: "Split-test framework",
      },
      {
        n: "4",
        title: "Ship & compound",
        desc: "Winners go live, learnings feed the next round, and the page keeps getting better every cycle.",
        tool: "Ship winners, repeat",
      },
    ],
  },

  deliverables: {
    eyebrow: "What you get",
    heading: "Concrete outputs, not consulting smoke",
    body: "CRO runs inside every Growth Retainer. As a focused engagement, here's exactly what lands.",
    items: [
      {
        title: "Conversion audit report",
        desc: "A page-by-page read on where visitors hesitate and drop, backed by heatmaps and session data.",
      },
      {
        title: "Prioritised hypothesis backlog",
        desc: "A ranked list of testable changes, so we always work on the highest-impact bet first.",
      },
      {
        title: "Redesigned landing pages",
        desc: "The pages that matter, rebuilt around a single conversion goal — mobile-first.",
      },
      {
        title: "Test infrastructure setup",
        desc: "A/B testing and analytics wired in, so every future change can be measured, not guessed.",
      },
      {
        title: "Monthly iteration report",
        desc: "What we tested, what won, and what's next — the loop, documented, every month.",
      },
    ],
  },

  benchmarks: [
    { value: "20–40%", label: "uplift band, well-run programs" },
    { value: "30 days", label: "to first live test" },
    { value: "Mobile-1st", label: "every rebuild" },
  ],
  benchmarkNote:
    "Figures are industry benchmarks for well-structured CRO programs and engagement terms — not claims about a specific past client.",

  faqs: [
    {
      q: "How long until I see results?",
      a: "The first test is usually live within 30 days — audit and setup come first. Meaningful uplift compounds over a few test cycles rather than landing overnight; CRO is a loop, and the gains stack as you keep iterating.",
    },
    {
      q: "Do you redesign the whole page or optimise what's there?",
      a: "Both, depending on what the data says. Sometimes a single headline or form change wins; sometimes the page needs a rebuild. We start from evidence — heatmaps, session recordings, funnel drop-off — not a blanket 'redesign everything'.",
    },
    {
      q: "What tools do you use?",
      a: "GA4 and Google Tag Manager for measurement, Microsoft Clarity or Hotjar for heatmaps and session recordings, and a split-testing framework for the experiments. We work with your existing stack where it makes sense rather than forcing new tools.",
    },
    {
      q: "Does this work if I don't have much traffic?",
      a: "Low traffic means classic A/B tests take longer to reach significance, so we lean on qualitative signals — heatmaps, recordings, direct feedback — and higher-confidence structural fixes first. If you're pre-launch with no traffic at all, a Diagnostic Sprint or Foundation Build is the better starting point.",
    },
  ],

  cta: {
    heading: "Not sure where your funnel leaks? A Diagnostic Sprint finds it in two weeks.",
    body: "Before we touch a pixel, we map exactly where visitors drop — funnel, messaging and tracking — and hand you a prioritised roadmap. No pitch, no lock-in.",
    label: "Book an intro call",
    href: "/contact",
    crossSell: {
      title: "Diagnostic Sprint",
      blurb:
        "A focused 2-week teardown that pinpoints where your funnel leaks before any redesign begins.",
      href: "/services/diagnostic-sprint",
    },
  },
};

// --- Conversion Websites expertise (Faz 8) --------------------------------
// Same shared template as croExpertise (hero + problem + approach + deliverables
// + benchmarks + FAQ + CTA), content adapted to "building a website that sells".
// Difference from CRO: the hero mock is before/after, and `approach` is a linear
// build sequence (no loop-back — a site is built once, in order).

export const conversionExpertise = {
  eyebrow: "Expertise — Conversion Websites",
  title: "A website that sells, not just sits there",
  subtitle:
    "A site that looks good but brings no enquiries is expensive decoration. We build fast, clear, single-action websites — where every page has a job and every visit is accounted for.",
  primaryCta: { label: "Book a strategy call", href: "/contact" },
  secondaryCta: { label: "See the approach", href: "#process" },
  proof: "Message, structure, speed and tracking — engineered together",

  problem: {
    eyebrow: "The problem",
    heading: "It looks good. It just doesn't sell.",
    symptoms: [
      {
        title: "Beautiful, but no enquiries",
        desc: "The design wins compliments and loses buyers — nothing on the page tells a visitor why you, or what to do next.",
      },
      {
        title: "Slow and bloated on mobile",
        desc: "Most of your visitors are on a phone, and a heavy, sluggish page loses them before the first line is read.",
      },
      {
        title: "No clear next step",
        desc: "Every page ends in a shrug. With no single, obvious action, interested visitors drift off instead of reaching out.",
      },
    ],
  },

  approach: {
    eyebrow: "The approach",
    heading: "Conversion is built in, not bolted on",
    body: "A site that sells isn't a matter of taste. We build it in order — get the message right, structure the journey, engineer the speed, then wire in what proves it works. Each layer sets up the next.",
    steps: [
      {
        n: "1",
        title: "Message & positioning",
        desc: "We get clear on who it's for and why you — the words that make a visitor lean in before a single pixel is placed.",
        tool: "Positioning & copy",
      },
      {
        n: "2",
        title: "Structure & UX",
        desc: "Every page gets one job and one obvious next step, laid out so the eye follows the path you want it to.",
        tool: "Journey & wireframes",
      },
      {
        n: "3",
        title: "Speed & build",
        desc: "Built lean on a modern stack — Core Web Vitals green, fast on the phone where most of your traffic lives.",
        tool: "Next.js · CWV-green",
      },
      {
        n: "4",
        title: "Convert & measure",
        desc: "Clear calls to action, forms wired to your pipeline, and analytics in place so every visit is accounted for.",
        tool: "GA4 · tracking wired in",
      },
    ],
  },

  deliverables: {
    eyebrow: "What you get",
    heading: "A finished site, not a folder of mockups",
    body: "A Foundation Build ships a complete, conversion-ready website. Here's exactly what lands.",
    items: [
      {
        title: "Conversion-focused website",
        desc: "A complete site where every page is built around a single, clear action — not a gallery of pretty templates.",
      },
      {
        title: "Message & copywriting",
        desc: "Positioning and words that do the selling, written for your buyer — not filler you have to rewrite later.",
      },
      {
        title: "CWV-green performance",
        desc: "Built lean for fast first loads and green Core Web Vitals, mobile-first, so speed never costs you a visitor.",
      },
      {
        title: "SEO & GEO built in",
        desc: "Structured data, an AI-crawler allowlist and tracking embedded from day one — the same stack our own site runs.",
      },
      {
        title: "CMS & handover",
        desc: "A clean content model and a walkthrough, so your own team can update the site without coming back to us.",
      },
    ],
  },

  benchmarks: [
    { value: "CWV green", label: "Core Web Vitals target" },
    { value: "<2s", label: "first-load target" },
    { value: "Mobile-1st", label: "every build" },
  ],
  benchmarkNote:
    "Figures are engineering targets and industry benchmarks for well-built sites — not claims about a specific past client.",

  faqs: [
    {
      q: "How long does a build take?",
      a: "A focused Foundation Build typically ships in a few weeks, depending on page count and how ready the content is. We scope it precisely before starting, so the timeline is a commitment rather than a guess — and message and structure are locked before any build begins.",
    },
    {
      q: "Do you write the copy?",
      a: "Yes. Positioning and copywriting are part of the build, not an add-on — a site that sells starts with the words. We work from what you have plus interviews with you; you're not handed empty templates to fill in yourself.",
    },
    {
      q: "What platform and tech do you use?",
      a: "We build on a modern, fast stack — typically Next.js with a headless CMS — chosen for speed, green Core Web Vitals and clean handover. If you have a strong reason to stay on a specific platform, we'll talk it through rather than force a rebuild.",
    },
    {
      q: "Do SEO and GEO come built in?",
      a: "Yes. Structured data (JSON-LD), an AI-crawler allowlist, clean semantic markup and analytics are wired in from the start — the same GEO stack our own site runs. You're not paying for an SEO retrofit six months later.",
    },
  ],

  cta: {
    heading:
      "Ready for a site that actually sells? The Foundation Build is where it starts.",
    body: "The Foundation Build is our core engagement — message, structure, speed and tracking, engineered into one conversion-ready site. No template, no agency smoke.",
    label: "Book an intro call",
    href: "/contact",
    crossSell: {
      title: "Foundation Build",
      blurb:
        "Our core engagement: a fast, measurable, conversion-ready website wired into your sales system from day one.",
      href: "/services/foundation-build",
    },
  },
};

// --- Paid Media expertise (Faz 9) -----------------------------------------
// Same shared template as conversionExpertise (hero + problem + approach +
// deliverables + benchmarks + FAQ + CTA), content adapted to "paid media that
// builds pipeline, not clicks". Difference from Conversion Websites: the hero
// mock is clicks/pipeline, and section 03 is a `loop` (like croExpertise) —
// paid media is ongoing optimisation, so the RotateCcw loop-back pill returns.

export const paidMediaExpertise = {
  eyebrow: "Expertise — Paid Media",
  title: "Paid media that builds pipeline, not just clicks",
  subtitle:
    "Right person, right offer, measured result. We run Google and Meta against qualified pipeline — not vanity clicks — and prove which spend actually turns into revenue.",
  primaryCta: { label: "Book a strategy call", href: "/contact" },
  secondaryCta: { label: "See the approach", href: "#process" },
  proof: "Every pound of spend tied to a tracked outcome",

  problem: {
    eyebrow: "The problem",
    heading: "Spend goes up. Pipeline doesn't.",
    symptoms: [
      {
        title: "Clicks you pay for, leads you don't get",
        desc: "Budget buys visits that land, glance and leave — the traffic graph climbs while the enquiries stay flat.",
      },
      {
        title: "No idea which campaign drives revenue",
        desc: "Spend is spread across platforms with no line back to booked calls, so you can't tell what to scale or what to kill.",
      },
      {
        title: "Reports full of vanity metrics",
        desc: "Impressions, CTR and CPC look busy but say nothing about pipeline — the numbers that actually pay the bills go unmeasured.",
      },
    ],
  },

  loop: {
    eyebrow: "The approach",
    heading: "Paid media is a loop, not a set-and-forget",
    body: "Ads aren't a launch you walk away from. We target the right buyer, put the right offer and page in front of them, measure what turns into pipeline, then scale the winners and cut the rest — and start again. Every cycle sharpens the last.",
    steps: [
      {
        n: "1",
        title: "Targeting & offer",
        desc: "We define who's actually worth reaching and the offer that makes them act — audience and message before a penny of budget.",
        tool: "ICP · offer angles",
      },
      {
        n: "2",
        title: "Creative & landing",
        desc: "Ads and the page they land on are built as one, so the promise in the ad is kept on the page — mobile-first.",
        tool: "Creative · landing pages",
      },
      {
        n: "3",
        title: "Measure & attribute",
        desc: "Conversions are tracked back to revenue with first-party data, so we know which spend became pipeline, not just clicks.",
        tool: "GA4 · GTM · CAPI",
      },
      {
        n: "4",
        title: "Scale & cut",
        desc: "Winners get more budget, losers get cut, and the learning feeds the next round — spend follows what actually works.",
        tool: "Budget · bid strategy",
      },
    ],
  },

  deliverables: {
    eyebrow: "What you get",
    heading: "Managed spend, not a monthly mystery",
    body: "Paid media runs inside every Growth Retainer. As a focused engagement, here's exactly what lands.",
    items: [
      {
        title: "Campaign setup & management",
        desc: "Google and Meta campaigns built, launched and actively managed — structure, audiences and creative, not a boosted post.",
      },
      {
        title: "Conversion tracking & attribution",
        desc: "GA4, GTM and server-side conversions (CAPI) wired in so every conversion ties back to spend — the same tracking stack our own site runs.",
      },
      {
        title: "Creative & landing alignment",
        desc: "Ad creative and landing pages built together, so the click keeps its promise and the visit has somewhere to convert.",
      },
      {
        title: "Budget pacing & bid strategy",
        desc: "Spend paced against results, with budgets and bids shifted toward what's producing pipeline — not left on autopilot.",
      },
      {
        title: "Live reporting dashboard",
        desc: "A live dashboard of spend, leads and pipeline — the numbers that matter, not a monthly PDF nobody reads.",
      },
    ],
  },

  benchmarks: [
    { value: "Pipeline", label: "attributed, not just clicks" },
    { value: "1st-party", label: "tracked via consent + CAPI" },
    { value: "CPL ↓", label: "trends down as the loop runs" },
  ],
  benchmarkNote:
    "These are engineering targets and industry benchmarks for well-run paid programs — not claims about a specific past client. We report on pipeline, not vanity metrics.",

  faqs: [
    {
      q: "What's the minimum ad budget?",
      a: "There's no fixed floor, but paid media needs enough spend to gather signal — very small budgets take too long to learn from. As a rough guide, a few thousand a month per platform lets the loop work; below that, a Diagnostic Sprint or an organic-first approach is usually the smarter first step. We'll tell you honestly if ads aren't your best channel yet.",
    },
    {
      q: "Google, Meta, or both?",
      a: "It depends on how your buyers actually search and scroll. Google captures existing demand — people already looking; Meta creates it — reaching the right audience before they search. Many businesses run both, but we start where your buyer is and your budget goes furthest, rather than spreading thin across every platform.",
    },
    {
      q: "Do you set up tracking too?",
      a: "Yes — tracking comes first, not as an afterthought. We wire GA4, Google Tag Manager and server-side conversion tracking (CAPI) with consent handled properly, so spend ties back to real outcomes. Running ads without this is how budgets vanish unmeasured; it's the same stack we build into every site.",
    },
    {
      q: "How is this different from a typical agency?",
      a: "Most agencies report on clicks, impressions and CTR because those numbers always look good. We report on pipeline — leads and revenue you can trace back to spend — and we'll recommend pausing or cutting paid when it isn't working. It runs as one system with your tracking and pages, not a siloed ad account.",
    },
  ],

  cta: {
    heading:
      "Ready to turn spend into pipeline? The Growth Retainer runs it as one system.",
    body: "The Growth Retainer runs paid, tracking and CRO together — so the ads, the pages they point to, and the numbers that prove them all move in the same direction. No siloed ad account, no vanity reporting.",
    label: "Book an intro call",
    href: "/contact",
    crossSell: {
      title: "Growth Retainer",
      blurb:
        "Our compounding engagement: paid, search, AI visibility and CRO run as one system, month over month.",
      href: "/services/growth-retainer",
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

// --- Playbooks — index + 2 sector detail pages (Faz 10) ------------------
// New page type — NOT the expertise template. There are no client case
// studies, so every surface is labelled "sample engagement / illustrative":
// this is how we'd approach a sector, mapped onto the Sprint → Build →
// Retainer ladder — not a record of past client results. The homepage
// showcase reads sector/title/thesis/benchmarks; the detail template reads
// the rest.

export type PlaybookContent = {
  slug: string;
  // --- homepage showcase card (unchanged fields) ---
  sector: string;
  title: string;
  thesis: string;
  benchmarks: string[];
  href: string; // /playbooks/{slug}
  // --- detail page ---
  meta: { title: string; description: string };
  heroClaim: string; // detail H1 — sector-specific promise
  situation: string; // one-sentence "the situation"
  context: string[]; // 3 sector-specific symptoms
  ladder: { step: string; service: string; href: string; detail: string }[]; // Sprint→Build→Retainer
  outcomes: { value: string; label: string }[]; // illustrative, directional
  outcomesFlag: string; // mandatory honesty flag
  services: { label: string; href: string }[]; // "what we'd bring in"
  cta: { heading: string; body: string };
};

export const playbooks: PlaybookContent[] = [
  {
    slug: "aesthetic-clinic",
    sector: "Aesthetic Clinic",
    title: "The Aesthetic Clinic Playbook",
    thesis:
      "How we'd take a London clinic from referral-only to a measurable, calendar-filling acquisition system.",
    benchmarks: ["No-shows ↓", "Bookings ↑"],
    href: "/playbooks/aesthetic-clinic",
    meta: {
      title: "Aesthetic Clinic Marketing Playbook | Kansabi",
      description:
        "How we'd build a measurable booking system for a London aesthetic clinic — a sample engagement mapped to industry benchmarks, not an invented case study.",
    },
    heroClaim: "More booked consultations, fewer no-shows",
    situation:
      "A London aesthetic clinic with a beautiful Instagram and a full treatment menu — but a booking calendar that doesn't reflect the demand.",
    context: [
      "The Instagram looks great, but the calendar doesn't fill — attention isn't turning into booked consultations.",
      "No-shows and last-minute cancellations quietly eat the diary, with no reminder or deposit system catching them.",
      "You can't tell which treatment came from which ad, so budget flows to whatever looks busy — not what actually books.",
    ],
    ladder: [
      {
        step: "01",
        service: "Diagnostic Sprint",
        href: "/services/diagnostic-sprint",
        detail:
          "We map where enquiries leak — from ad click to booked consult — and which treatments actually pay back the spend.",
      },
      {
        step: "02",
        service: "Foundation Build",
        href: "/services/foundation-build",
        detail:
          "A booking-first site and a landing page per treatment, wired with reminders, deposits and tracking you can trust.",
      },
      {
        step: "03",
        service: "Growth Retainer",
        href: "/services/growth-retainer",
        detail:
          "Month over month we run paid, CRO and content together — filling the diary with the treatments worth the chair time.",
      },
    ],
    outcomes: [
      {
        value: "No-shows ↓",
        label: "Reminders and deposits catch the diary gaps",
      },
      {
        value: "Consult → treatment ↑",
        label: "A clearer offer and structured follow-up",
      },
      {
        value: "Cost-per-booking",
        label: "Tracked per treatment, so budget follows what books",
      },
    ],
    outcomesFlag:
      "Illustrative targets based on industry benchmarks — not a specific client's results.",
    services: [
      { label: "Landing Pages & CRO", href: "/expertise/cro-landing-pages" },
      { label: "Paid Media", href: "/expertise/paid-media" },
      { label: "Conversion Websites", href: "/expertise/conversion-websites" },
    ],
    cta: {
      heading: "This is a sample playbook — yours starts with your actual numbers",
      body: "We haven't run this exact clinic. Book an intro call and we'll map your real diary, spend and treatment mix — then tell you honestly where the fastest wins are.",
    },
  },
  {
    slug: "b2b-saas",
    sector: "B2B SaaS",
    title: "The B2B SaaS Playbook",
    thesis:
      "How we'd turn founder-led sales into a repeatable, qualified-pipeline engine.",
    benchmarks: ["Demo → SQL ↑", "Sales cycle ↓"],
    href: "/playbooks/b2b-saas",
    meta: {
      title: "B2B SaaS Marketing Playbook | Kansabi",
      description:
        "How we'd turn founder-led sales into a repeatable qualified-pipeline engine — a sample engagement mapped to industry benchmarks, not an invented case study.",
    },
    heroClaim: "More qualified demos, a shorter sales cycle",
    situation:
      "A B2B SaaS team with steady signups and founder-led sales — but a pipeline that stalls between interest and a booked, qualified demo.",
    context: [
      "Traffic and signups come in, but few turn into qualified demos — the top of funnel works, the middle leaks.",
      "MQLs pile up while SQLs stay flat, and nobody can see where prospects drop between marketing and sales.",
      "Attribution is broken across tools, so you can't tell which channel or content actually creates pipeline.",
    ],
    ladder: [
      {
        step: "01",
        service: "Diagnostic Sprint",
        href: "/services/diagnostic-sprint",
        detail:
          "We trace the funnel from first touch to booked demo and find exactly where qualified pipeline is leaking.",
      },
      {
        step: "02",
        service: "Foundation Build",
        href: "/services/foundation-build",
        detail:
          "A conversion site and demo flow built to qualify, plus tracking that ties content and channels back to pipeline.",
      },
      {
        step: "03",
        service: "Growth Retainer",
        href: "/services/growth-retainer",
        detail:
          "Paid, GEO and CRO run monthly to compound qualified pipeline — not just top-of-funnel traffic.",
      },
    ],
    outcomes: [
      {
        value: "Demo → SQL ↑",
        label: "A demo flow built to qualify, not just book",
      },
      {
        value: "Sales cycle ↓",
        label: "Better-fit prospects arrive further along",
      },
      {
        value: "Pipeline attributed",
        label: "Every channel traced to real opportunities",
      },
    ],
    outcomesFlag:
      "Illustrative targets based on industry benchmarks — not a specific client's results.",
    services: [
      { label: "Paid Media", href: "/expertise/paid-media" },
      { label: "GEO & AI Search", href: "/expertise/geo-ai-search" },
      { label: "Growth Retainer", href: "/services/growth-retainer" },
    ],
    cta: {
      heading: "This is a sample playbook — yours starts with your actual numbers",
      body: "We haven't run this exact account. Book an intro call and we'll look at your real funnel, MQL→SQL leak and attribution — then tell you where pipeline is actually lost.",
    },
  },
];

export function getPlaybook(slug: string): PlaybookContent | undefined {
  return playbooks.find((p) => p.slug === slug);
}

export const playbooksNote =
  "Sample engagement — this is our exact process, not a past client.";

// Index page copy — hero, honesty ribbon, ghost card and closing CTA.
export const playbooksIndex = {
  eyebrow: "Playbooks",
  title: "How we'd approach your world",
  subtitle:
    "No client case studies to point to yet — so instead of inventing them, here's exactly how we'd run growth for sectors we know, mapped onto the Sprint → Build → Retainer ladder.",
  ribbon:
    "These are sample engagements — illustrative, not client case studies.",
  ghost: { label: "Your sector? Let's map it", href: "/services/diagnostic-sprint" },
  cta: {
    heading: "Don't see your sector?",
    body: "A Diagnostic Sprint maps your exact situation — funnel, site, tracking and spend — in two weeks. No lock-in.",
    label: "Book a Diagnostic Sprint",
    href: "/services/diagnostic-sprint",
    secondary: { label: "Book an intro call", href: "/contact" },
  },
};

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
