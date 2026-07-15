import Link from "next/link";
import {
  Globe,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Launch sidebar: only modules backed by real first-party data.
// GA4 / Ads panels return in their own faz once actually connected.
const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/leads", label: "Leads", icon: Inbox },
  { href: "/dashboard/seo", label: "SEO & GEO", icon: Search },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar({
  currentPath,
}: {
  currentPath: string;
}) {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-cloud bg-pure">
      <div className="border-b border-cloud px-5 py-5">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <span
            className="h-6 w-6 rounded-full border-[1.5px] border-soft-black border-t-transparent -rotate-45"
            aria-hidden
          />
          <span className="text-sm font-medium text-soft-black">
            Kan<span className="font-light">Sabi</span>
          </span>
        </Link>
        <p className="mt-1 text-xs text-fog">Operations Hub</p>
      </div>

      <nav className="flex-1 space-y-0.5 p-3">
        {navItems.map((item) => {
          const active = item.exact
            ? currentPath === item.href
            : currentPath.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-warm-white font-medium text-soft-black"
                  : "text-stone-gray hover:bg-warm-white hover:text-soft-black"
              )}
            >
              <item.icon size={16} className={active ? "text-soft-black" : "text-fog"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-cloud p-3">
        <a
          href="/admin"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-2 rounded-lg border border-cloud bg-warm-white px-3 py-2.5 text-sm font-medium text-soft-black transition-colors hover:border-fog"
        >
          <span className="flex items-center gap-2">
            <Globe size={16} />
            Payload CMS
          </span>
          <ExternalLink size={14} className="text-fog" />
        </a>
        <Link
          href="/"
          className="mt-2 block px-3 py-2 text-xs text-fog transition-colors hover:text-stone-gray"
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );
}
