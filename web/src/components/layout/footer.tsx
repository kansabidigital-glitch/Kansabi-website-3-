export function Footer() {
  return (
    <footer className="border-t border-cloud bg-warm-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
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
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div className="space-y-2">
              <p className="label">Services</p>
              <a href="#services" className="block text-stone-gray hover:text-soft-black">
                Growth Infrastructure
              </a>
              <a href="#services" className="block text-stone-gray hover:text-soft-black">
                Paid Media & Funnels
              </a>
              <a href="#services" className="block text-stone-gray hover:text-soft-black">
                3D Web Experience
              </a>
            </div>
            <div className="space-y-2">
              <p className="label">Company</p>
              <a href="#why" className="block text-stone-gray hover:text-soft-black">
                Why Kansabi
              </a>
              <a href="#process" className="block text-stone-gray hover:text-soft-black">
                Process
              </a>
              <a href="#faq" className="block text-stone-gray hover:text-soft-black">
                FAQ
              </a>
              <a href="#contact" className="block text-stone-gray hover:text-soft-black">
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-1 border-t border-cloud pt-8 text-xs text-fog sm:flex-row sm:justify-between">
          <p>&copy; 2026 Kansabi. All rights reserved.</p>
          <p>London, UK · kansabi.com</p>
        </div>
      </div>
    </footer>
  );
}
