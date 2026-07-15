"use client";

import { useState, useSyncExternalStore } from "react";
import { readConsent, saveConsent } from "@/lib/consent";

const noopSubscribe = () => () => {};

export function ConsentBanner() {
  // Hidden during SSR, shown after hydration when no stored choice exists.
  const hasStoredConsent = useSyncExternalStore(
    noopSubscribe,
    () => readConsent() !== null,
    () => true
  );
  const [dismissed, setDismissed] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  if (hasStoredConsent || dismissed) return null;

  const decide = (choice: { analytics: boolean; marketing: boolean }) => {
    saveConsent(choice);
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-cloud bg-pure px-6 py-4 shadow-[0_-4px_24px_rgba(28,28,28,0.08)]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-stone-gray">
          We use cookies to understand how the site is used — nothing loads
          until you choose.{" "}
          <a
            href="/cookies"
            className="underline decoration-cloud underline-offset-2 hover:text-soft-black"
          >
            Cookie policy
          </a>
        </p>

        {managing ? (
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-2 text-sm text-soft-black">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="h-4 w-4 accent-soft-black"
              />
              Analytics
            </label>
            <label className="flex items-center gap-2 text-sm text-soft-black">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="h-4 w-4 accent-soft-black"
              />
              Marketing
            </label>
            <button
              onClick={() => decide({ analytics, marketing })}
              className="rounded-lg bg-soft-black px-4 py-2 text-sm font-medium text-pure transition-colors hover:bg-muted-charcoal"
            >
              Save preferences
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setManaging(true)}
              className="text-sm text-stone-gray underline decoration-cloud underline-offset-2 hover:text-soft-black"
            >
              Manage
            </button>
            <button
              onClick={() => decide({ analytics: false, marketing: false })}
              className="rounded-lg border border-cloud bg-pure px-4 py-2 text-sm font-medium text-soft-black transition-colors hover:border-fog"
            >
              Reject
            </button>
            <button
              onClick={() => decide({ analytics: true, marketing: true })}
              className="rounded-lg bg-soft-black px-4 py-2 text-sm font-medium text-pure transition-colors hover:bg-muted-charcoal"
            >
              Accept
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
