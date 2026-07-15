import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found | Kansabi",
};

// Navbar/Footer come from (frontend)/layout.tsx — this only replaces the page.
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 pb-24 pt-40">
      <p className="label">404</p>
      <h1 className="mt-4 text-balance text-4xl font-light tracking-tight text-soft-black md:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-5 max-w-xl text-lg text-stone-gray">
        The link may be outdated, or the page may have moved. Everything we
        do is reachable from the homepage.
      </p>
      <Button href="/" size="lg" className="mt-8">
        Back to homepage
      </Button>
    </main>
  );
}
