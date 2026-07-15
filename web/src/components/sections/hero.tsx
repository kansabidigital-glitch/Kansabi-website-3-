"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  heroBullets,
  heroCtas,
  heroFloatCards,
} from "@/data/site-content";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { LondonSkyline } from "@/components/ui/london-skyline";
import { Button } from "@/components/ui/button";
import { TextReveal, FadeIn } from "@/components/ui/text-reveal";
import { StrikeSwap } from "@/components/ui/strike-swap";
import { cn } from "@/lib/utils";

const CARD_LAYOUT = [
  { top: "8%", right: "22%", depth: 1 },
  { top: "24%", right: "7%", depth: 1.6 },
  { top: "42%", right: "26%", depth: 0.9 },
  { top: "58%", right: "10%", depth: 1.3 },
  { top: "68%", right: "31%", depth: 0.7 },
];

function useParallax() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 50, damping: 16 });
  const springY = useSpring(mvY, { stiffness: 50, damping: 16 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    const handle = (e: MouseEvent) => {
      mvX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mvY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mvX, mvY]);

  return { springX, springY };
}

function FloatCard({
  value,
  label,
  accent,
  pos,
  springX,
  springY,
  isInView,
  delay,
}: {
  value: string;
  label: string;
  accent?: boolean;
  pos: (typeof CARD_LAYOUT)[number];
  springX: MotionValue<number>;
  springY: MotionValue<number>;
  isInView: boolean;
  delay: number;
}) {
  const x = useTransform(springX, (v) => v * 9 * pos.depth);
  const y = useTransform(springY, (v) => v * 7 * pos.depth);

  return (
    <motion.div
      style={{ top: pos.top, right: pos.right, x, y }}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay }}
      className="absolute w-[136px] rounded-xl border border-cloud bg-pure/90 p-3.5 shadow-[0_8px_30px_rgba(28,28,28,0.08)] backdrop-blur-sm"
    >
      <p
        className={cn(
          "text-lg font-medium tracking-tight",
          accent ? "text-accent-2" : "text-soft-black"
        )}
      >
        {value}
      </p>
      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-fog">
        {label}
      </p>
    </motion.div>
  );
}

export function Hero() {
  const { springX, springY } = useParallax();
  const skylineX = useTransform(springX, (v) => v * -6);
  const skylineY = useTransform(springY, (v) => v * -3);

  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-40px" });

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <BackgroundGrid />

      <motion.div
        style={{ x: skylineX, y: skylineY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 text-cloud opacity-70 md:h-52"
        aria-hidden
      >
        <LondonSkyline className="h-full w-full" />
      </motion.div>

      <div ref={cardsRef} className="pointer-events-none absolute inset-0 hidden lg:block">
        {heroFloatCards.map((card, i) => (
          <FloatCard
            key={card.label}
            value={card.value}
            label={card.label}
            accent={card.accent}
            pos={CARD_LAYOUT[i]}
            springX={springX}
            springY={springY}
            isInView={isInView}
            delay={0.55 + i * 0.12}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="label mb-5"
        >
          {heroEyebrow}
        </motion.p>

        <h1 className="max-w-2xl text-[clamp(2.5rem,5.5vw,3.75rem)] font-light leading-[1.08] tracking-[-0.02em] text-soft-black">
          <StrikeSwap
            struck={heroTitle.struck}
            replacement={heroTitle.emphasis}
            delay={0.15}
          />{" "}
          <TextReveal text={heroTitle.rest} delay={0.35} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-zen-accent"
        >
          {heroSubtitle}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5"
        >
          {heroBullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[15px] text-stone-gray"
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
          <Button href={heroCtas.primary.href} size="lg" className="group">
            {heroCtas.primary.label}
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Button>
          <Button href={heroCtas.secondary.href} variant="secondary" size="lg">
            {heroCtas.secondary.label}
          </Button>
        </motion.div>

        {/* mobile/tablet: static 2-up grid instead of floating parallax cards */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {heroFloatCards.slice(0, 4).map((card, i) => (
            <FadeIn key={card.label} delay={0.1 * i}>
              <div className="h-full rounded-xl border border-cloud bg-pure p-3">
                <p
                  className={cn(
                    "text-base font-medium tracking-tight",
                    card.accent ? "text-accent-2" : "text-soft-black"
                  )}
                >
                  {card.value}
                </p>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-fog">
                  {card.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
