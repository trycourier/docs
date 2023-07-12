/** @type {import('tailwindcss').Config} */
const { filterTokensByType, flatten } = require("./tailwind/fns");

// -------core tokens-------
const coreTokens = require("./tailwind/build/figma-tokens/sd-output/core.json");
const coreColors = filterTokensByType("color", coreTokens).color;
const corePadding = filterTokensByType("spacing", coreTokens).padding;
const coreSpacing = filterTokensByType("spacing", coreTokens).spacing;
const coreFonts = filterTokensByType("fontFamilies", coreTokens)["font-family"];
const coreFontWeights = filterTokensByType("fontWeights", coreTokens)["font-weight"];
const coreLineHeights = filterTokensByType("lineHeights", coreTokens)["line-height"];
const coreFontSizes = filterTokensByType("fontSizes", coreTokens)["font-size"];

const coreTextFonts = filterTokensByType("fontFamilies", coreTokens).text;
// all these can be grouped together under fontSize because tailwind allows defaults
const coreTextFontWeights = filterTokensByType("fontWeights", coreTokens).text;
const coreTextLineHeights = filterTokensByType("lineHeight", coreTokens).text;
const coreTextFontSizes = filterTokensByType("fontSizes", coreTokens).text;
const coreTextFontDefaults = {
  regular: {
    xs: {
      ...coreTextLineHeights.regular.xs,
      ...coreTextFontWeights.regular.xs,
    },
    sm: {
      ...coreTextLineHeights.regular.sm,
      ...coreTextFontWeights.regular.sm,
    },
    md: {
      ...coreTextLineHeights.regular.md,
      ...coreTextFontWeights.regular.md,
    },
    lg: {
      ...coreTextLineHeights.regular.lg,
      ...coreTextFontWeights.regular.lg,
    },
    xl: {
      ...coreTextLineHeights.regular.xl,
      ...coreTextFontWeights.regular.xl,
    },
  },
  medium: {
    xs: {
      ...coreTextLineHeights.medium.xs,
      ...coreTextFontWeights.medium.xs,
    },
    sm: {
      ...coreTextLineHeights.medium.sm,
      ...coreTextFontWeights.medium.sm,
    },
    md: {
      ...coreTextLineHeights.medium.md,
      ...coreTextFontWeights.medium.md,
    },
    lg: {
      ...coreTextLineHeights.medium.lg,
      ...coreTextFontWeights.medium.lg,
    },
    xl: {
      ...coreTextLineHeights.medium.xl,
      ...coreTextFontWeights.medium.xl,
    },
  },
  "semi-bold": {
    xs: {
      ...coreTextLineHeights["semi-bold"].xs,
      ...coreTextFontWeights["semi-bold"].xs,
    },
    sm: {
      ...coreTextLineHeights["semi-bold"].sm,
      ...coreTextFontWeights["semi-bold"].sm,
    },
    md: {
      ...coreTextLineHeights["semi-bold"].md,
      ...coreTextFontWeights["semi-bold"].md,
    },
    lg: {
      ...coreTextLineHeights["semi-bold"].lg,
      ...coreTextFontWeights["semi-bold"].lg,
    },
    xl: {
      ...coreTextLineHeights["semi-bold"].xl,
      ...coreTextFontWeights["semi-bold"].xl,
    },
  },
  bold: {
    xs: {
      ...coreTextLineHeights.bold.xs,
      ...coreTextFontWeights.bold.xs,
    },
    sm: {
      ...coreTextLineHeights.bold.sm,
      ...coreTextFontWeights.bold.sm,
    },
    md: {
      ...coreTextLineHeights.bold.md,
      ...coreTextFontWeights.bold.md,
    },
    lg: {
      ...coreTextLineHeights.bold.lg,
      ...coreTextFontWeights.bold.lg,
    },
    xl: {
      ...coreTextLineHeights.bold.xl,
      ...coreTextFontWeights.bold.xl,
    },
  },
};
const coreTextFontSizesWithDefaults = {
  regular: {
    xs: [coreTextFontSizes.regular.xs, coreTextFontDefaults.regular.xs],
    sm: [coreTextFontSizes.regular.sm, coreTextFontDefaults.regular.sm],
    md: [coreTextFontSizes.regular.md, coreTextFontDefaults.regular.md],
    lg: [coreTextFontSizes.regular.lg, coreTextFontDefaults.regular.lg],
    xl: [coreTextFontSizes.regular.xl, coreTextFontDefaults.regular.xl],
  },
  medium: {
    xs: [coreTextFontSizes.medium.xs, coreTextFontDefaults.medium.xs],
    sm: [coreTextFontSizes.medium.sm, coreTextFontDefaults.medium.sm],
    md: [coreTextFontSizes.medium.md, coreTextFontDefaults.medium.md],
    lg: [coreTextFontSizes.medium.lg, coreTextFontDefaults.medium.lg],
    xl: [coreTextFontSizes.medium.xl, coreTextFontDefaults.medium.xl],
  },
  "semi-bold": {
    xs: [coreTextFontSizes["semi-bold"].xs, coreTextFontDefaults["semi-bold"].xs],
    sm: [coreTextFontSizes["semi-bold"].sm, coreTextFontDefaults["semi-bold"].sm],
    md: [coreTextFontSizes["semi-bold"].md, coreTextFontDefaults["semi-bold"].md],
    lg: [coreTextFontSizes["semi-bold"].lg, coreTextFontDefaults["semi-bold"].lg],
    xl: [coreTextFontSizes["semi-bold"].xl, coreTextFontDefaults["semi-bold"].xl],
  },
  bold: {
    xs: [coreTextFontSizes.bold.xs, coreTextFontDefaults.bold.xs],
    sm: [coreTextFontSizes.bold.sm, coreTextFontDefaults.bold.sm],
    md: [coreTextFontSizes.bold.md, coreTextFontDefaults.bold.md],
    lg: [coreTextFontSizes.bold.lg, coreTextFontDefaults.bold.lg],
    xl: [coreTextFontSizes.bold.xl, coreTextFontDefaults.bold.xl],
  },
};

