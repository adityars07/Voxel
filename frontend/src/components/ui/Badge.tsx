import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  variant?: "default" | "accent";
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const baseStyles = "font-mono text-xs tracking-wider uppercase px-3 py-1 rounded-full inline-flex items-center gap-1.5";
  
  const variants = {
    default: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700",
    accent: "bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30"
  };

  return (
    <div className={twMerge(clsx(baseStyles, variants[variant], className))}>
      {children}
    </div>
  );
}
