"use client";

import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site-content";
import { FadeIn, TextReveal } from "@/components/ui/text-reveal";
import { MovingBorder } from "@/components/ui/moving-border";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-cloud bg-pure py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="label">Our Services</p>
        </FadeIn>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-light leading-tight tracking-[-0.01em] text-soft-black">
          <TextReveal
            text="Infrastructure tailored to your growth stage"
            delay={0.05}
          />
        </h2>
        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-xl text-lg text-zen-accent">
            Whether you need a full revenue system or expert firepower in one
            channel, we build what your business actually needs.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={0.08 * i}>
              <MovingBorder containerClassName="group h-full">
                <div className="flex h-full flex-col p-7">
                  <p className="label text-fog">{service.tag}</p>
                  <h3 className="mt-3 text-2xl font-light tracking-tight text-soft-black">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-zen-accent">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-1.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-stone-gray"
                      >
                        <span className="h-1 w-1 rounded-full bg-cloud" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-soft-black transition-opacity hover:opacity-60"
                  >
                    Learn more
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </MovingBorder>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
