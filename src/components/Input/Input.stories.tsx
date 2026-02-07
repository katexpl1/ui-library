import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    leftElement: { table: { disable: true } },
    rightElement: { table: { disable: true } },
    onClear: { table: { disable: true } },
    validation: { table: { disable: true } },

    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: {
      control: "select",
      options: ["default", "outlined", "filled"],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Enter your text",
    type: "text",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    error: "Invalid email address",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    leftElement: "🔍",
    placeholder: "Search...",
  },
};

export const Clearable: Story = {
  args: {
    label: "Username",
    clearable: true,
    defaultValue: "john_doe",
  },
};

export const WithValidation: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    validation: [
      {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        errorMessage: "Invalid email address",
      },
    ],
  },
};

export const NumbersOnly: Story = {
  args: {
    label: "Only numbers",
    validation: [
      { pattern: /^[0-9]+$/, errorMessage: "Only digits allowed" },
      {
        validate: (val) => val.length >= 5 && val.length <= 10,
        errorMessage: "Number length must be between 5 and 10",
        validateOn: "blur",
      },
    ],
  },
};
