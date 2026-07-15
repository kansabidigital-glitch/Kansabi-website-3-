"use client";

type DataLayerEvent = {
  event: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    // gtag consent calls push `arguments` objects, so the type stays loose.
    dataLayer?: unknown[];
  }
}

export function pushEvent(event: DataLayerEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackGenerateLead(source: string) {
  pushEvent({ event: "generate_lead", lead_source: source });
}

export function trackCtaClick(location: string, label: string) {
  pushEvent({ event: "cta_click", cta_location: location, cta_label: label });
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const UTM_STORAGE_KEY = "kansabi_utm";

/**
 * Read UTM params from the current URL and persist them for the session,
 * so a lead submitted from a later page still carries first-touch UTMs.
 */
export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: UtmParams = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value.slice(0, 200);
  }

  try {
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as UtmParams) : {};
  } catch {
    return fromUrl;
  }
}
