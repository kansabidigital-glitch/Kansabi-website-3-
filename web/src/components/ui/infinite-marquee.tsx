"use client";

import { cn } from "@/lib/utils";

export function InfiniteMarquee({
  items,
  className,
  speed = 40,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-warm-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-warm-white to-transparent" />
      <div
        className="flex w-max gap-12 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 text-sm font-medium tracking-wide text-fog whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
