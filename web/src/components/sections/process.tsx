"use client";

import { processSteps } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Spotlight } from "@/components/ui/spotlight";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-y border-cloud bg-pure py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label">Your First 90 Days</p>
        </FadeIn>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
          <TextReveal text="From kickoff to compounding growth" />
        </h2>
        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-xl text-lg text-zen-accent">
            No fancy frameworks. A clear picture of what Sprint, Build and
            Retainer actually look like week by week.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <FadeIn
              key={step.step}
              delay={0.06 * i}
              className={i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}
            >
                <Spotlight className="h-full rounded-2xl">
                  <div
                    className={`flex h-full flex-col rounded-2xl border border-cloud bg-warm-white p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(28,28,28,0.05)] ${
                      i === 0 ? "md:p-8 md:justify-between" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cloud bg-pure text-xs font-medium text-stone-gray">
                        {step.step}
                      </span>
                      {i === 0 && (
                        <span className="label text-fog">90-day roadmap</span>
                      )}
                    </div>
                    <div className={i === 0 ? "mt-auto pt-8" : "mt-4"}>
                      <p className="label">{step.phase}</p>
                      <h3
                        className={`mt-2 font-light tracking-tight text-soft-black ${
                          i === 0 ? "text-2xl md:text-3xl" : "text-lg"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zen-accent">
                        {step.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1.5 rounded-full border border-cloud bg-pure px-2.5 py-1 text-xs text-stone-gray"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-soft-black" />
                            {tag}
                          </span>
                        ))}
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
