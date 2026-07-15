"use client";

import { ArrowUpRight } from "lucide-react";
import { playbooks, playbooksNote } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Spotlight } from "@/components/ui/spotlight";
import { StrikeSwap } from "@/components/ui/strike-swap";

export function PlaybooksSection() {
  return (
    <section className="border-y border-cloud bg-pure py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label">Playbooks</p>
        </FadeIn>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
          <TextReveal text="This is how we'd" />{" "}
          <StrikeSwap struck="pitch" replacement="run" delay={0.25} />{" "}
          <TextReveal text="it" delay={0.35} />
        </h2>
        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-xl text-lg text-zen-accent">
            No case studies to point to yet — so instead of inventing them,
            here&apos;s the exact process we&apos;d run for two sectors we know well.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {playbooks.map((pb, i) => (
            <FadeIn key={pb.sector} delay={0.1 * i}>
              <Spotlight className="h-full rounded-2xl">
                <a
                  href={pb.href}
                  className="group flex h-full flex-col rounded-2xl border border-cloud bg-warm-white p-7 transition-shadow hover:shadow-[0_8px_30px_rgba(28,28,28,0.06)]"
                >
                  <span className="inline-flex w-fit items-center rounded-full border border-cloud bg-pure px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-stone-gray">
                    {pb.sector}
                  </span>
                  <h3 className="mt-4 text-xl font-light tracking-tight text-soft-black">
                    {pb.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-zen-accent">
                    {pb.thesis}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {pb.benchmarks.map((b) => (
                      <span
                        key={b}
                        className="rounded-md border border-cloud bg-pure px-2 py-1 text-xs font-medium tabular-nums text-soft-black"
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
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-sm text-fog">{playbooksNote}</p>
        </FadeIn>
      </div>
    </section>
  );
}
