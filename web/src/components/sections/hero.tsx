"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroBullets } from "@/data/site-content";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { Button } from "@/components/ui/button";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <BackgroundGrid />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label mb-5"
        >
          Growth Infrastructure Partner
        </motion.p>

        <h1 className="max-w-3xl text-[clamp(2.5rem,5.5vw,3.75rem)] font-light leading-[1.08] tracking-[-0.02em] text-soft-black">
          <TextReveal text="Growth systems that convert" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zen-accent"
        >
          We build acquisition infrastructure for B2B SaaS and high-LTV brands
          — connecting paid media, funnels, and tracking into one measurable
          revenue engine.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 space-y-2.5"
        >
          {heroBullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[15px] text-stone-gray"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-soft-black" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href="#contact" size="lg" className="group">
            Book a strategy call
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Button>
          <Button href="#services" variant="secondary" size="lg">
            Explore services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
