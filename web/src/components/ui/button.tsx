import { cn } from "@/lib/utils";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href?: string;
  // Shared between <a> and <button> renders, so the element type stays broad.
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function Button({
  className,
  variant = "primary",
  size = "default",
  href,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-accent/40",
    variant === "primary" &&
      "bg-soft-black text-pure hover:bg-muted-charcoal shadow-sm",
    variant === "secondary" &&
      "bg-pure text-soft-black border border-cloud hover:border-accent/50 hover:text-accent hover:shadow-sm",
    variant === "ghost" &&
      "text-stone-gray hover:text-soft-black hover:bg-pure/60",
    size === "default" && "px-5 py-2.5 text-sm",
    size === "lg" && "px-6 py-3 text-[15px]",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
