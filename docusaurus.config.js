const codeTheme = require("./src/theme/codeTheme");
const navbarItems = require("./src/theme/navbarItems");
const metadata = require("./src/theme/metadata");

// With JSDoc @type annotations, IDEs can provide config autocompletion
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
          sidebarPath: require.resolve("./src/theme/sidebars"),
          remarkPlugins: [require("./src/theme/plugins/rehypeExternalLinks")],
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
          customCss: require.resolve("./src/css/custom.css"),
        },
        // Using a custom plugin to filter out paths
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
        respectPrefersColorScheme: false,
      },
      navbar: {
        hideOnScroll: true,
        style: "primary",
        logo: {
          alt: "Courier Logo",
          src: "img/logo.svg",
          href: "https://www.courier.com",
          target: "_self",
        },
        items: navbarItems,
      },
      footer: {},
      prism: {
        theme: codeTheme,
        additionalLanguages: ["ruby", "php", "java"],
      },
    }),

  plugins: [
    ["docusaurus2-dotenv", { systemvars: true, safe: true }],
    ...(process.env.SEGMENT_KEY
      ? [["docusaurus-plugin-segment", { apiKey: process.env.SEGMENT_KEY }]]
      : []),
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      { docsRouteBasePath: "/", indexBlog: false, hashed: true },
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
  ],
};
