"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Plus, X } from "lucide-react";
import type { ServiceContent } from "@/data/site-content";
import { services } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const CTA_LABEL = "Book a strategy call";
const CTA_HREF = "/contact";

export function ServicePage({ service }: { service: ServiceContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const trackHero = () => trackCtaClick(`services-${service.slug}-hero`, CTA_LABEL);
  const trackClosing = () =>
    trackCtaClick(`services-${service.slug}-closing`, CTA_LABEL);

  return (
    <main>
      {/* 02 — Hero + ladder position */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pb-20 md:pt-44">
        <FadeIn>
          <p className="label">Services — {service.step}</p>
        </FadeIn>

        {/* ladder indicator */}
        <FadeIn delay={0.05}>
          <ol className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-3">
            {services.map((s) => {
              const active = s.slug === service.slug;
              const content = (
                <>
                  <span
                    className={cn(
                      "text-[11px] font-medium tabular-nums",
                      active ? "text-pure/60" : "text-fog"
                    )}
                  >
                    {s.step}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      active ? "text-pure" : "text-stone-gray"
                    )}
                  >
                    {s.title}
                  </span>
                </>
              );
              return (
                <li key={s.slug} className="sm:flex-1">
                  {active ? (
                    <div
                      aria-current="page"
                      className="flex items-center gap-2.5 rounded-lg bg-soft-black px-4 py-2.5"
                    >
                      {content}
                    </div>
                  ) : (
                    <a
                      href={s.href}
                      className="flex items-center gap-2.5 rounded-lg border border-cloud bg-pure px-4 py-2.5 transition-colors hover:border-stone-gray"
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ol>
        </FadeIn>

        <h1 className="mt-8 max-w-3xl text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.08] tracking-tight text-soft-black">
          <TextReveal text={service.title} delay={0.1} />
        </h1>
        <FadeIn delay={0.2}>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <p className="max-w-2xl text-lg leading-relaxed text-zen-accent">
              {service.positioning}
            </p>
          </div>
          {service.badge && (
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-cloud bg-pure px-3 py-1 text-[13px] text-stone-gray">
              <span className="h-1.5 w-1.5 rounded-full bg-soft-black" />
              {service.badge}
            </span>
          )}
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

      {/* 03 — Problem & fit */}
      <section className="border-y border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">Sound familiar?</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="The problems this solves" />
          </h2>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <ul className="space-y-3">
              {service.problem.map((p, i) => (
                <FadeIn key={p} delay={0.05 * i}>
                  <li className="flex items-start gap-3 rounded-xl border border-cloud bg-warm-white px-4 py-3.5 text-[15px] leading-relaxed text-muted-charcoal">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-stone-gray" />
                    {p}
                  </li>
                </FadeIn>
              ))}
            </ul>

            <FadeIn delay={0.1}>
              <div className="grid gap-4">
                <div className="rounded-xl border border-cloud bg-warm-white p-5">
                  <p className="flex items-center gap-2 text-sm font-medium text-soft-black">
                    <Check size={15} className="text-accent-2" />
                    Good fit if
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.fit.goodFit.map((g) => (
                      <li
                        key={g}
                        className="flex items-start gap-2 text-sm leading-relaxed text-zen-accent"
                      >
                        <Check size={14} className="mt-0.5 shrink-0 text-accent-2" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-cloud bg-warm-white p-5">
                  <p className="flex items-center gap-2 text-sm font-medium text-soft-black">
                    <X size={15} className="text-fog" />
                    Not yet if
                  </p>
                  <ul className="mt-3 space-y-2">
                    {service.fit.notYet.map((n) => (
                      <li
                        key={n}
                        className="flex items-start gap-2 text-sm leading-relaxed text-zen-accent"
                      >
                        <X size={14} className="mt-0.5 shrink-0 text-fog" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 04 — Deliverables */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">What you get</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="What we deliver" />
          </h2>
          <FadeIn delay={0.12}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zen-accent">
              No abstract promises — concrete outputs. This is exactly what
              you&apos;re paying for.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.deliverables.map((d, i) => (
              <FadeIn key={d.title} delay={0.06 * i}>
                <div className="group flex h-full flex-col rounded-2xl border border-cloud bg-pure p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(28,28,28,0.08)]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-soft-black">
                    <Check size={15} className="text-pure" />
                  </span>
                  <h3 className="mt-4 text-lg font-light tracking-tight text-soft-black">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zen-accent">
                    {d.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Timeline */}
      <section className="border-y border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">How it works</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="The timeline" />
          </h2>

          <div className="mt-12 space-y-5">
            {service.timeline.map((t, i) => (
              <FadeIn key={t.label} delay={0.06 * i}>
                <div className="grid gap-3 sm:grid-cols-[130px_1fr] sm:items-start sm:gap-6">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                    <span className="label text-fog">{t.phase}</span>
                    <span className="text-sm font-medium text-soft-black">
                      {t.label}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <div className="h-px w-full overflow-hidden bg-cloud">
                      <motion.div
                        className="h-px bg-soft-black"
                        style={{ transformOrigin: "left" }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{
                          duration: 0.6,
                          delay: 0.05 * i,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      />
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zen-accent">
                      {t.detail}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Proof: benchmarks + FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The honest part</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="Benchmarks, not invented case studies" />
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {service.benchmarks.map((b, i) => (
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
            <p className="mt-4 text-xs text-fog">
              Figures are engagement terms and industry benchmarks — not claims
              about a specific past client.
            </p>
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
                {service.faqs.map((item, i) => (
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

      {/* 07 — CTA band + next rung */}
      <section className="bg-soft-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
            <div>
              <FadeIn>
                <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-tight tracking-[-0.01em] text-pure">
                  <TextReveal text="Book a strategy call" />
                </h2>
              </FadeIn>
              <FadeIn delay={0.12}>
                <p className="mt-4 max-w-lg text-lg text-fog">
                  Tell us where you are. We&apos;ll give you an honest read on
                  whether the {service.title} is the right next step — no pitch,
                  no lock-in.
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
                href={service.nextStep.href}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
              >
                <p className="label text-fog">Next rung</p>
                <h3 className="mt-3 flex items-center gap-1.5 text-xl font-light tracking-tight text-pure">
                  {service.nextStep.title}
                  <ArrowUpRight
                    size={18}
                    className="text-fog transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {service.nextStep.blurb}
                </p>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
