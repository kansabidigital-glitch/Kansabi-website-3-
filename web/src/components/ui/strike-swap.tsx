"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/*
 * "Make ~~website~~ Conversion" headline device: the struck word stays in
 * the SSR HTML (crawlers read both), the line draws in on view and the
 * replacement lands in the accent color.
 */
export function StrikeSwap({
  struck,
  replacement,
  delay = 0,
  className,
  replacementClassName,
}: {
  struck: string;
  replacement: string;
  delay?: number;
  className?: string;
  replacementClassName?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <span ref={ref} className={cn("inline", className)}>
      <span className="relative inline-block text-fog">
        {struck}
        <motion.span
          aria-hidden
          className="absolute left-0 top-[54%] h-[0.06em] w-full origin-left rounded-full bg-stone-gray"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.35, delay: delay + 0.35, ease: "easeOut" }}
        />
      </span>{" "}
      <motion.span
        className={cn("inline-block text-accent", replacementClassName)}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4, delay: delay + 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {replacement}
      </motion.span>
    </span>
  );
}
