import type { ComponentPropsWithRef, ElementType } from "react";

export type ButtonVariants = "primary" | "secondary" | "outline";
export type ButtonSizes = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  as?: ElementType;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  isLoading?: boolean;
}