const coreSizing = filterTokensByType("sizing", coreTokens);
const coreBorderRadius = filterTokensByType("borderRadius", coreTokens)["border-radius"];
const coreBorderWidth = filterTokensByType("borderWidth", coreTokens)["border-width"];
const coreBoxShadow = filterTokensByType("boxShadow", coreTokens).shadow;

// -------light mode tokens-------
const lightTokens = require("./tailwind/build/figma-tokens/sd-output/light.json");
const lightColors = filterTokensByType("color", lightTokens);
const lightFonts = filterTokensByType("fontFamilies", lightTokens);
// all these can be grouped together under fontSize because tailwind allows defaults
const lightFontWeights = filterTokensByType("fontWeights", lightTokens);
const lightLineHeights = filterTokensByType("lineHeight", lightTokens);
const lightFontSizes = filterTokensByType("fontSizes", lightTokens);
const lightFontDefaults = {
  core: {
    default: {
      ...lightLineHeights.core.default,
      ...lightFontWeights.core.default,
    },
    label: {
      ...lightLineHeights.core.label,
      ...lightFontWeights.core.label,
    },
    input: {
      ...lightLineHeights.core.input,
      ...lightFontWeights.core.input,
    },
    button: {
      ...lightLineHeights.core.button,
      ...lightFontWeights.core.button,
    },
    "sub-text": {
      ...lightLineHeights.core["sub-text"],
      ...lightFontWeights.core["sub-text"],
    },
    "header-table-row": {
      ...lightLineHeights.core["header-table-row"],
      ...lightFontWeights.core["header-table-row"],
    },
    "header-top-bar": {
      ...lightLineHeights.core["header-top-bar"],
      ...lightFontWeights.core["header-top-bar"],
    },
    "header-subsection": {
      ...lightLineHeights.core["header-subsection"],
      ...lightFontWeights.core["header-subsection"],
    },
  },
};
const lightFontSizesWithDefaults = {
  core: {
    default: [lightFontSizes.core.default, lightFontDefaults.core.default],
    label: [lightFontSizes.core.label, lightFontDefaults.core.label],
    input: [lightFontSizes.core.input, lightFontDefaults.core.input],
    button: [lightFontSizes.core.button, lightFontDefaults.core.button],
    "sub-text": [lightFontSizes.core["sub-text"], lightFontDefaults.core["sub-text"]],
    "header-table-row": [
      lightFontSizes.core["header-table-row"],
      lightFontDefaults.core["header-table-row"],
    ],
    "header-top-bar": [
      lightFontSizes.core["header-top-bar"],
      lightFontDefaults.core["header-top-bar"],
    ],
    "header-subsection": [
      lightFontSizes.core["header-subsection"],
      lightFontDefaults.core["header-subsection"],
    ],
  },
};

