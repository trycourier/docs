import { ApiReferenceProps } from "@site/src/components/ApiReference";

const accessorType: ApiReferenceProps["bodyParam"] = {
  type: "object",
  displayName: "AccessorType",
  fields: [
    {
      type: "string",
      name: "$ref",
      required: true,
      example: "data.foo.bar",
      description:
        "The path to the value to be accessed. The root of the path must be either a property in run context or a step reference.",
    },
  ],
};

const config: ApiReferenceProps = {
  description: "Invoke an ad hoc automation run.",
  method: "POST",
  path: "/automations/invoke",
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
                  displayName: "CancelStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "cancel",
                      enum: ["cancel"],
                    },
                    {
                      type: "oneOf",
                      name: "cancelation_token",
                      required: true,
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "The string that is associated with the cancelable automation run.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A read only pointer to a step and its data.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "DelayStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "delay",
                      enum: ["delay"],
                    },
                    {
                      type: "oneOf",
                      name: "duration",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "The human readable time duration. A duration value and unit is required, e.g. 5 minutes",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "until",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "The ISO 8601 timestamp that describes the length of the delay.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A read only pointer to a step and its data.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "SendStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "send",
                      enum: ["send"],
                    },
                    {
                      type: "oneOf",
                      name: "recipient",
                      options: [
                        {
                          type: "string",
                          required: true,
                          displayName: "string",
                          description:
                            "A unique identifier associated with the recipient of the delivered message.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "template",
                      options: [
                        {
                          type: "string",
                          required: true,
                          displayName: "string",
                          description:
                            'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "brand",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unique identifier that represents the brand that should be used for rendering the notification.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "data",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "override",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "An object that is merged into the request sent by Courier to the provider to override properties or to gain access to features in the provider API that are not natively supported by Courier.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "profile",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](https://docs.courier.com/docs) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "idempotency_expiry",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unix epoch timestamp (seconds) or an ISO_8601 date string that describes how long the idempotency_key is valid.",
                        },
                        {
                          type: "number",
                          displayName: "number",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "idempotency_key",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unique value generated by the client which the server uses to recognize subsequent retries of the same request.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A pointer to step and its data.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "SendListStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "send-list",
                      enum: ["send-list"],
                    },
                    {
                      type: "oneOf",
                      name: "list",
                      options: [
                        {
                          type: "string",
                          required: true,
                          displayName: "string",
                          description: "The list name.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "brand",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unique identifier that represents the brand that should be used for rendering the notification.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "data",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "override",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "An object that is merged into the request sent by Courier to the provider to override properties or to gain access to features in the provider API that are not natively supported by Courier.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "template",
                      options: [
                        {
                          type: "string",
                          required: true,
                          description:
                            'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "idempotency_expiry",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unix epoch timestamp (seconds) or an ISO_8601 date string that describes how long the idempotency_key is valid.",
                        },
                        {
                          type: "number",
                          displayName: "number",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "idempotency_key",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unique value generated by the client which the server uses to recognize subsequent retries of the same request.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A pointer to step and its data.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "UpdateProfileStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "update-profile",
                      enum: ["update-profile"],
                    },
                    {
                      type: "oneOf",
                      name: "recipient_id",
                      options: [
                        {
                          type: "string",
                          required: true,
                          displayName: "string",
                          description:
                            "A unique identifier associated with the recipient you want to update profile of",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "merge",
                      options: [
                        {
                          type: "string",
                          required: true,
                          displayName: "string",
                          description: "Merge algorithm (none, overwrite, replace or soft-merge)",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "profile",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "An object that includes any key-value pairs associated with the recipient profile",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A pointer to step and its data.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "InvokeStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "invoke",
                      enum: ["invoke"],
                    },
                    {
                      type: "oneOf",
                      name: "template",
                      options: [
                        {
                          type: "string",
                          required: true,
                          displayName: "string",
                          description: "The templateId of the automation template to invoke.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "context",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A run context definition, available to every step at execution.",
                        },
                        {
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
                              description:
                                "A unique identifier associated with the recipient of the delivered message.",
                            },
                          ],
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A pointer to step and its data.",
                    },
                  ],
                },
                {
                  type: "object",
                  displayName: "FetchDataStep",
                  fields: [
                    {
                      type: "string",
                      name: "action",
                      required: true,
                      example: "fetch-data",
                      enum: ["fetch-data"],
                    },
                    {
                      type: "string",
                      name: "merge_strategy",
                      required: true,
                      enum: ["replace", "none", "overwrite", "soft-merge"],
                    },
                    {
                      type: "object",
                      name: "webhook",
                      fields: [
                        {
                          type: "string",
                          name: "url",
                          description: "The url resource, whose response will mutate run context.",
                        },
                        {
                          type: "json",
                          name: "body",
                          description: "The request payload.",
                        },
                        {
                          type: "json",
                          name: "headers",
                          description: "The request headers.",
                        },
                        {
                          type: "json",
                          name: "params",
                          description: "The request parameters.",
                        },
                        {
                          type: "string",
                          name: "method",
                          description: "The http verb of the request.",
                          enum: ["GET", "POST"],
                        },
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "idempotency_expiry",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unix epoch timestamp (seconds) or an ISO_8601 date string that describes how long the idempotency_key is valid.",
                        },
                        {
                          type: "number",
                          displayName: "number",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "oneOf",
                      name: "idempotency_key",
                      options: [
                        {
                          type: "string",
                          displayName: "string",
                          description:
                            "A unique value generated by the client which the server uses to recognize subsequent retries of the same request.",
                        },
                        accessorType,
                      ],
                    },
                    {
                      type: "string",
                      name: "if",
                      description:
                        "A boolean expression whose value is used to determine the execution of the step. Can optionally consume step reference data.",
                    },
                    {
                      type: "string",
                      name: "ref",
                      description: "A pointer to step and its data.",
                    },
                  ],
                },
              ],
            },
          },
          {
            type: "oneOf",
            name: "cancelation_token",
            options: [
              {
                type: "string",
                displayName: "string",
                example: "<CANCELATION_TOKEN>",
                description: "The string that is associated with the cancelable automation run.",
              },
              accessorType,
            ],
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
        example: "EXAMPLE_NOTIFICATION",
        description:
          'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
      },
      {
        type: "string",
        name: "recipient",
        example: "8ec8c99a-c5f7-455b-9f60-8222b8a27056",
        description: "A unique identifier associated with the recipient of the delivered message.",
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
        name: "profile",
        example: { phone_number: "2025550125", email: "hello@example.com" },
        description:
          "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](https://docs.courier.com/docs) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
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
            name: "runId",
            description: "A unique identifier associated with the automation run.",
            example: "1-5e2b2615-05efbb3acab9172f88dd3f6f",
          },
        ],
      },
    },
  ],
};

export default config;
