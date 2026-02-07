import { forwardRef } from "react";
import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";

const variantStyles = {
  primary: css`
    background-color: #0070f3;
    color: white;
    border: none;
    &:hover {
      background-color: #005bb5;
    }
  `,
  secondary: css`
    background-color: #eaeaea;
    color: #333;
    border: none;
    &:hover {
      background-color: #cacaca;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #0070f3;
    border: 2px solid #0070f3;
    &:hover {
      background-color: #f0f8ff;
    }
  `,
};

const sizeStyles = {
  sm: css`
    padding: 4px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  lg: css`
    padding: 12px 24px;
    font-size: 18px;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant = "primary" }) => variantStyles[variant]}
  ${({ size = "md" }) => sizeStyles[size]}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", isLoading, children, ...props },
    ref,
  ) => (
    <StyledButton
      ref={ref}
      variant={variant}
      size={size}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </StyledButton>
  ),
);

Button.displayName = "Button";
