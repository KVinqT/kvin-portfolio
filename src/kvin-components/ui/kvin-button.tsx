import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { mergeKvinStyles } from "@/kvin-helpers/style-utilities";

const kvinButtonVariations = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      appearance: {
        primary: "bg-kvinPrimary text-white hover:opacity-90 focus:ring-kvinPrimary",
        secondary: "bg-kvinSecondary text-white hover:opacity-90 focus:ring-kvinSecondary",
        accent: "bg-kvinAccent text-white hover:opacity-90 focus:ring-kvinAccent",
        outline: "border-2 border-kvinPrimary text-kvinPrimary hover:bg-kvinPrimary hover:text-white",
        ghost: "text-kvinPrimary hover:bg-kvinPrimary/10",
      },
      dimensions: {
        small: "h-9 px-4 text-sm",
        medium: "h-11 px-6 text-base",
        large: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      appearance: "primary",
      dimensions: "medium",
    },
  }
);

export interface KvinButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof kvinButtonVariations> {
  asChild?: boolean;
}

const KvinButton = React.forwardRef<HTMLButtonElement, KvinButtonProps>(
  ({ className, appearance, dimensions, ...props }, ref) => {
    return (
      <button
        className={mergeKvinStyles(kvinButtonVariations({ appearance, dimensions, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
KvinButton.displayName = "KvinButton";

export { KvinButton, kvinButtonVariations };
