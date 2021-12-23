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
    href: "https://updates.courier.com",
    label: "Product Updates",
  },
  {
    href: "https://status.courier.com",
    label: "Service Status",
  },
];

module.exports = navbarItems;
