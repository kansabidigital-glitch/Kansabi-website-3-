import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Shared <html>/<body> shell for the public-facing route groups.
// Payload's (payload) segment renders its OWN html/body (via its RootLayout),
// so there is deliberately no root app/layout.tsx — each route group is its own
// root layout. That prevents the nested-<html> hydration error on /admin.
export function RootHtml({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full bg-warm-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
