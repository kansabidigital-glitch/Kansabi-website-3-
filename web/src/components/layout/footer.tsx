import { footerNav } from "@/data/site-content";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-2">
      <p className="label">{title}</p>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="block text-stone-gray hover:text-soft-black"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cloud bg-warm-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="h-7 w-7 rounded-full border-[1.5px] border-soft-black border-t-transparent -rotate-45"
                aria-hidden
              />
              <span className="text-lg font-medium tracking-tight text-soft-black">
                Kan<span className="font-light">Sabi</span>
              </span>
            </div>
            <p className="mt-2 text-sm text-fog">
              Simple systems. Serious growth.
            </p>
            <p className="mt-1 text-sm text-fog">London, UK</p>
          </div>
          <div className="text-sm">
            <FooterColumn title="Services" links={footerNav.services} />
          </div>
          <div className="text-sm">
            <FooterColumn title="Expertise" links={footerNav.expertise} />
          </div>
          <div className="text-sm">
            <FooterColumn title="Company" links={footerNav.company} />
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-cloud pt-8 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Kansabi. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {footerNav.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-soft-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/company/kansabi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-soft-black"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
