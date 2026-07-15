"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { trustItems } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";
import { StrikeSwap } from "@/components/ui/strike-swap";
import { captureUtmParams, trackGenerateLead, type UtmParams } from "@/lib/analytics";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const utmRef = useRef<UtmParams>({});
  const pathname = usePathname();

  useEffect(() => {
    utmRef.current = captureUtmParams();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message") || "",
          website: data.get("website") || "",
          source: pathname,
          utm: utmRef.current,
        }),
      });

      const json = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (res.ok && json?.ok) {
        setStatus("success");
        trackGenerateLead(pathname);
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(
          json?.error || "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    }
  };

  return (
    <section id="contact" className="bg-soft-black py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeIn>
            <p className="label text-fog">Get started</p>
          </FadeIn>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-pure">
            <StrikeSwap
              struck="Complicated"
              replacement="Simple"
              delay={0.05}
              replacementClassName="text-amber-500"
            />{" "}
            <TextReveal text="systems." delay={0.3} />
            <br />
            <TextReveal text="Serious growth." delay={0.45} />
          </h2>
          <FadeIn delay={0.2}>
            <p className="mt-5 text-lg text-fog">
              Tell us about your business. We&apos;ll respond within 24 hours
              with an honest assessment of how we can help.
            </p>
            <ul className="mt-8 space-y-2">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-fog"
                >
                  <Check size={14} className="text-pure" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/10 bg-pure p-7 shadow-2xl"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="label mb-1.5 block">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Smith"
                  className="w-full rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="label mb-1.5 block">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="company" className="label mb-1.5 block">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  required
                  placeholder="Company name"
                  className="w-full rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="label mb-1.5 block">
                  What are you looking to solve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Brief description of your growth challenge"
                  className="w-full resize-none rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-accent"
                />
              </div>
              {/* Honeypot — hidden from real users, bots fill it */}
              <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full group"
              disabled={status === "submitting" || status === "success"}
            >
              {status === "submitting" ? (
                "Sending…"
              ) : status === "success" ? (
                "Message sent — we'll be in touch"
              ) : (
                <>
                  Book a strategy call
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </>
              )}
            </Button>
            {status === "error" && errorMessage && (
              <p role="alert" className="mt-3 text-center text-xs text-red-600">
                {errorMessage}
              </p>
            )}
            <p className="mt-3 text-center text-xs text-fog">
              Max 4 fields. No spam. We respond within 24 hours.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
