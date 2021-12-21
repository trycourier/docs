const navbarItems = [
  {
    type: "doc",
    docId: "intro",
    label: "Home",
    activeBaseRegex: "^((?!reference).)*$",
  },
  {
    type: "doc",
    docId: "reference/intro",
    label: "API Reference",
    activeBasePath: "reference",
  },
  {
    href: "https://updates.courier.com",
    label: "Product Updates",
  },
  {
    href: "https://status.courier.com",
    label: "Service Status",
  },
];

module.exports = navbarItems;
