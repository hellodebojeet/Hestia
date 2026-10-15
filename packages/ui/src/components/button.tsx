import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils.js";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-600 text-white shadow hover:bg-orange-700 focus-visible:ring-orange-600",
  secondary:
    "bg-stone-900 text-white shadow hover:bg-stone-700 focus-visible:ring-stone-900",
  outline:
    "border border-stone-300 bg-white text-stone-900 shadow-sm hover:bg-stone-100 focus-visible:ring-stone-400",
  ghost: "text-stone-700 hover:bg-stone-100 focus-visible:ring-stone-400",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ variant = "primary", size = "md", className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...rest}
      />
    );
  },
);
