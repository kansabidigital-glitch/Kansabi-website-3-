import { cn } from "@/lib/utils";

/*
 * Thin line-art London silhouette — Shard, Gherkin, Big Ben, London Eye
 * plus filler blocks. Stroke uses currentColor so callers set tone via
 * a text-color utility class. Kept to plain paths/shapes, no raster assets.
 */
export function LondonSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      className={cn("overflow-visible", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      {/* filler blocks */}
      <rect x="10" y="140" width="70" height="100" />
      <rect x="190" y="160" width="50" height="80" />
      <rect x="370" y="170" width="60" height="70" />
      <rect x="450" y="110" width="55" height="130" />
      <rect x="600" y="180" width="70" height="60" />
      <rect x="900" y="165" width="60" height="75" />
      <rect x="980" y="185" width="50" height="55" />
      <rect x="1050" y="145" width="65" height="95" />
      <rect x="1130" y="175" width="55" height="65" />

      {/* the Gherkin — 30 St Mary Axe */}
      <path d="M100 240 V120 Q100 90 130 90 Q160 90 160 120 V240" />

      {/* the Shard */}
      <path d="M250 240 L260 60 L295 20 L330 60 L340 240" />

      {/* Big Ben */}
      <rect x="510" y="70" width="42" height="170" />
      <path d="M510 70 L531 40 L552 70" />
      <circle cx="531" cy="95" r="10" />
      <line x1="531" y1="40" x2="531" y2="24" />

      {/* London Eye */}
      <g>
        <line x1="715" y1="240" x2="765" y2="150" />
        <line x1="845" y1="240" x2="795" y2="150" />
        <circle cx="780" cy="150" r="80" />
        <circle cx="780" cy="150" r="3" fill="currentColor" />
        <line x1="780" y1="70" x2="780" y2="230" />
        <line x1="700" y1="150" x2="860" y2="150" />
        <line x1="723" y1="93" x2="837" y2="207" />
        <line x1="837" y1="93" x2="723" y2="207" />
      </g>
    </svg>
  );
}
