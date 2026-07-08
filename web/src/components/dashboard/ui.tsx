import { cn } from "@/lib/utils";

type Status = "connected" | "pending" | "disconnected";

const statusStyles: Record<Status, string> = {
  connected: "bg-soft-black",
  pending: "bg-fog",
  disconnected: "bg-red-400",
};

const statusLabels: Record<Status, string> = {
  connected: "Connected",
  pending: "Pending setup",
  disconnected: "Not connected",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-cloud bg-warm-white px-2.5 py-1 text-xs text-stone-gray">
      <span className={cn("h-1.5 w-1.5 rounded-full", statusStyles[status])} />
      {statusLabels[status]}
    </span>
  );
}

export function ModuleCard({
  title,
  description,
  status,
  action,
  children,
}: {
  title: string;
  description: string;
  status: Status;
  action?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-cloud bg-pure p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium text-soft-black">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-zen-accent">{description}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      {action && <div className="mt-4">{action}</div>}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

export function PlaceholderPanel({ label }: { label?: string }) {
  return (
    <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-cloud bg-warm-white">
      <p className="text-xs text-fog">{label ?? "Connect data source to populate"}</p>
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
