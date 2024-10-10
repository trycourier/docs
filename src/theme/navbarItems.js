const navbarItems = [
  {
    to: "/",
    label: "Home",
    activeBaseRegex: "^((?!reference|rest).)*$",
  },
  {
    to: "/reference/",
    label: "REST API",
    activeBasePath: "reference",
  },
  {
    to: "https://www.courier.com/docs/rest/",
    label: "API Playground",
    activeBasePath: "rest",
  },
  {
    to: "/help/",
    label: "Help",
    activeBasePath: "help",
  }
];

module.exports = navbarItems;