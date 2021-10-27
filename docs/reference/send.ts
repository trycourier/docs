import { ApiReferenceProps } from "@site/src/components/ApiReference";

const api: ApiReferenceProps = {
  method: "POST",
  path: "/send",
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "string",
        name: "event",
        required: true,
        description:
          'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
        example: "04de5ab9-8314-2e39d6b",
      },
      {
        type: "string",
        name: "recipient",
        required: true,
        description:
          "A unique identifier associated with the recipient of the delivered message.",
        example: "0460766e-8463-4905-ae98-b72c7aef41d6",
      },
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
          "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
        example: JSON.stringify({}),
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
        description:
          "An object that includes any preferences for the recipient.",
        example: JSON.stringify({
          notifications: {
            H4CHKV5GCYMYHNHM3VJF9BX1M5HR: {
              status: "OPTED_IN",
              channel_preferences: [{ channel: "direct_message" }],
              rule: [{ type: "snooze", until: "2021-12-31T00:00:00.000Z" }],
            },
          },
        }),
      },
      {
        type: "json",
        name: "profile",
        description:
          "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](https://docs.courier.com/docs) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
        example: JSON.stringify({
          phone_number: "2025550125",
          email: "hello@example.com",
        }),
      },
    ],
  },
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "messageId",
            description:
              "A unique identifier associated with the message sent.",
            example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
          },
        ],
      },
    },
    {
      status: 400,
      description: "Bad Request",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Error Message",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            example: "invalid_request_error",
          },
        ],
      },
    },
  ],
};

export default api;