// -------dark mode tokens-------
const darkTokens = require("./tailwind/build/figma-tokens/sd-output/dark.json");
const darkColors = filterTokensByType("color", darkTokens);
const darkFonts = filterTokensByType("fontFamilies", darkTokens);
// all these can be grouped together under fontSize because tailwind allows defaults
const darkFontWeights = filterTokensByType("fontWeights", darkTokens);
const darkLineHeights = filterTokensByType("lineHeight", darkTokens);
const darkFontSizes = filterTokensByType("fontSizes", darkTokens);
const darkFontDefaults = {
  core: {
    default: {
      ...darkLineHeights.core.default,
      ...darkFontWeights.core.default,
    },
    label: {
      ...darkLineHeights.core.label,
      ...darkFontWeights.core.label,
    },
    input: {
      ...darkLineHeights.core.input,
      ...darkFontWeights.core.input,
    },
    button: {
      ...darkLineHeights.core.button,
      ...darkFontWeights.core.button,
    },
    "sub-text": {
      ...darkLineHeights.core["sub-text"],
      ...darkFontWeights.core["sub-text"],
    },
    "header-table-row": {
      ...darkLineHeights.core["header-table-row"],
      ...darkFontWeights.core["header-table-row"],
    },
    "header-top-bar": {
      ...darkLineHeights.core["header-top-bar"],
      ...darkFontWeights.core["header-top-bar"],
    },
    "header-subsection": {
      ...darkLineHeights.core["header-subsection"],
      ...darkFontWeights.core["header-subsection"],
    },
  },
};
const darkFontSizesWithDefaults = {
  core: {
    default: [darkFontSizes.core.default, darkFontDefaults.core.default],
    label: [darkFontSizes.core.label, darkFontDefaults.core.label],
    input: [darkFontSizes.core.input, darkFontDefaults.core.input],
    button: [darkFontSizes.core.button, darkFontDefaults.core.button],
    "sub-text": [darkFontSizes.core["sub-text"], darkFontDefaults.core["sub-text"]],
    "header-table-row": [
      darkFontSizes.core["header-table-row"],
      darkFontDefaults.core["header-table-row"],
    ],
    "header-top-bar": [
      darkFontSizes.core["header-top-bar"],
      darkFontDefaults.core["header-top-bar"],
    ],
    "header-subsection": [
      darkFontSizes.core["header-subsection"],
      darkFontDefaults.core["header-subsection"],
    ],
  },
};

