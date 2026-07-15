"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PlaybookContent } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";

const CTA_LABEL = "Book an intro call";
const CTA_HREF = "/contact";

export function PlaybookPage({ playbook }: { playbook: PlaybookContent }) {
  const trackHero = () =>
    trackCtaClick(`playbook-${playbook.slug}-hero`, CTA_LABEL);
  const trackClosing = () =>
    trackCtaClick(`playbook-${playbook.slug}-closing`, CTA_LABEL);

  return (
    <main>
      {/* 04 — Detail hero: sector + situation + "sample" badge */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pb-20 md:pt-44">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <FadeIn>
            <p className="label">Playbook — {playbook.sector}</p>
          </FadeIn>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-dashed border-cloud bg-pure px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-stone-gray">
            <span className="h-1.5 w-1.5 rounded-full bg-stone-gray" />
            Sample engagement
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.08] tracking-tight text-soft-black">
          <TextReveal text={playbook.heroClaim} delay={0.05} />
        </h1>
        <FadeIn delay={0.2}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zen-accent">
            {playbook.situation}
          </p>
          <div className="mt-8">
            <Button href={CTA_HREF} size="lg" className="group" onClick={trackHero}>
              {CTA_LABEL}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Button>
          </div>
        </FadeIn>
      </section>

      {/* 05 — Context: the sector-specific problem */}
      <section className="border-y border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The situation</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="What we'd expect to find" />
          </h2>

          <ul className="mt-12 max-w-3xl space-y-3">
            {playbook.context.map((c, i) => (
              <FadeIn key={c} delay={0.06 * i}>
                <li className="flex items-start gap-3 rounded-xl border border-cloud bg-warm-white px-4 py-3.5 text-[15px] leading-relaxed text-muted-charcoal">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-gray" />
                  {c}
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — Approach: Sprint → Build → Retainer ladder (linear, not a loop) */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The approach</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="How we'd run it, rung by rung" />
          </h2>
          <FadeIn delay={0.12}>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zen-accent">
              Every playbook rides the same ladder — diagnose first, build the
              foundation, then compound it. Each rung is a real engagement you
              can start and stop at.
            </p>
          </FadeIn>

          <ol className="mt-12 space-y-4">
            {playbook.ladder.map((rung, i) => (
              <FadeIn key={rung.step} delay={0.06 * i}>
                <li className="relative flex gap-4 rounded-2xl border border-cloud bg-pure p-6 sm:gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-soft-black text-sm font-medium tabular-nums text-pure">
                    {rung.step}
                  </span>
                  <div className="min-w-0">
                    <a
                      href={rung.href}
                      className="group inline-flex items-center gap-1.5 text-lg font-light tracking-tight text-soft-black transition-colors hover:text-accent"
                    >
                      {rung.service}
                      <ArrowUpRight
                        size={16}
                        className="text-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zen-accent">
                      {rung.detail}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* 07 — Illustrative outcomes — directional, not case-study claims */}
      <section className="border-y border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The honest part</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="What good would look like" />
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {playbook.outcomes.map((o, i) => (
              <FadeIn key={o.value} delay={0.06 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-cloud bg-warm-white p-6">
                  <span className="text-xl font-light tracking-tight text-soft-black">
                    {o.value}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-zen-accent">
                    {o.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <p className="mt-6 flex items-start gap-2.5 rounded-lg border border-dashed border-cloud bg-pure px-4 py-3 text-xs leading-relaxed text-stone-gray sm:max-w-xl">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-gray" />
              {playbook.outcomesFlag}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 08 — Which services — internal link bridges */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The stack</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="What we'd bring in" />
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {playbook.services.map((s, i) => (
              <FadeIn key={s.href} delay={0.05 * i}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-cloud bg-pure px-4 py-2.5 text-sm font-medium text-soft-black transition-colors hover:border-stone-gray"
                >
                  {s.label}
                  <ArrowUpRight
                    size={14}
                    className="text-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — CTA band + Diagnostic Sprint cross-sell */}
      <section className="bg-soft-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <div>
              <FadeIn>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-tight tracking-[-0.01em] text-pure">
                  <TextReveal text={playbook.cta.heading} />
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-4 max-w-lg text-lg text-fog">
                  {playbook.cta.body}
                </p>
                <div className="mt-8">
                  <Button
                    href={CTA_HREF}
                    size="lg"
                    variant="secondary"
                    className="group"
                    onClick={trackClosing}
                  >
                    {CTA_LABEL}
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
                href="/services/diagnostic-sprint"
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
              >
                <p className="label text-fog">Start here</p>
                <h3 className="mt-3 flex items-center gap-1.5 text-xl font-light tracking-tight text-pure">
                  Diagnostic Sprint
                  <ArrowUpRight
                    size={18}
                    className="text-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Two weeks to map your real numbers into a prioritised roadmap —
                  the first rung of this exact playbook.
                </p>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
