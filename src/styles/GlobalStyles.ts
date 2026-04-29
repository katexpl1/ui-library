import { createGlobalStyle } from "styled-components";
import { colors, fontSizes } from "../consts";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: ${fontSizes.md};
    color: ${colors.neutral[900]};
    background-color: ${colors.neutral[0]};
  }

  button, input, select, textarea {
    font-family: inherit;
  }
`;
