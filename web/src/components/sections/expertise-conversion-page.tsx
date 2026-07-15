"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { conversionExpertise } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const { problem, approach, deliverables, benchmarks, benchmarkNote, faqs, cta } =
  conversionExpertise;

// 01 — Before/after mock. The same site, two outcomes: a "brochure" with no next
// step, and a "built to sell" version whose clear CTA button reveals on scroll
// (opacity/transform only).
function BeforeAfterMock() {
  return (
    <div className="relative rounded-2xl border border-cloud bg-pure p-5 shadow-[0_16px_40px_rgba(28,28,28,0.06)] sm:p-6">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.14em] text-fog">
          Same page, two outcomes
        </p>
        <span className="rounded-full border border-cloud bg-warm-white px-2 py-0.5 text-[10px] font-medium tracking-wide text-stone-gray">
          Before / After
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {/* Before — the brochure: no clear action */}
        <div className="rounded-xl border border-cloud bg-warm-white p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-stone-gray">Before</span>
            <span className="text-xs tabular-nums text-fog">brochure</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-4/5 rounded-full bg-cloud" />
            <div className="h-1.5 w-3/5 rounded-full bg-cloud" />
            <div className="h-1.5 w-2/5 rounded-full bg-cloud" />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-fog">
            No next step
          </p>
        </div>

        {/* After — built to sell: one clear CTA that reveals on scroll */}
        <div className="rounded-xl border border-stone-gray bg-pure p-4 shadow-[0_8px_24px_rgba(28,28,28,0.06)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-soft-black">After</span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-soft-black">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
              built to sell
            </span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-1.5 w-3/4 rounded-full bg-fog" />
            <div className="h-1.5 w-1/2 rounded-full bg-cloud" />
          </div>
          <motion.div
            className="mt-3 h-6 w-28 rounded-md bg-soft-black"
            style={{ transformOrigin: "left" }}
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />
        </div>
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-fog">
        A clear next step turns visits into enquiries
      </p>
    </div>
  );
}

