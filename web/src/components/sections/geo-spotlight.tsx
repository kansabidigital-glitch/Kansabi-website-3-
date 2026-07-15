"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { geoSpotlight } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BOT_POSITIONS = [{ top: "4%" }, { top: "38%" }, { top: "72%" }];

function Diagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const [botIndex, setBotIndex] = useState(0);
  const [typed, setTyped] = useState("");

  const bots = geoSpotlight.bots;

  // On hover, type "Ask ChatGPT…" style queries cycling through the bots;
  // the active bot's badge and flow line pick up the teal accent.
  useEffect(() => {
    if (!hovered) return;
    const phrase = `Ask ${bots[botIndex]}…`;
    let i = 0;
    let pause: ReturnType<typeof setTimeout> | undefined;
    const timer = setInterval(() => {
      i += 1;
      setTyped(phrase.slice(0, i));
      if (i >= phrase.length) {
        clearInterval(timer);
        pause = setTimeout(() => {
          setTyped("");
          setBotIndex((prev) => (prev + 1) % bots.length);
        }, 1100);
      }
    }, 55);
    return () => {
      clearInterval(timer);
      if (pause) clearTimeout(pause);
    };
  }, [hovered, botIndex, bots]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setTyped("");
        setBotIndex(0);
      }}
      className="relative h-[280px] w-full"
    >
      <svg
        viewBox="0 0 400 280"
        className="absolute inset-0 h-full w-full text-cloud"
        fill="none"
      >
        {BOT_POSITIONS.map((_, i) => {
          const targetY = [30, 130, 230][i];
          const active = hovered && i === botIndex;
          return (
            <motion.path
              key={i}
              d={`M120 140 C 210 140, 225 ${targetY}, 300 ${targetY}`}
              stroke={active ? "var(--accent-2)" : "currentColor"}
              strokeWidth={active ? 2 : 1.5}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 0, opacity: 0 }
              }
              transition={{ duration: 0.9, delay: 0.15 * i, ease: "easeInOut" }}
            />
          );
        })}
      </svg>

      <div className="absolute left-0 top-1/2 w-32 -translate-y-1/2 rounded-lg border border-cloud bg-pure p-3 shadow-sm">
        <div className="h-1.5 w-2/3 rounded-full bg-soft-black" />
        <div className="mt-2 h-1.5 w-full rounded-full bg-cloud" />
        <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-cloud" />
        <div className="mt-2.5 flex h-6 items-center overflow-hidden whitespace-nowrap rounded-md border border-cloud bg-warm-white px-1.5 text-[10px] font-medium text-stone-gray">
          {typed || "Ask anything…"}
          <span
            className={cn(
              "ml-0.5 h-3 w-px shrink-0 bg-accent-2",
              hovered ? "animate-pulse" : "opacity-0"
            )}
          />
        </div>
      </div>

      {bots.map((bot, i) => {
        const active = hovered && i === botIndex;
        return (
          <motion.div
            key={bot}
            style={{ top: BOT_POSITIONS[i].top }}
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.12 }}
            className={cn(
              "absolute right-0 flex items-center gap-2 rounded-full border bg-pure px-3.5 py-2 text-xs font-medium shadow-sm transition-colors duration-300",
              active
                ? "border-accent-2 text-accent-2"
                : "border-cloud text-soft-black"
            )}
          >
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                active
                  ? "bg-accent-2"
                  : "bg-soft-black animate-pulse motion-reduce:animate-none"
              )}
            />
            {bot}
          </motion.div>
        );
      })}
    </div>
  );
}

export function GeoSpotlightSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div>
          <FadeIn>
            <p className="label">{geoSpotlight.eyebrow}</p>
          </FadeIn>
          <h2 className="mt-3 max-w-lg text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
            <TextReveal text={geoSpotlight.title} />
          </h2>
          <FadeIn delay={0.15}>
            <p className="mt-5 max-w-lg text-lg text-zen-accent">
              {geoSpotlight.body}
            </p>
          </FadeIn>

          <ul className="mt-8 space-y-5">
            {geoSpotlight.points.map((point, i) => (
              <FadeIn key={point.title} delay={0.2 + i * 0.08}>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                  <div>
                    <p className="text-sm font-medium text-soft-black">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-fog">
                      {point.desc}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>

          <FadeIn delay={0.5}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button href={geoSpotlight.cta.href} className="group">
                {geoSpotlight.cta.label}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Button>
              <span className="text-xs text-fog">{geoSpotlight.proof}</span>
            </div>
          </FadeIn>
        </div>

        <Diagram />
      </div>
    </section>
  );
}
