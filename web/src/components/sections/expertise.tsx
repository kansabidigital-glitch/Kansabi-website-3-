"use client";

import { expertise } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";

export function ExpertiseSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label">Our Expertise</p>
        </FadeIn>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
          <TextReveal text="Every channel. Every discipline. Zero bias." />
        </h2>
        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-xl text-lg text-zen-accent">
            We cover the full spectrum — so we honestly prioritize what works.
            No upsell. No agenda.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {expertise.map((col, i) => (
            <FadeIn key={col.pillar} delay={0.1 * i}>
              <div>
                <h3 className="border-b border-cloud pb-3 text-xl text-soft-black">
                  {col.pillar}
                </h3>
                <ul className="mt-5 space-y-5">
                  {col.items.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm font-medium text-soft-black">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-fog">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
