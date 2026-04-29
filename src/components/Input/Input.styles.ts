import styled, { css } from "styled-components";
import { colors, spacing, fontSizes, radius } from "../../consts";
import type { InputSizes, InputVariants } from "./Input.types";

const sizeStyles = {
  sm: css`
    padding: ${spacing[1]} ${spacing[2]};
    font-size: ${fontSizes.sm};
  `,
  md: css`
    padding: ${spacing[2]} ${spacing[3]};
    font-size: ${fontSizes.md};
  `,
  lg: css`
    padding: ${spacing[3]} ${spacing[4]};
    font-size: ${fontSizes.lg};
  `,
} satisfies Record<InputSizes, ReturnType<typeof css>>;

const variantStyles = {
  default: css`
    border: 1px solid ${colors.neutral[400]};
    background-color: ${colors.neutral[0]};
  `,
  outlined: css`
    border: 2px solid ${colors.primary[500]};
    background-color: ${colors.neutral[0]};
  `,
  filled: css`
    border: 1px solid transparent;
    background-color: ${colors.neutral[100]};
  `,
} satisfies Record<InputVariants, ReturnType<typeof css>>;

export const Wrapper = styled.div<{ $fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${spacing[1]};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

export const HelperText = styled.span<{ $error?: boolean }>`
  font-size: ${fontSizes.xs};
  color: ${({ $error }) => ($error ? colors.error[500] : colors.neutral[500])};
`;

export const InputContainer = styled.div<{
  $size?: InputSizes;
  $variant?: InputVariants;
  $error?: boolean;
}>`
  display: flex;
  align-items: center;
  border-radius: ${radius.md};
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  ${({ $size = "md" }) => sizeStyles[$size]}
  ${({ $variant = "default" }) => variantStyles[$variant]}
  ${({ $error }) => $error && css`border-color: ${colors.error[500]};`}

  &:focus-within {
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.25);
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font: inherit;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Slot = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 ${spacing[1]};
`;

export const SlotButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0 ${spacing[1]};
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;

  &:hover {
    opacity: 0.8;
  }
`;
