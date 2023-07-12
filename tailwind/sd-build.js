/* eslint-disable @typescript-eslint/no-var-requires */
const StyleDictionaryPackage = require("style-dictionary");
const { createArray } = require("./fns");

// HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

StyleDictionaryPackage.registerFormat({
  name: "css/variables",
  formatter: function (dictionary) {
    return `${this.selector} {\n${dictionary.allProperties
      .map((prop) => `  --${prop.name}: ${prop.value};`)
      .join("\n")}\n}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: "sizes/px",
  type: "value",
  matcher: function (prop) {
    // You can be more specific here if you only want 'em' units for font sizes
    return ["fontSizes", "spacing", "borderRadius", "borderWidth", "sizing", "lineHeight"].includes(
      prop.attributes.category
    );
  },
  transformer: function (prop) {
    // You can also modify the value here if you want to convert pixels to ems
    return parseFloat(prop.original.value) + "px";
  },
});

StyleDictionaryPackage.registerTransform({
  name: "shadow/spreadShadow",
  type: "value",
  matcher: function (token) {
    return token.type === "boxShadow";
  },
  transformer: (token) => {
    const shadow = Object.values(token.value);
    const [x, y, blur, spread, color] = shadow.map((s) => s.toString());
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: "border/spreadBorder",
  type: "value",
  matcher: function (token) {
    return token.type === "border";
  },
  transformer: (token) => {
    const border = Object.values(token.value);
    const [color] = border.map((s) => s.toString());
    return `${color}`;
  },
});

function getStyleDictionaryConfig(theme) {
  return {
    source: [`tailwind/build/figma-tokens/${theme}.json`],
    format: {
      createArray,
    },
    platforms: {
      web: {
        transforms: [
          "attribute/cti",
          "name/cti/kebab",
          "sizes/px",
          "shadow/spreadShadow",
          "border/spreadBorder",
        ],
        buildPath: `tailwind/build/figma-tokens/sd-output/`,
        files: [
          {
            destination: `${theme}.json`,
            format: "createArray",
          },
          {
            destination: `${theme}.css`,
            format: "css/variables",
            selector: theme !== "core" ? `.${theme}` : ":root",
          },
        ],
      },
    },
  };
}

console.log("Build started...");

// PROCESS THE DESIGN TOKENS FOR THE DIFFERENT BRANDS AND PLATFORMS

["core", "dark", "light"].map(function (theme) {
  console.log("\n==============================================");
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(getStyleDictionaryConfig(theme));

  StyleDictionary.buildPlatform("web");

  console.log("\nEnd processing");
});

console.log("\n==============================================");
console.log("\nBuild completed!");
