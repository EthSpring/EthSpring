import { lightTheme, GlobalStyle } from "./ethereum-org-website";
import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "@docusaurus/Head";

/**
 * Root component that sets up ethereum-org-website theme.
 *
 * https://docusaurus.io/docs/using-themes#wrapper-your-site-with-root
 */
function Root({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <meta name="title" content="EthSpring | Ethereum Learning Resources" />
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://resources.ethuniversity.org/"
        />
        <meta
          property="og:title"
          content="EthSpring | Ethereum Learning Resources"
        />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://resources.ethuniversity.org/"
        />
        <meta
          property="twitter:title"
          content="EthSpring | Ethereum Learning Resources"
        />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="" />
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default Root;
