"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-950 uppercase tracking-wider",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-1 hover:scale-105 active:scale-100 focus:ring-cyan-500 rounded-full",
        secondary:
          "bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 focus:ring-cyan-500 rounded-full",
        ghost:
          "bg-white/5 text-primary-300 hover:bg-white/10 hover:text-white focus:ring-primary-500 rounded-xl backdrop-blur-sm",
        outline:
          "bg-transparent border border-primary-700 text-primary-400 hover:border-purple-500 hover:text-purple-400 focus:ring-purple-500 rounded-xl",
        link: "bg-transparent text-cyan-400 underline-offset-4 hover:underline hover:text-cyan-300 focus:ring-cyan-500 p-0",
        glow: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:to-purple-400 before:opacity-0 hover:before:opacity-100 before:transition-opacity hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]",
      },
      size: {
        sm: "text-xs px-5 py-2.5 rounded-full",
        md: "text-sm px-7 py-3.5 rounded-full",
        lg: "text-base px-10 py-5 rounded-full",
        icon: "p-3 rounded-xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            {leftIcon}
            <span className="relative z-10">{children}</span>
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
