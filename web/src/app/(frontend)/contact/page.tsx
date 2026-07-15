import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact | Kansabi",
  description:
    "Book an intro call or send us a message — we reply within one business day.",
};

export default function ContactPage() {
  return (
    <main className="pt-16">
      <ContactSection />
    </main>
  );
}
