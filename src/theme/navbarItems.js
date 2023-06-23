const navbarItems = [
  {
    to: "/",
    label: "Home",
    activeBaseRegex: "^((?!reference).)*$",
  },
  {
    to: "/reference/",
    label: "API Reference",
    activeBasePath: "reference",
  },
  {
    to: "/sdk-libraries/",
    label: "SDK Reference",
    activeBasePath: "sdk-reference",
  },
  {
    href: "https://courier.com/changelog",
    label: "Changelog",
  },
  {
    href: "https://status.courier.com",
    label: "Service Status",
  },
  {
    type: "docsVersionDropdown",
    position: "right",
  },
];

module.exports = navbarItems;
