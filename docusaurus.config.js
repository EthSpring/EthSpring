const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "EthSpring",
  tagline: "Open Ethereum Learning Resources",
  url: "https://ethspring.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MYKatz", // Usually your GitHub org/user name.
  projectName: "EthSpring", // Usually your repo name.
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true, // disable dark mode switch
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "EthSpring",
      logo: {
        alt: "EthSpring Logo",
        src: "img/logo.svg",
      },
      items: [
        /*         {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        } */
      ],
    },
    footer: {
      style: "dark",
      /*       links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },

        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ], */
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/MYKatz/EthSpring/edit/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        customCss: [
          require.resolve("./src/css/ethereum-org-website.css"),
          require.resolve("./src/css/custom.css"),
        ],
      },
    ],
  ],
};
