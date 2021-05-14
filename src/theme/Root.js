import { lightTheme, GlobalStyle } from "ethereum-org-website/src/theme";
import { IntlProvider, IntlContextProvider } from "gatsby-plugin-intl";
import React from "react";
import { ThemeProvider } from "styled-components";

/**
 * Root component that correctly initializes providers which are required for
 * ethereum.org components to work correctly.
 *
 * https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root
 */
function Root({ children }) {
  // Dummy intl object to conform to type definition
  const intl = {
    language: "en",
    defaultLanguage: "en",
    messages: undefined,
  };

  return (
    <IntlProvider
      locale={intl.language}
      defaultLocale={intl.defaultLanguage}
      messages={intl.messages}
    >
      <IntlContextProvider value={intl}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </IntlContextProvider>
    </IntlProvider>
  );
}

export default Root;