export function ExpertiseConversionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trackHero = () =>
    trackCtaClick("expertise-cw-hero", conversionExpertise.primaryCta.label);
  const trackClosing = () => trackCtaClick("expertise-cw-closing", cta.label);

  return (
    <main>
      {/* 01 — Hero: claim + before/after proof visual */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <FadeIn>
              <p className="label">{conversionExpertise.eyebrow}</p>
            </FadeIn>
            <h1 className="mt-6 max-w-2xl text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.08] tracking-tight text-soft-black">
              <TextReveal text={conversionExpertise.title} delay={0.05} />
            </h1>
            <FadeIn delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zen-accent">
                {conversionExpertise.subtitle}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={conversionExpertise.primaryCta.href}
                  size="lg"
                  className="group"
                  onClick={trackHero}
                >
                  {conversionExpertise.primaryCta.label}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Button>
                <a
                  href={conversionExpertise.secondaryCta.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-gray transition-colors hover:text-soft-black"
                >
                  {conversionExpertise.secondaryCta.label}
                  <span aria-hidden>↓</span>
                </a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs text-fog">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
                {conversionExpertise.proof}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <BeforeAfterMock />
          </FadeIn>
        </div>
      </section>

      {/* 02 — Problem: looks good, doesn't sell */}
      <section className="border-y border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">{problem.eyebrow}</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text={problem.heading} />
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {problem.symptoms.map((s, i) => (
              <FadeIn key={s.title} delay={0.06 * i}>
                <div className="group flex h-full flex-col rounded-2xl border border-cloud bg-warm-white p-6 transition-colors hover:border-stone-gray">
                  <p className="text-[15px] font-medium leading-snug text-soft-black">
                    {s.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zen-accent">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Approach: the linear build sequence (no loop-back) */}
      <section id="process" className="scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">{approach.eyebrow}</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text={approach.heading} />
          </h2>
          <FadeIn delay={0.12}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zen-accent">
              {approach.body}
            </p>
          </FadeIn>

          <div className="relative mt-14">
            {/* Desktop connecting line, behind the node dots, fills on scroll */}
            <div
              className="pointer-events-none absolute inset-x-0 top-[18px] hidden sm:block"
              aria-hidden
            >
              <div className="h-px w-full bg-cloud" />
              <motion.div
                className="-mt-px h-px bg-soft-black"
                style={{ transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>

            <div className="grid gap-8 sm:grid-cols-4 sm:gap-6">
              {approach.steps.map((s, i) => (
                <FadeIn key={s.n} delay={0.08 * i}>
                  <div className="flex gap-4 sm:flex-col sm:gap-0">
                    <div className="flex flex-col items-center sm:items-start">
                      <span className="relative z-[1] flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cloud bg-pure text-sm font-medium tabular-nums text-soft-black shadow-[0_1px_2px_rgba(28,28,28,0.05)]">
                        {s.n}
                      </span>
                      {/* Mobile vertical connector between steps */}
                      {i < approach.steps.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-cloud sm:hidden" />
                      )}
                    </div>
                    <div className="pb-2 sm:mt-6 sm:pb-0">
                      <h3 className="text-base font-medium text-soft-black">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zen-accent">
                        {s.desc}
                      </p>
                      <span className="mt-3 inline-flex items-center rounded-full border border-cloud bg-warm-white px-2.5 py-1 text-[11px] font-medium text-stone-gray">
                        {s.tool}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Deliverables */}
      <section className="border-y border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">{deliverables.eyebrow}</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text={deliverables.heading} />
          </h2>
          <FadeIn delay={0.12}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zen-accent">
              {deliverables.body}
            </p>
          </FadeIn>

          <div className="mt-12 divide-y divide-cloud overflow-hidden rounded-2xl border border-cloud bg-warm-white">
            {deliverables.items.map((d, i) => (
              <FadeIn key={d.title} delay={0.05 * i}>
                <div className="flex items-start gap-4 px-5 py-5 sm:px-6">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-soft-black">
                    <Check size={13} className="text-pure" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium text-soft-black">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-zen-accent">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 05 + 06 — Benchmarks + FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The honest part</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="Engineering targets, not invented case studies" />
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {benchmarks.map((b, i) => (
              <FadeIn key={b.label} delay={0.05 * i}>
                <div className="flex items-baseline gap-2 rounded-xl border border-cloud bg-warm-white px-4 py-3">
                  <span className="text-xl font-light tracking-tight text-soft-black">
                    {b.value}
                  </span>
                  <span className="text-xs text-stone-gray">{b.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-2xl text-xs text-fog">{benchmarkNote}</p>
          </FadeIn>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <FadeIn>
                <p className="label">FAQ</p>
              </FadeIn>
              <h3 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
                <TextReveal text="Before you ask" />
              </h3>
            </div>

            <FadeIn delay={0.12}>
              <div className="overflow-hidden rounded-xl border border-cloud bg-pure">
                {faqs.map((item, i) => (
                  <div
                    key={item.q}
                    className="border-b border-cloud last:border-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-medium text-soft-black transition-colors hover:bg-warm-white"
                    >
                      {item.q}
                      <Plus
                        size={18}
                        className={cn(
                          "shrink-0 text-fog transition-all duration-300",
                          openFaq === i && "rotate-45 text-accent"
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-[15px] leading-relaxed text-zen-accent">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 07 — CTA band + Foundation Build cross-sell */}
      <section className="bg-soft-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <div>
              <FadeIn>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-tight tracking-[-0.01em] text-pure">
                  <TextReveal text={cta.heading} />
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-4 max-w-lg text-lg text-fog">{cta.body}</p>
                <div className="mt-8">
                  <Button
                    href={cta.href}
                    size="lg"
                    variant="secondary"
                    className="group"
                    onClick={trackClosing}
                  >
                    {cta.label}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Button>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.15}>
              <a
                href={cta.crossSell.href}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
              >
                <p className="label text-fog">Start with the</p>
                <h3 className="mt-3 flex items-center gap-1.5 text-xl font-light tracking-tight text-pure">
                  {cta.crossSell.title}
                  <ArrowUpRight
                    size={18}
                    className="text-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {cta.crossSell.blurb}
                </p>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
