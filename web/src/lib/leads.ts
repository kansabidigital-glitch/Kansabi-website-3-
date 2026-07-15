// Shared shape + labels for the Leads collection, used by the dashboard
// Overview and Leads modules. Kept in sync with collections/Leads.ts.

export type LeadStatus = "new" | "contacted" | "qualified";

export type LeadUtm = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

export type Lead = {
  id: string | number;
  name: string;
  email: string;
  company: string;
  message?: string | null;
  source?: string | null;
  utm?: LeadUtm | null;
  status: LeadStatus;
  createdAt: string;
};

export const LEAD_STATUSES: LeadStatus[] = ["new", "contacted", "qualified"];

export const LEAD_STATUS_LABEL: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
};

export function isLeadStatus(value: unknown): value is LeadStatus {
  return (
    value === "new" || value === "contacted" || value === "qualified"
  );
}

export function formatLeadDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function daysAgo(days: number): Date {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000);
}
