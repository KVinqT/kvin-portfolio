import * as React from "react";
import { mergeKvinStyles } from "@/kvin-helpers/style-utilities";

const KvinCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeKvinStyles(
      "rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl",
      className
    )}
    {...props}
  />
));
KvinCard.displayName = "KvinCard";

const KvinCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeKvinStyles("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
));
KvinCardHeader.displayName = "KvinCardHeader";

const KvinCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={mergeKvinStyles(
      "text-3xl font-bold leading-tight tracking-tight text-kvinPrimary",
      className
    )}
    {...props}
  />
));
KvinCardTitle.displayName = "KvinCardTitle";

const KvinCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={mergeKvinStyles("text-base text-gray-600", className)}
    {...props}
  />
));
KvinCardDescription.displayName = "KvinCardDescription";

const KvinCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={mergeKvinStyles("p-8 pt-0", className)} {...props} />
));
KvinCardContent.displayName = "KvinCardContent";

const KvinCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={mergeKvinStyles("flex items-center p-8 pt-0", className)}
    {...props}
  />
));
KvinCardFooter.displayName = "KvinCardFooter";

export { KvinCard, KvinCardHeader, KvinCardFooter, KvinCardTitle, KvinCardDescription, KvinCardContent };
