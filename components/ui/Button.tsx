import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30";

  const styles = {
    primary:
      "bg-wine text-white hover:bg-wine/90 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "text-foreground hover:text-accent hover:bg-accent/5",
    outline:
      "border border-black/10 text-foreground hover:border-accent hover:text-accent hover:bg-accent/5",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
