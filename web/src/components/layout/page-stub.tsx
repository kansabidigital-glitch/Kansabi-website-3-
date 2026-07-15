import { Button } from "@/components/ui/button";

type PageStubProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/*
 * Minimal SSR page shell for routes whose full section plan lands in a later
 * faz. Real copy only — replaced in place when the page's own faz runs.
 */
export function PageStub({
  eyebrow,
  title,
  description,
  ctaLabel = "Book intro call",
  ctaHref = "/contact",
}: PageStubProps) {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-6 pb-24 pt-40">
      <p className="label">{eyebrow}</p>
      <h1 className="mt-4 text-balance text-4xl font-light tracking-tight text-soft-black md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-stone-gray">{description}</p>
      <Button href={ctaHref} size="lg" className="mt-8">
        {ctaLabel}
      </Button>
    </main>
  );
}
