import type { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

export function Button({
  ref,
  as,
  variant = "primary",
  size = "md",
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      ref={ref}
      as={as}
      $variant={variant}
      $size={size}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </StyledButton>
  );
}

Button.displayName = "Button";
