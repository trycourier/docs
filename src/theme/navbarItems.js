const navbarItems = [
  {
    // to: "guides",
    to: "/",
    label: "Integration Guides",
    activeBaseRegex: "^((?!reference).)*$",
  },
  {
    to: "reference/introduction",
    label: "API Reference",
    activeBaseRegex: "^reference$",
  },
  {
    href: "https://help.courier.com",
    label: "Help Center",
  },
  {
    href: "https://updates.courier.com",
    label: "Product Updates",
  },
  {
    href: "https://status.courier.com",
    label: "Service Status",
  },
  // {
  //   type: "search",
  //   position: "right",
  // },
  {
    href: "https://app.courier.com/",
    label: "Log In",
    position: "right",
  },
];

module.exports = navbarItems;
