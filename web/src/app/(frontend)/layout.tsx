import type { Metadata } from "next";
import "../globals.css";
import { RootHtml } from "@/components/layout/root-html";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { GoogleTagManager } from "@/components/analytics/gtm";
import { ConsentBanner } from "@/components/analytics/consent-banner";

// ISR — static pages refresh hourly (applies to every frontend route).
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kansabi — Growth Infrastructure Partner",
  description:
    "We build acquisition infrastructure for B2B SaaS and high-LTV brands. Simple systems. Serious growth.",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootHtml>
      <GoogleTagManager />
      <Navbar />
      {children}
      <Footer />
      <ConsentBanner />
    </RootHtml>
  );
}
