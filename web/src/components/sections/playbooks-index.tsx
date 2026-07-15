"use client";

import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { playbooks, playbooksIndex } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { trackCtaClick } from "@/lib/analytics";

const { eyebrow, title, subtitle, ribbon, ghost, cta } = playbooksIndex;

export function PlaybooksIndex() {
  const trackIndexCta = () => trackCtaClick("playbooks-index-cta", cta.label);

  return (
    <main>
      {/* 01 — Hero + honesty ribbon */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pb-20 md:pt-44">
        <FadeIn>
          <p className="label">{eyebrow}</p>
        </FadeIn>
        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-light leading-[1.08] tracking-tight text-soft-black">
          <TextReveal text={title} delay={0.05} />
        </h1>
        <FadeIn delay={0.2}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zen-accent">
            {subtitle}
          </p>
          <p className="mt-6 flex items-start gap-2.5 rounded-lg border border-dashed border-cloud bg-pure px-4 py-3 text-sm text-stone-gray sm:max-w-xl">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-gray" />
            {ribbon}
          </p>
        </FadeIn>
      </section>

      {/* 02 — Playbook cards + "more coming" ghost */}
      <section className="border-t border-cloud bg-pure py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="label">The playbooks</p>
          </FadeIn>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="Two sectors, mapped end to end" />
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {playbooks.map((pb, i) => (
              <FadeIn key={pb.slug} delay={0.1 * i}>
                <Spotlight className="h-full rounded-2xl">
                  <a
                    href={pb.href}
                    className="group flex h-full flex-col rounded-2xl border border-cloud bg-warm-white p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(28,28,28,0.06)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex w-fit items-center rounded-full border border-cloud bg-pure px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-stone-gray">
                        {pb.sector}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-dashed border-cloud px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-fog">
                        Sample engagement
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-light tracking-tight text-soft-black">
                      {pb.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-zen-accent">
                      {pb.situation}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {pb.benchmarks.map((b) => (
                        <span
                          key={b}
                          className="rounded-md border border-cloud bg-pure px-2 py-1 text-xs font-medium text-soft-black"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-soft-black transition-colors group-hover:text-accent">
                      See the playbook
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                </Spotlight>
              </FadeIn>
            ))}

            {/* Ghost card — the list will grow; nudges "not your sector?" to CTA */}
            <FadeIn delay={0.1 * playbooks.length} className="md:col-span-2">
              <a
                href={ghost.href}
                className="group flex items-center justify-center gap-3 rounded-2xl border border-dashed border-cloud bg-warm-white/50 px-7 py-8 text-center transition-colors hover:border-stone-gray"
              >
                <Plus size={18} className="text-fog" />
                <span className="text-[15px] font-medium text-stone-gray transition-colors group-hover:text-soft-black">
                  {ghost.label}
                </span>
                <ArrowRight
                  size={15}
                  className="text-fog transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-6 text-sm text-fog">{playbooksIndex.ribbon}</p>
          </FadeIn>
        </div>
      </section>

      {/* 03 — Index CTA band */}
      <section className="bg-soft-black py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <FadeIn>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-tight tracking-[-0.01em] text-pure">
                <TextReveal text={cta.heading} />
              </h2>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-4 max-w-lg text-lg text-fog">{cta.body}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={cta.href}
                  size="lg"
                  variant="secondary"
                  className="group"
                  onClick={trackIndexCta}
                >
                  {cta.label}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Button>
                <a
                  href={cta.secondary.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-fog transition-colors hover:text-pure"
                >
                  {cta.secondary.label}
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
