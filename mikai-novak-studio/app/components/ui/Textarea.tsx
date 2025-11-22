"use client";

import { forwardRef } from "react";
import { cn } from "@/app/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCount?: boolean;
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, label, error, helperText, showCount, maxLength, ...props },
    ref
  ) => {
    const charCount = props.value?.toString().length || 0;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-primary-700 mb-2">
            {label}
            {props.required && <span className="text-error ml-1">*</span>}
          </label>
        )}
        <textarea
          className={cn(
            "w-full px-4 py-3 rounded-lg border transition-all duration-200",
            "placeholder:text-primary-400 outline-none resize-y min-h-[120px]",
            "focus:ring-2 focus:ring-offset-0",
            error
              ? "border-error focus:border-error focus:ring-error/20"
              : "border-primary-200 focus:border-accent-500 focus:ring-accent-500/20",
            className
          )}
          ref={ref}
          maxLength={maxLength}
          {...props}
        />
        <div className="flex justify-between mt-1.5">
          {error && <p className="text-sm text-error">{error}</p>}
          {helperText && !error && (
            <p className="text-sm text-primary-500">{helperText}</p>
          )}
          {showCount && maxLength && (
            <p
              className={cn(
                "text-sm ml-auto",
                charCount > maxLength * 0.9
                  ? "text-warning"
                  : "text-primary-400"
              )}
            >
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
