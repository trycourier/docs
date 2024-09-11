const path = require('path');

// Manually resolve paths
const sidebarPath = path.resolve(__dirname, './src/theme/sidebars.js');
const customCssPath = path.resolve(__dirname, './src/css/custom.css');

// Import other modules
const codeTheme = require("./src/theme/codeTheme");
const navbarItems = require("./src/theme/navbarItems");
const metadata = require("./src/theme/metadata");
const rehypeExternalLinks = require("./src/theme/plugins/rehypeExternalLinks");
const tutorialFilters = require("./plugins/tutorial-filters");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Courier Docs",
  url: "https://www.courier.com",
  baseUrl: process.env.VERCEL_ENV === "preview" ? "/" : "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: true,
  organizationName: "trycourier",
  projectName: "docs",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: sidebarPath,
          remarkPlugins: [rehypeExternalLinks],
          lastVersion: "2.0.0",
          versions: {
            current: {
              label: "1.0.0",
              path: "1.0.0",
              banner: "unmaintained",
              badge: false,
            },
            "2.0.0": {
              badge: false,
            },
          },
        },
        blog: false,
        pages: false,
        theme: {
          customCss: customCssPath,
        },
        sitemap: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/og-image.png",
      metadata,
      colorMode: {
        disableSwitch: false,
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        style: "primary",
        logo: {
          alt: "Courier Logo",
          src: "img/courier-light.png",
          srcDark: "img/courier-dark.png",
          href: "https://www.courier.com",
          target: "_self",
        },
        items: navbarItems,
      },
      footer: {},
      prism: {
        theme: codeTheme,
        darkTheme: codeTheme,
        additionalLanguages: [
          "markup-templating",
          "ruby", 
          "java", 
          "uri", 
          "bash", 
          "json", 
          "handlebars",
          "php",
          "python",
        ],
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: ["**/1.0.0/**"],
        filename: "sitemap.xml",
      },
    ],
    tutorialFilters,
  ],
  scripts: [
    {
      src: "/docs/js/intercom.js",
      async: true,
    },
  ],
};