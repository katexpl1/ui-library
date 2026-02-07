import type { ButtonHTMLAttributes, ElementType } from "react";

export type ButtonVariants = "primary" | "secondary" | "outline";
export type ButtonSizes = "sm" | "md" | "lg";

export interface ButtonProps<
  T extends ElementType = "button",
> extends ButtonHTMLAttributes<T> {
  as?: T;

  variant?: ButtonVariants;

  size?: ButtonSizes;

  isLoading?: boolean;
}
