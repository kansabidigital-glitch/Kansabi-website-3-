"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { trustItems } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-soft-black py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeIn>
            <p className="label text-fog">Get started</p>
          </FadeIn>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-pure">
            <TextReveal text="Simple systems." delay={0.05} />
            <br />
            <TextReveal text="Serious growth." delay={0.25} />
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
                  className="w-full rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-zen-accent"
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
                  className="w-full rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-zen-accent"
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
                  className="w-full rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-zen-accent"
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
                  className="w-full resize-none rounded-lg border border-cloud bg-warm-white px-4 py-3 text-sm text-soft-black outline-none transition-colors focus:border-zen-accent"
                />
              </div>
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full group"
              disabled={submitted}
            >
              {submitted ? (
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
            <p className="mt-3 text-center text-xs text-fog">
              Max 4 fields. No spam. We respond within 24 hours.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
