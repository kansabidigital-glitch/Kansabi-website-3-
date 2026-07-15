import { ArrowRight } from "lucide-react";
import {
  navExpertise,
  navServices,
  geoSnapshotCard,
} from "@/data/site-content";

/* Expertise mega menu panel: 3 pillar columns + GEO snapshot highlight card. */
export function ExpertiseMegaMenu() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_220px] gap-8 p-8">
      {navExpertise.map((pillar) => (
        <div key={pillar.pillar}>
          <p className="label mb-4">{pillar.pillar}</p>
          <ul className="space-y-1">
            {pillar.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group -mx-2 block rounded-lg px-2 py-2 transition-colors hover:bg-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40"
                >
                  <span className="flex items-center gap-1.5 text-sm font-medium text-soft-black">
                    {item.label}
                    <ArrowRight
                      size={12}
                      className="opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
                      aria-hidden
                    />
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-snug text-fog">
                    {item.desc}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="rounded-xl border border-cloud bg-warm-white p-5">
        <p className="text-sm font-medium text-soft-black">
          {geoSnapshotCard.title}
        </p>
        <p className="mt-1.5 text-[13px] leading-snug text-stone-gray">
          {geoSnapshotCard.desc}
        </p>
        <a
          href={geoSnapshotCard.href}
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-soft-black px-3.5 py-2 text-[13px] font-medium text-pure transition-colors hover:bg-muted-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40"
        >
          {geoSnapshotCard.cta}
          <ArrowRight size={12} aria-hidden />
        </a>
      </div>
    </div>
  );
}

/* Services dropdown panel: 3 offer cards, one line each. */
export function ServicesDropdown() {
  return (
    <ul className="w-[340px] space-y-1 p-3">
      {navServices.map((s, i) => (
        <li key={s.href}>
          <a
            href={s.href}
            className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-warm-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-soft-black">
              <span className="text-[11px] font-normal tabular-nums text-fog">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s.label}
              <ArrowRight
                size={12}
                className="opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
                aria-hidden
              />
            </span>
            <span className="mt-0.5 block pl-6 text-[13px] leading-snug text-fog">
              {s.desc}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
