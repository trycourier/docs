import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Send: ApiParam = {
  type: "object",
  displayName: "Send",
  fields: [
    {
      type: "string",
      name: "event",
      required: true,
      example: "EXAMPLE_NOTIFICATION",
      description:
        'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
    },
    {
      type: "string",
      name: "recipient",
      required: true,
      example: "8ec8c99a-c5f7-455b-9f60-8222b8a27056",
      description: "A unique identifier associated with the recipient of the delivered message.",
    },
    {
      type: "string",
      name: "brand",
      example: "W50NC77P524K14M5300PGPEK4JMJ",
      description:
        "A unique identifier that represents the brand that should be used for rendering the notification.",
    },
    {
      type: "json",
      name: "data",
      example: { name: "Jane Doe", age: 27 },
      description:
        "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
    },
    {
      type: "json",
      name: "override",
      description:
        "An object that is merged into the request sent by Courier to the provider to override properties or to gain access to features in the provider API that are not natively supported by Courier.",
    },
    {
      type: "json",
      name: "preferences",
      description: "An object that includes any preferences for the recipient.",
    },
    {
      type: "json",
      name: "profile",
      example: { phone_number: "2025550125", email: "hello@example.com" },
      description:
        "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](https://docs.courier.com/docs) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
    },
  ],
};

export default Send;
