"use client";

import { useRef } from "react";
import { updateLeadStatus } from "@/app/(dashboard)/dashboard/leads/actions";
import {
  LEAD_STATUSES,
  LEAD_STATUS_LABEL,
  type LeadStatus,
} from "@/lib/leads";

// Inline status editor: changing the <select> submits the server action.
// Progressive-enhancement friendly — it is a real form, the onChange only
// saves a click. The write is authorised server-side in updateLeadStatus.
export function LeadStatusSelect({
  id,
  status,
}: {
  id: string;
  status: LeadStatus;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} action={updateLeadStatus}>
      <input type="hidden" name="id" value={id} />
      <select
        name="status"
        defaultValue={status}
        aria-label="Lead status"
        onChange={() => formRef.current?.requestSubmit()}
        className="rounded-lg border border-cloud bg-warm-white px-2.5 py-1 text-xs font-medium text-soft-black transition-colors hover:border-fog focus:border-soft-black focus:outline-none"
      >
        {LEAD_STATUSES.map((s) => (
          <option key={s} value={s}>
            {LEAD_STATUS_LABEL[s]}
          </option>
        ))}
      </select>
    </form>
  );
}
