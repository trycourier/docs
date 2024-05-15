const theme = {
  plain: {
    color: "#97559D",
    backgroundColor: "#2D1339",
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "rgb(162, 191, 252)",
        fontStyle: "italic",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgba(239, 83, 80, 0.56)",
        fontStyle: "italic",
      },
    },
    {
      types: ["inserted", "attr-name"],
      style: {
        color: "#beffad",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgba(255, 255, 255, 0.5)",
      },
    },
    {
      types: ["string", "url"],
      style: {
        color: "#beffad",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)",
      },
    },
    {
      types: ["number"],
      style: {
        color: "rgb(247, 140, 108)",
      },
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#ff5e5e",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#fff",
      },
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "rgb(199, 146, 234)",
        fontStyle: "italic",
      },
    },
    {
      types: ["class-name", "delimiter"],
      style: {
        color: "#ffcb6b",
      },
    },
    {
      types: ["tag", "operator", "keyword"],
      style: {
        color: "#ca79ee",
      },
    },
    {
      types: ["boolean"],
      style: {
        color: "rgb(255, 88, 116)",
      },
    },
    {
      types: ["property"],
      style: {
        color: "rgb(128, 203, 196)",
      },
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)",
      },
    },
  ],
};

module.exports = theme;
