import { cn } from "@/lib/utils";
import { LEAD_STATUS_LABEL, type LeadStatus } from "@/lib/leads";

const leadStatusStyles: Record<LeadStatus, string> = {
  new: "border-soft-black bg-soft-black text-pure",
  contacted: "border-cloud bg-warm-white text-stone-gray",
  qualified: "border-cloud bg-warm-white text-stone-gray",
};

export function LeadStatusPill({ status }: { status: LeadStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        leadStatusStyles[status]
      )}
    >
      {LEAD_STATUS_LABEL[status]}
    </span>
  );
}

export function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-cloud bg-pure px-5 py-4">
      <p className="label">{label}</p>
      <p className="mt-2 text-lg font-light text-soft-black">{value}</p>
      {hint && <p className="mt-0.5 text-xs text-fog">{hint}</p>}
    </div>
  );
}

export function PageHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="label">{label}</p>
      <h1 className="mt-2 text-2xl font-light tracking-tight text-soft-black">{title}</h1>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-zen-accent">{description}</p>
      )}
    </div>
  );
}
