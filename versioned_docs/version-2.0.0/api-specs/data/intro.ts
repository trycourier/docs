import { CardType } from "@site/src/components/Card/Card";

export const welcomeCardData: CardType[] = [
  {
    title: "Getting Started",
    href: "/getting-started/what-is-courier/",
    description:
      "Learn what Courier is, what the key concepts are how to send your first notification using your programming language of choice.",
    linkText: "Learn More",
  },
  {
    title: "Tutorials",
    href: "/tutorials",
    description:
      "Learn basic Courier platform concepts that cover everything from adding providers to sending notifications to a list.",
    linkText: "Learn More",
  },
  {
    title: "UI Components",
    href: "/sdk-libraries/client-sdks/",
    description:
      "Courier provides embeddable UI components and client SDKs for web, iOS, and Android.",
    linkText: "Learn More",
  },
  {
    title: "API Reference",
    href: "/reference",
    description:
      "The Courier REST API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.",
    linkText: "Learn More",
  },
];

export const platformCardData: CardType[] = [
  {
    title: "Users",
    href: "/platform/users",
    description: "Specifying the recipient or recipients of the notification.",
    linkText: "Learn More",
  },
  {
    title: "Content",
    href: "/platform/content",
    description:
      "Constructing the content of the notification, including the use of templates, dynamic variables and channel agnostic markup.",
    linkText: "Learn More",
  },
  {
    title: "Channels",
    href: "/platform/channels",
    description: "The channels and providers being used to deliver the notification.",
    linkText: "Learn More",
  },
  {
    title: "Sending",
    href: "/platform/sending",
    description: "Sending notifications, including setting limits and handling retries.",
    linkText: "Learn More",
  },
  {
    title: "Preferences",
    href: "/platform/preferences",
    description: "Respecting user delivery preferences and drop-in user preference components.",
    linkText: "Learn More",
  },
  {
    title: "Automations",
    href: "/platform/automations",
    description:
      "Create fully managed notification workflows and implements scheduling, batching and throttling with zero lines of code.",
    linkText: "Learn More",
  },
  {
    title: "Inbox",
    href: "/platform/inbox",
    description:
      "Embed a modern notification inbox to your app with our web, iOS and Android SDKs.",
    linkText: "Learn More",
  },
  {
    title: "Workspaces",
    href: "/platform/workspaces",
    description:
      "Setup test and production environments, manage access control and configure the behavior of your apps.",
    linkText: "Learn More",
  },
  {
    title: "Logging",
    href: "/platform/logging",
    description: "Logging, analytics and observability.",
    linkText: "Learn More",
  },
];
