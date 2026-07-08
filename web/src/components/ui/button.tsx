import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40",
    variant === "primary" &&
      "bg-soft-black text-pure hover:bg-muted-charcoal shadow-sm",
    variant === "secondary" &&
      "bg-pure text-soft-black border border-cloud hover:border-fog hover:shadow-sm",
    variant === "ghost" &&
      "text-stone-gray hover:text-soft-black hover:bg-pure/60",
    size === "default" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-6 py-3 text-[15px]",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
