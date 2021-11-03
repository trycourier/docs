import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  description: "Send a notification to list(s) subscribers",
  method: "POST",
  path: "/send/list",
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "oneOf",
        options: [
          {
            type: "string",
            name: "list",
            displayName: "by list",
            required: true,
            description: "The list id intended to send (optional: list or pattern required)",
            example: "ExampleListId",
          },
          {
            type: "string",
            name: "pattern",
            displayName: "by list pattern",
            required: true,
            description:
              "The pattern used to identify list(s) intended to send (optional: list or pattern required)",
            example: "example.list.*",
          },
        ],
      },
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
              "A unique identifier associated with the messages sent to a list's subscribers.",
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
            enum: ["invalid_request_error"],
            example: "invalid_request_error",
          },
        ],
      },
    },
  ],
};

export default config;