module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "preference-section":
          "rgba(0, 0, 0, 0.1) 0px 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
        "preferences-first-time": "0px 4px 16px rgba(86, 43, 85, 0.25)",
        "automations-trigger-node": "0px 6px 16px #000000",
        "automations-sidebar": "-6px 0px 16px #000000",
        heron:
          "0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)",
        "heron-xl":
          "0px 120px 120px rgba(22, 34, 51, 0.08), 0px 64px 64px rgba(22, 34, 51, 0.12), 0px 32px 32px rgba(22, 34, 51, 0.04), 0px 24px 24px rgba(22, 34, 51, 0.04), 0px 4px 24px rgba(22, 34, 51, 0.04), 0px 0px 10px rgba(22, 34, 51, 0.04)",
        "calendar-am-pm":
          "0px 4.51852px 4.54px -4.51852px rgba(0, 133, 255, 0.05), 0px 2.53px 5px rgba(0, 133, 255, 0.1)",
        "heron-dropdown": "0px 4px 12px rgba(24, 39, 75, 0.11)",
        "heron-select": "0px 1px 3px rgba(24, 39, 75, 0.11)",
        ...flatten(coreBoxShadow),
        "heron-input":
          "0px 17px 14px -6px rgba(24, 39, 75, 0.05), 0px 13px 32px -4px rgba(24, 39, 75, 0.05)",
        "heron-switch-off":
          "0px 4px 5px -5px rgba(204, 205, 205, 0.1), 0px 2.5px 5px rgba(155, 155, 155, 0.7)",
        "heron-switch-on":
          "0px 4.5px 4px -4px rgba(0, 133, 255, 0.8), 0px 2.5px 5px rgba(0, 116, 223, 0.4)",
      },
      colors: {
        canvas: "#0E1012",
        "changelog-gray": "#73819B",
        "changelog-green": "#009A79",
        "changelog-removal": "#DE5063",
        "changelog-purple": "#9121C2",
        "changelog-offwhite": "#E7E2E9",
        "changelog-heading": "#24324B",
        "changelog-twilight": "#24324B",
        "automations-gray": "#32373F",
        "automations-gray-50%": "rgba(36, 40, 45, 0.5)",
        "automations-trigger-background": "#24282d",
        "automations-black": "#0D1014",
        "automations-input": "#8E9EB4",
        "automations-nav": "#15181B",
        "automations-nav-purple": "#9C63F0",
        "quicksend-blue": "#0085FF",
        "quicksend-gray": "#696F8C",
        "quicksend-light-blue": "#EBF5FF",
        "quicksend-light-gray": "#ECEDF2",
        "quicksend-lighter-gray": "#979BAE",
        "quicksend-dark-gray": "#F8F8F8",
        "quicksend-darker-gray": "#292929",
        "quicksend-border-gray": "#F9FAFB",
        "quicksend-section-header-black": "#141414",
        "quicksend-nav-gray": "#DCDEE4",
        "quicksend-red": "#FF003D",
        "quicksend-green-light": "#61C677",
        "quicksend-green-dark": "#07B249",
        "quicksend-green": "#22c55e",
        ...flatten(coreColors),
        ...flatten(lightColors),
        ...flatten(lightColors.text),
        ...flatten(darkColors),
        ...flatten(darkColors.text),
      },

      fontFamily: {
        poppins: ["Poppins"],
        anonymous: ['"Anonymous Pro"'],
        monospace: ["monospace"],
        inter: ["Inter", "ui-sans-serif"],
        ...flatten(coreFonts),
        ...flatten(coreTextFonts),
        ...flatten(lightFonts),
        ...flatten(darkFonts),
      },

      fontWeight: {
        ...flatten(coreFontWeights),
      },

      lineHeight: {
        ...flatten(coreLineHeights),
      },

      width: {
        "change-log": "15.625rem",
        "automations-segment-node": "576px",
        26: "98px",
      },

      spacing: {
        ...flatten(coreSpacing),
        ...flatten(coreSizing),
      },

      padding: {
        ...flatten(corePadding),
      },

      fontSize: {
        ...flatten(coreFontSizes),
        ...flatten(coreTextFontSizesWithDefaults),
        ...flatten(lightFontSizesWithDefaults),
        ...flatten(darkFontSizesWithDefaults),
      },

      borderRadius: {
        ...flatten(coreBorderRadius),
      },

      borderWidth: {
        ...flatten(coreBorderWidth),
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/forms")({
      strategy: "class", // only applies to the classes I apply this set of base styles to
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
