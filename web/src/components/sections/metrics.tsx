"use client";

import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { FadeIn } from "@/components/ui/text-reveal";
import { metrics } from "@/data/site-content";
import { Spotlight } from "@/components/ui/spotlight";

const partners = [
  "Premium Clinics",
  "B2B SaaS",
  "Wellness Brands",
  "E-commerce",
  "Real Estate",
  "Professional Services",
];

export function MetricsSection() {
  return (
    <section className="border-y border-cloud bg-pure/50 pb-16 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label mb-8 text-center md:text-left">
            Trusted by premium brands across UK & beyond
          </p>
        </FadeIn>
        <InfiniteMarquee items={partners} className="mb-14" speed={35} />

        <FadeIn delay={0.1}>
          <p className="label mb-5">Selected outcomes from client partnerships</p>
        </FadeIn>

        <div className="grid gap-px overflow-hidden rounded-xl border border-cloud bg-cloud sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={m.label} delay={0.05 * i}>
              <Spotlight className="h-full">
                <div className="h-full bg-pure p-6 transition-colors hover:bg-warm-white">
                  <p className="label mb-3">{m.label}</p>
                  <p className="text-[1.75rem] font-light tracking-tight text-soft-black">
                    {m.value}
                  </p>
                  <p className="mt-1 text-sm text-fog">{m.desc}</p>
                </div>
              </Spotlight>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
