import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-medium rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-700",
        primary: "bg-primary-900 text-white",
        accent: "bg-accent-100 text-accent-700",
        success: "bg-green-100 text-green-700",
        warning: "bg-amber-100 text-amber-700",
        error: "bg-red-100 text-red-700",
      },
      size: {
        sm: "text-xs px-2 py-0.5",
        md: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
