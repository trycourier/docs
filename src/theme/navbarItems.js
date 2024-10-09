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
    to: "/sdk-libraries/",
    label: "SDK Libraries",
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
    type: 'search',
    position: 'right',

  },
  {
    position: 'right',
    type: 'custom-intercom-link',
  },
];

module.exports = navbarItems;
