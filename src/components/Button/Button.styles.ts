import styled, { css } from "styled-components";
import { colors, spacing, fontSizes, radius } from "../../consts";
import type { ButtonVariants, ButtonSizes } from "./Button.types";

const variantStyles = {
  primary: css`
    background-color: ${colors.primary[500]};
    color: ${colors.neutral[0]};
    border: none;
    &:hover:not(:disabled) {
      background-color: ${colors.primary[700]};
    }
  `,
  secondary: css`
    background-color: ${colors.neutral[200]};
    color: ${colors.neutral[600]};
    border: none;
    &:hover:not(:disabled) {
      background-color: ${colors.neutral[300]};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${colors.primary[500]};
    border: 2px solid ${colors.primary[500]};
    &:hover:not(:disabled) {
      background-color: ${colors.primary[50]};
    }
  `,
} satisfies Record<ButtonVariants, ReturnType<typeof css>>;

const sizeStyles = {
  sm: css`
    padding: ${spacing[1]} ${spacing[3]};
    font-size: ${fontSizes.sm};
  `,
  md: css`
    padding: ${spacing[2]} ${spacing[4]};
    font-size: ${fontSizes.md};
  `,
  lg: css`
    padding: ${spacing[3]} ${spacing[6]};
    font-size: ${fontSizes.lg};
  `,
} satisfies Record<ButtonSizes, ReturnType<typeof css>>;

export const StyledButton = styled.button<{ $variant: ButtonVariants; $size: ButtonSizes }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${radius.md};
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:focus-visible {
    outline: 2px solid ${colors.primary[500]};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ $variant }) => variantStyles[$variant]}
  ${({ $size }) => sizeStyles[$size]}
`;
