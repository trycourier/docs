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
const webpack = require('webpack');

const isVercelPreview = process.env.VERCEL_ENV === "preview";


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Courier Docs",
  url: "https://www.courier.com",
  baseUrl: isVercelPreview ? "/" : "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
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
      inkeepConfig: {
        baseSettings: {
          apiKey: process.env.INKEEP_KEY, // required
          integrationId: "cm20zebo700mxx0eqok6lwrf9", // required
          organizationId: "org_mJdpWbLsGPeOwwPd", // required
          primaryBrandColor: "#3E2A49", // required -- your brand color, the widget color scheme is derived from this
          organizationDisplayName: "Courier",
          // ...optional settings
          theme: {
            // stylesheetUrls: ['/path/to/stylesheets'], // optional
            syntaxHighlighter: {
              lightTheme: codeTheme, // optional -- pass in the Prism theme you're using
              darkTheme: codeTheme, // optional -- pass in the Prism theme you're using
            },
          }
        },
        modalSettings: {
          // optional settings
        },
        searchSettings: {
          // optional settings
        },
        aiChatSettings: {
          // optional settings
          chatSubjectName: "Courier",
          botAvatarSrcUrl: "https://framerusercontent.com/images/UaLJKrAmvdMARtdLOIVEDfj5vuQ.svg",
          quickQuestions: [
            "How to create and send an email notification?",
            "How to setup a template approval workflow?",
            "Inserting data with variables?",
            "Set up a webhook destination?",
            "How to change 'from' email fields?"
          ],
        },
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
    function (context, options) {
      return {
        name: 'docusaurus-plugin-env',
        configureWebpack(config, isServer, utils) {
          return {
            plugins: [
              new webpack.DefinePlugin({
                'process.env': JSON.stringify(context.siteConfig.customFields.env),
              }),
            ],
          };
        },
      };
    }
  ],
  scripts: [
    {
      src: isVercelPreview ? "/js/intercom.js" : "/docs/js/intercom.js",
      async: true,
    },
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({ docsRouteBasePath: "/", 
        indexBlog: false, 
        hashed: "filename" }),
    ],
    "@inkeep/docusaurus/searchBar",
    "@inkeep/docusaurus/chatButton"
  ],
  customFields: {
    env: {
      API_HOST: process.env.API_HOST || 'https://api.courier.com',
      INKEEP_KEY: process.env.INKEEP_KEY
    },
  },
};