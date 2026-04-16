import { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  children: ReactNode;
  className?: string;
}

export function Button({ variant = "primary", href, children, className, ...props }: ButtonProps) {
  const baseStyles = "px-5 py-2.5 rounded-lg text-sm transition-colors duration-150 inline-flex items-center justify-center font-medium";
  
  const variants = {
    primary: "bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950",
    secondary: "border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white bg-transparent"
  };

  const classes = twMerge(clsx(baseStyles, variants[variant], className));

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
