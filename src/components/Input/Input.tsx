import { forwardRef, useId, useState } from "react";
import type { ChangeEvent, FocusEvent } from "react";
import {
  Wrapper,
  Label,
  HelperText,
  InputContainer,
  StyledInput,
  Slot,
  SlotButton,
} from "./Input.styles";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      size = "md",
      variant = "default",
      label,
      helperText,
      error,
      validation,
      leftElement,
      rightElement,
      clearable,
      onClear,
      fullWidth,
      id,
      value,
      defaultValue,
      onChange,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const [internalError, setInternalError] = useState<string | null>(null);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const validateOn = validation ?? "blur";

    const resolvedError =
      typeof error === "string"
        ? error
        : error
          ? "Invalid value"
          : internalError;

    const runValidation = (value: string) => {
      if (!validation) {
        return;
      }

      const rules = Array.isArray(validation) ? validation : [validation];

      for (const rule of rules) {
        const isValid = rule.pattern
          ? rule.pattern.test(value)
          : rule.validate
            ? rule.validate(value)
            : true;

        if (!isValid) {
          setInternalError(rule.errorMessage);
          return false;
        }
      }

      setInternalError(null);
      return true;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.value;

      if (!isControlled) {
        setInternalValue(nextValue);
      }

      if (validation) {
        runValidation(nextValue);
      }

      onChange?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (validation && validateOn === "blur") {
        runValidation(e.target.value);
      }

      onBlur?.(e);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue("");
      }

      setInternalError(null);
      onClear?.();
    };

    return (
      <Wrapper fullWidth={fullWidth}>
        {label && <Label htmlFor={inputId}>{label}</Label>}

        <InputContainer size={size} variant={variant} error={!!resolvedError}>
          {leftElement && <Slot>{leftElement}</Slot>}

          <StyledInput
            ref={ref}
            id={inputId}
            type={type}
            value={currentValue}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={!!resolvedError}
            {...props}
          />

          {clearable && currentValue && (
            <SlotButton
              type="button"
              onClick={handleClear}
              aria-label="Clear input"
            >
              ✕
            </SlotButton>
          )}

          {rightElement && <Slot>{rightElement}</Slot>}
        </InputContainer>

        {(helperText || resolvedError) && (
          <HelperText error={!!resolvedError}>
            {resolvedError ?? helperText}
          </HelperText>
        )}
      </Wrapper>
    );
  },
);

Input.displayName = "Input";
