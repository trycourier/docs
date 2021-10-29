import { ApiReferenceProps } from "@site/src/components/ApiReference";

const invoke: ApiReferenceProps = {
  method: "POST",
  path: "/send/:param",
  pathParams: [
    {
      type: "string",
      name: "param",
      example: "param",
    },
  ],
  queryParams: [
    {
      type: "string",
      name: "query",
    },
  ],
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "object",
        name: "automation",
        required: true,
        fields: [
          {
            type: "array",
            name: "steps",
            required: true,
            field: {
              type: "oneOf",
              options: [
                {
                  type: "object",
                  displayName: "CANCELSTEP",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      description: "cancel",
                      example: "test",
                    },
                    {
                      type: "string",
                      name: "cancelation_token",
                      required: true,
                      description:
                        "The string that is associated with the cancelable automation run.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "DELAYSTEP",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      description: "delay",
                    },
                    {
                      type: "string",
                      name: "duration",
                      description: "The human readable time duration.",
                    },
                    {
                      type: "string",
                      name: "until",
                      description: "The ISO 8601 timestamp that describes the length of the delay.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "SENDSTEP",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      description: "send",
                    },
                    {
                      type: "string",
                      name: "recipient",
                      description: "The human readable time duration.",
                    },
                    {
                      type: "string",
                      name: "template",
                      description: "The ISO 8601 timestamp that describes the length of the delay.",
                    },
                  ],
                },
              ],
            },
          },
          {
            type: "string",
            name: "cancelation_token",
            example: "<CANCELATION_TOKEN>",
            description: "The string that is associated with the cancelable automation run.",
          },
        ],
      },
      {
        type: "string",
        name: "brand",
        example: "W50NC77P524K14M5300PGPEK4JMJ",
        description:
          "A unique identifier that represents the brand that should be used for rendering the notification.",
      },
      {
        type: "string",
        name: "template",
        example: "<TEMPLATE_NAME_OR_ID>",
        description:
          'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the Notifications page in the Courier app) or a custom string mapped to the event in settings.',
      },
      {
        type: "boolean",
        name: "bool",
      },
      {
        type: "string",
        name: "enum",
        enum: ["one", "two", "three"],
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
            description: "A unique identifier associated with the message sent.",
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

export default invoke;
