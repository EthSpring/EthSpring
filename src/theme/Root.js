import { lightTheme, GlobalStyle } from "./ethereum-org-website";
import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * Root component that sets up ethereum-org-website theme.
 *
 * https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root
 */
function Root({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Root;
