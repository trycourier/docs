const theme = {
  plain: {
    color: "#cad3f5",
    backgroundColor: "#1e2030",
  },
  styles: [
    {
      types: ["keyword", "important", "atrule", "prolog", "doctype"],
      style: {
        color: "#c6a0f6",
      },
    },
    {
      types: ["builtin", "entity"],
      style: {
        color: "#ed8796",
      },
    },
    {
      types: ["class-name", "symbol", "attr-name", "namespace"],
      style: {
        color: "#eed49f",
      },
    },
    {
      types: ["function", "tag", "selector", "property"],
      style: {
        color: "#8aadf4",
      },
    },
    {
      types: ["boolean", "number", "constant"],
      style: {
        color: "#f5a97f",
      },
    },
    {
      types: ["string", "char", "url", "attr-value", "inserted"],
      style: {
        color: "#a6da95",
      },
    },
    {
      types: ["regex"],
      style: {
        color: "#f5bde6",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "#91d7e3",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#cad3f5",
      },
    },
    {
      types: ["punctuation", "comment"],
      style: {
        color: "#939ab7",
      },
    },
    {
      types: ["cdata"],
      style: {
        color: "#8bd5ca",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#ed8796",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
  ],
};

module.exports = theme;