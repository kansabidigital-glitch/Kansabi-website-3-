"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <FadeIn>
            <p className="label">FAQ</p>
          </FadeIn>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text="Common questions" />
          </h2>
        </div>

        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-xl border border-cloud bg-pure">
            {faqs.map((item, i) => (
              <div key={item.q} className="border-b border-cloud last:border-0">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[15px] font-medium text-soft-black transition-colors hover:bg-warm-white"
                >
                  {item.q}
                  <Plus
                    size={18}
                    className={cn(
                      "shrink-0 text-fog transition-transform duration-300",
                      open === i && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
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
    </section>
  );
}
