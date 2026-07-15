import { ExternalLink, Check, Minus, Lock } from "lucide-react";
import { PageHeader } from "@/components/dashboard/ui";
import { RevalidateButton } from "@/components/dashboard/revalidate-button";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

// SECURITY: this is a Server Component. It reads process.env only to compute a
// boolean (present / absent) and never puts a secret value into the rendered
// output — nothing here crosses to the client bundle. Real values live solely
// in the Vercel project env (server-side); the repo never carries them and the
// dashboard never displays or accepts them.
type EnvCheck = {
  name: string;
  label: string;
  secret: boolean;
  present: boolean;
  required: boolean;
};

function readEnvHealth(): EnvCheck[] {
  return [
    {
      name: "DATABASE_URL",
      label: "Neon database connection",
      secret: true,
      required: true,
      present: Boolean(process.env.DATABASE_URL),
    },
    {
      name: "PAYLOAD_SECRET",
      label: "Payload signing secret",
      secret: true,
      required: true,
      // Treat a too-short secret as not properly configured.
      present: (process.env.PAYLOAD_SECRET?.length ?? 0) >= 32,
    },
    {
      name: "NEXT_PUBLIC_SITE_URL",
      label: "Public site URL",
      secret: false,
      required: true,
      present: Boolean(process.env.NEXT_PUBLIC_SITE_URL),
    },
    {
      name: "NEXT_PUBLIC_GTM_ID",
      label: "Google Tag Manager container",
      secret: false,
      required: false,
      present: Boolean(process.env.NEXT_PUBLIC_GTM_ID),
    },
  ];
}

const EXTERNAL_LINKS = [
  { title: "Payload Admin", description: "Content, users, media", href: "/admin" },
  { title: "Neon Console", description: "Database & branches", href: "https://console.neon.tech" },
  { title: "Vercel Dashboard", description: "Deploys & env vars", href: "https://vercel.com/dashboard" },
];

export default function SettingsPage() {
  const env = readEnvHealth();

  return (
    <>
      <PageHeader
        label="Settings"
        title="Environment & maintenance"
        description="Configuration health and one-click content refresh — without dropping to a terminal."
      />

      <div className="mb-4 flex items-center justify-between">
        <p className="label">Environment variables</p>
        <span className="inline-flex items-center gap-1.5 text-xs text-fog">
          <Lock size={11} /> presence only · values never shown
        </span>
      </div>

      <div className="mb-10 divide-y divide-cloud rounded-xl border border-cloud bg-pure">
        {env.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-4 px-5 py-3.5"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <code className="text-xs text-soft-black">{item.name}</code>
                {item.secret && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-cloud bg-warm-white px-2 py-0.5 text-[10px] uppercase tracking-wide text-fog">
                    <Lock size={9} /> secret
                  </span>
                )}
                {!item.required && (
                  <span className="text-[10px] uppercase tracking-wide text-fog">
                    optional
                  </span>
                )}
              </div>
              <p className="mt-0.5 truncate text-xs text-fog">{item.label}</p>
            </div>
            <span
              className={cn(
                "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
                item.present
                  ? "border-cloud bg-warm-white text-soft-black"
                  : item.required
                    ? "border-red-200 bg-red-50 text-red-600"
                    : "border-cloud bg-warm-white text-fog"
              )}
            >
              {item.present ? <Check size={12} /> : <Minus size={12} />}
              {item.present ? "Set" : item.required ? "Missing" : "Not set"}
            </span>
          </div>
        ))}
      </div>

      <div className="mb-10 rounded-xl border border-cloud bg-pure p-5">
        <p className="text-sm font-medium text-soft-black">Revalidate site</p>
        <p className="mb-4 mt-1 max-w-lg text-xs text-zen-accent">
          Flush the ISR cache so the public site rebuilds with the latest CMS
          content on the next request.
        </p>
        <RevalidateButton />
      </div>

      <p className="label mb-3">Consoles</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {EXTERNAL_LINKS.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <a
              key={link.title}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-start justify-between gap-3 rounded-xl border border-cloud bg-pure px-4 py-3.5 transition-colors hover:border-fog"
            >
              <div>
                <p className="text-sm font-medium text-soft-black">{link.title}</p>
                <p className="mt-0.5 text-xs text-fog">{link.description}</p>
              </div>
              <ExternalLink size={13} className="mt-0.5 shrink-0 text-fog" />
            </a>
          );
        })}
      </div>
    </>
  );
}
