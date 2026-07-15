"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const OPEN_DELAY = 150;
const CLOSE_DELAY = 120;

type NavDropdownProps = {
  label: string;
  children: React.ReactNode;
  /* Mega menu: panel spans the header container instead of the trigger */
  fullWidth?: boolean;
  panelClassName?: string;
};

/*
 * Hover-intent dropdown for the header. The panel is ALWAYS in the DOM so
 * every link ships in the SSR HTML (GEO requirement) — open/close is pure
 * CSS visibility + transform/opacity.
 */
export function NavDropdown({
  label,
  children,
  fullWidth,
  panelClassName,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const openTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (openTimer.current) clearTimeout(openTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const onMouseEnter = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setOpen(true), OPEN_DELAY);
  };

  const onMouseLeave = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      e.stopPropagation();
      setOpen(false);
      rootRef.current?.querySelector("button")?.focus();
    }
  };

  const onBlur = (e: React.FocusEvent) => {
    if (!rootRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={cn(fullWidth ? "static" : "relative")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => {
          clearTimers();
          setOpen((v) => !v);
        }}
        className={cn(
          "inline-flex items-center gap-1 text-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40 rounded",
          open ? "text-soft-black" : "text-stone-gray hover:text-soft-black"
        )}
      >
        {label}
        <ChevronDown
          size={13}
          className={cn(
            "transition-transform duration-200 motion-reduce:transition-none",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <div
        className={cn(
          "absolute top-full z-50 pt-2",
          fullWidth ? "inset-x-0" : "left-1/2 -translate-x-1/2",
          "transition-[opacity,transform,visibility] duration-150 motion-reduce:transition-none",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0"
        )}
      >
        <div
          className={cn(
            "rounded-xl border border-cloud bg-pure shadow-[0_2px_4px_rgba(28,28,28,0.08),0_16px_40px_rgba(28,28,28,0.12)]",
            panelClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
