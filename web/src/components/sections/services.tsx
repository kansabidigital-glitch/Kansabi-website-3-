"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-cloud bg-pure py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label">Our Services</p>
        </FadeIn>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
          <TextReveal text="Sprint. Build. Retainer." delay={0.05} />
        </h2>
        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-xl text-lg text-zen-accent">
            A ladder, not a menu. Diagnose the gaps, build the foundation,
            then compound what works — start wherever you actually are.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-end gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.08 * i}>
              <a
                href={service.href}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border p-7 transition-shadow",
                  service.featured
                    ? "border-stone-gray bg-pure shadow-[0_16px_40px_rgba(28,28,28,0.1)] md:-translate-y-5"
                    : "border-cloud bg-warm-white hover:shadow-[0_8px_24px_rgba(28,28,28,0.06)]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="label text-fog">{service.step}</span>
                  {service.badge && (
                    <span className="rounded-full border border-cloud bg-pure px-2.5 py-1 text-[11px] font-medium text-stone-gray">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-2xl font-light tracking-tight text-soft-black">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zen-accent">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-stone-gray"
                    >
                      <span className="h-1 w-1 rounded-full bg-cloud" />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-soft-black transition-colors group-hover:text-accent">
                  Learn more
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
