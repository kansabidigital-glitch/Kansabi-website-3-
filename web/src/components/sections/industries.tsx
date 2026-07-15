"use client";

import { InfiniteMarquee } from "@/components/ui/infinite-marquee";
import { FadeIn } from "@/components/ui/text-reveal";
import { industries } from "@/data/site-content";

export function IndustriesSection() {
  return (
    <section className="border-y border-cloud bg-pure/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label mb-8 text-center md:text-left">
            We speak the language of these sectors
          </p>
        </FadeIn>
        <InfiniteMarquee items={industries} speed={35} />
      </div>
    </section>
  );
}
