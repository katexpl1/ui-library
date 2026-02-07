import type { Preview } from "@storybook/react-vite";
import React from "react";
import { GlobalStyles } from "../src/styles/GlobalStyles";

const withGlobalStyles = (Story: any) => (
  <>
    <GlobalStyles />
    <Story />
  </>
);

const preview: Preview = {
  decorators: [withGlobalStyles],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
