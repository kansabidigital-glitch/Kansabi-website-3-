"use client";

import { comparisons } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Spotlight } from "@/components/ui/spotlight";

export function WhySection() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label">Why Kansabi</p>
        </FadeIn>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
          <TextReveal text="Most agencies sell complexity." delay={0.1} />
          <br />
          <TextReveal text="We build clarity." delay={0.35} />
        </h2>
        <FadeIn delay={0.2}>
          <p className="mt-5 max-w-xl text-lg text-zen-accent">
            Confusing retainers, junior execution, and channel bias — we built
            Kansabi to be the opposite.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((row, i) => (
            <FadeIn key={row.topic} delay={0.05 * i}>
              <Spotlight className="h-full rounded-xl">
                <div className="flex h-full flex-col rounded-xl border border-cloud bg-pure p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(28,28,28,0.06)]">
                  <p className="text-sm font-medium text-soft-black">
                    {row.topic}
                  </p>
                  <div className="mt-4 space-y-4 flex-1">
                    <div>
                      <p className="label mb-1.5 text-fog">Usual way</p>
                      <p className="text-sm leading-relaxed text-fog">
                        {row.bad}
                      </p>
                    </div>
                    <div className="border-t border-cloud pt-4">
                      <p className="label mb-1.5 text-stone-gray">
                        Kansabi way
                      </p>
                      <p className="text-sm leading-relaxed text-stone-gray">
                        {row.good}
                      </p>
                    </div>
                  </div>
                </div>
              </Spotlight>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
