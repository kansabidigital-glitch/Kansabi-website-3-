"use client";

import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-[1px] overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0 animate-[spin_4s_linear_infinite] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, var(--color-fog) 25%, transparent 50%)",
        }}
      />
      <div
        className={cn(
          "relative rounded-[11px] bg-pure border border-cloud",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
