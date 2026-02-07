import styled, { css } from "styled-components";
import type { InputProps } from "./Input.types";

export const Wrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`;

export const HelperText = styled.span<{ error?: boolean }>`
  font-size: 12px;
  color: ${({ error }) => (error ? "#d32f2f" : "#666")};
`;

export const InputContainer = styled.div<{
  size: InputProps["size"];
  variant: InputProps["variant"];
  error?: boolean;
}>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  ${({ size }) =>
    size === "sm" &&
    css`
      padding: 4px 8px;
      font-size: 14px;
    `}

  ${({ size }) =>
    size === "md" &&
    css`
      padding: 8px 12px;
      font-size: 16px;
    `}

  ${({ size }) =>
    size === "lg" &&
    css`
      padding: 12px 16px;
      font-size: 18px;
    `}

  ${({ variant }) =>
    variant === "default" &&
    css`
      border: 1px solid #ccc;
      background-color: #fff;
    `}

  ${({ variant }) =>
    variant === "outlined" &&
    css`
      border: 2px solid #0070f3;
      background-color: #fff;
    `}

  ${({ variant }) =>
    variant === "filled" &&
    css`
      border: 1px solid transparent;
      background-color: #f5f5f5;
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: #d32f2f;
    `}

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
  margin: 0 4px;
`;

export const SlotButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;

  &:hover {
    opacity: 0.8;
  }
`;
