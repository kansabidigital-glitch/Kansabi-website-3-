"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { navExpertise, navServices } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function Accordion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-cloud">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="flex min-h-[44px] w-full items-center justify-between py-3 text-lg text-soft-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40 rounded"
      >
        {label}
        <ChevronDown
          size={16}
          className={cn(
            "text-stone-gray transition-transform duration-200 motion-reduce:transition-none",
            expanded && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <div className={cn("pb-3", !expanded && "hidden")}>{children}</div>
    </div>
  );
}

/*
 * Full-screen mobile menu. Rendered in the DOM at all times (links in SSR
 * HTML); open/close is CSS-only. Locks body scroll while open.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 top-16 z-40 overflow-y-auto bg-warm-white px-6 pb-10 pt-4 md:hidden",
        "transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible -translate-y-2 opacity-0"
      )}
    >
      <nav className="flex min-h-full flex-col">
        <Accordion label="Services">
          <ul className="space-y-1">
            {navServices.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  onClick={onClose}
                  className="block min-h-[44px] rounded-lg px-2 py-2.5 text-[15px] text-stone-gray hover:text-soft-black"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion label="Expertise">
          <div className="space-y-4">
            {navExpertise.map((pillar) => (
              <div key={pillar.pillar}>
                <p className="label mb-1 text-[11px]">{pillar.pillar}</p>
                <ul>
                  {pillar.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block min-h-[44px] rounded-lg px-2 py-2.5 text-[15px] text-stone-gray hover:text-soft-black"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Accordion>

        <a
          href="/playbooks"
          onClick={onClose}
          className="flex min-h-[44px] items-center border-b border-cloud py-3 text-lg text-soft-black"
        >
          Playbooks
        </a>
        <a
          href="/about"
          onClick={onClose}
          className="flex min-h-[44px] items-center border-b border-cloud py-3 text-lg text-soft-black"
        >
          About
        </a>

        <div className="mt-auto pt-6">
          <Button href="/contact" className="w-full" size="lg">
            Book intro call
          </Button>
        </div>
      </nav>
    </div>
  );
}
