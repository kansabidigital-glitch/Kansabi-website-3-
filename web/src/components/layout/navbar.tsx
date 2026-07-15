"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavDropdown } from "@/components/ui/nav-dropdown";
import { ExpertiseMegaMenu, ServicesDropdown } from "@/components/ui/mega-menu";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span
        className="h-7 w-7 rounded-full border-[1.5px] border-soft-black border-t-transparent -rotate-45 transition-transform group-hover:rotate-[315deg] duration-700"
        aria-hidden
      />
      <span className="text-lg font-medium tracking-tight text-soft-black">
        Kan<span className="font-light">Sabi</span>
      </span>
    </Link>
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
          scrolled || mobileOpen
            ? "border-b border-cloud/80 bg-warm-white/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            <NavDropdown label="Services">
              <ServicesDropdown />
            </NavDropdown>
            <NavDropdown label="Expertise" fullWidth>
              <ExpertiseMegaMenu />
            </NavDropdown>
            <a
              href="/playbooks"
              className="text-sm text-stone-gray transition-colors hover:text-soft-black"
            >
              Playbooks
            </a>
            <a
              href="/about"
              className="text-sm text-stone-gray transition-colors hover:text-soft-black"
            >
              About
            </a>
          </nav>
          <div className="hidden md:block">
            <Button href="/contact">Book intro call</Button>
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-soft-black"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
