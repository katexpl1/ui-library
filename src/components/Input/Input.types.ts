import type { InputHTMLAttributes, ReactNode } from "react";

export type InputTypes =
  | "text"
  | "email"
  | "password"
  | "number"
  | "search"
  | "tel"
  | "url";

export type InputSizes = "sm" | "md" | "lg";
export type InputVariants = "default" | "outlined" | "filled";

export interface InputValidationRule {
  pattern?: RegExp;
  validate?: (value: string) => boolean;
  errorMessage: string;
  validateOn?: "change" | "blur";
}

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "type"
> {
  type?: InputTypes;
  size?: InputSizes;
  variant?: InputVariants;

  label?: string;
  helperText?: string;
  error?: boolean | string;
  validation?: InputValidationRule | InputValidationRule[];

  leftElement?: ReactNode;
  rightElement?: ReactNode;

  clearable?: boolean;
  onClear?: () => void;

  fullWidth?: boolean;
}
