import { ApiParam } from "@site/src/components/ApiReference";

const RunContext: ApiParam = {
  type: "object",
  displayName: "RunContext",
  description:
    "An object that includes any data you want to make available to a subsequent step via an accessor type.",
  fields: [
    {
      type: "string",
      name: "brand",
      description:
        "A unique identifier that represents the brand that should be used for rendering the notification.",
    },
    {
      type: "json",
      name: "data",
      description:
        "An object that includes any data you want to pass to a message template or accessor type. The data will populate the corresponding template variables.",
    },
    {
      type: "json",
      name: "profile",
      description:
        "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](https://docs.courier.com/docs) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
    },
    {
      type: "string",
      name: "template",
      description:
        'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
    },
    {
      type: "string",
      name: "recipient",
      description: "A unique identifier associated with the recipient of the delivered message.",
    },
  ],
};

export default RunContext;
