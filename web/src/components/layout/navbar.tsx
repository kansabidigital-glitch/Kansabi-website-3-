"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <span
        className="h-7 w-7 rounded-full border-[1.5px] border-soft-black border-t-transparent -rotate-45 transition-transform group-hover:rotate-[315deg] duration-700"
        aria-hidden
      />
      <span className="text-lg font-medium tracking-tight text-soft-black">
        Kan<span className="font-light">Sabi</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-cloud/80 bg-warm-white/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-gray transition-colors hover:text-soft-black"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="#contact">Get in touch</Button>
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-soft-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-cloud bg-warm-white/95 backdrop-blur-xl p-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg text-soft-black"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#contact" className="mt-2 w-full">
                Get in touch
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
