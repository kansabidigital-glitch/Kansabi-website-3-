"use client";

import { useState, useTransition } from "react";
import { RefreshCw } from "lucide-react";
import { revalidateSite } from "@/app/(dashboard)/dashboard/settings/actions";

export function RevalidateButton() {
  const [pending, startTransition] = useTransition();
  const [doneAt, setDoneAt] = useState<string | null>(null);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        type="button"
        disabled={pending}
        onClick={() =>
          startTransition(async () => {
            setError(false);
            try {
              const res = await revalidateSite();
              setDoneAt(res.at);
            } catch {
              setError(true);
            }
          })
        }
        className="inline-flex items-center gap-2 rounded-lg bg-soft-black px-4 py-2 text-sm font-medium text-pure transition-colors hover:bg-muted-charcoal disabled:opacity-60"
      >
        <RefreshCw size={14} className={pending ? "animate-spin" : undefined} />
        {pending ? "Refreshing…" : "Revalidate site"}
      </button>
      {error ? (
        <span className="text-xs text-red-500">Failed — try again.</span>
      ) : doneAt ? (
        <span className="text-xs text-fog">
          Refreshed at{" "}
          {new Date(doneAt).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      ) : null}
    </div>
  );
}
