import { ApiReferenceProps } from "@site/src/components/ApiReference";

const config: ApiReferenceProps = {
  method: "POST",
  path: "/send/:event/routing",
  pathParams: [
    {
      type: "string",
      name: "event",
      required: true,
      description: "A unique identifier representing the event that was used to send the event.",
    },
  ],
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "array",
        name: "recipients",
        field: {
          type: "object",
          fields: [
            {
              type: "string",
              name: "recipient",
              example: "8ec8c99a-c5f7-455b-9f60-8222b8a27056",
              description:
                "A unique identifier associated with the recipient of the delivered message.",
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
        },
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
            type: "array",
            name: "results",
            field: {
              type: "array",
              field: {
                type: "object",
                fields: [
                  {
                    type: "string",
                    name: "recipient",
                    example: "0460766e-8463-4905-ae98-b72c7aef41d6",
                  },
                  {
                    type: "oneOf",
                    name: "routing",
                    options: [
                      {
                        type: "object",
                        fields: [
                          {
                            type: "string",
                            name: "reason",
                            example: "UNMAPPED",
                          },
                          {
                            type: "boolean",
                            name: "selected",
                            example: false,
                          },
                        ],
                      },
                      {
                        type: "object",
                        fields: [
                          {
                            type: "array",
                            name: "channelsSummary",
                            field: {
                              type: "object",
                              fields: [
                                {
                                  type: "string",
                                  name: "channel",
                                  example: "sendgrid",
                                },
                                {
                                  type: "string",
                                  name: "reason",
                                  enum: [
                                    "CHANNEL_DISABLED",
                                    "FILTERED",
                                    "FILTERED_AT_PROVIDER",
                                    "FILTERED_OUT_AT_CHANNEL",
                                    "INCOMPLETE_PROFILE_DATA",
                                    "MISSING_CONFIGURATION",
                                    "MISSING_CONFIGURATION_ID",
                                    "NO_PROVIDERS",
                                    "UNMAPPED",
                                    "UNPUBLISHED",
                                  ],
                                  example: "INCOMPLETE_PROFILE_DATA",
                                },
                                {
                                  type: "boolean",
                                  name: "selected",
                                  example: false,
                                },
                                {
                                  type: "string",
                                  name: "type",
                                  enum: ["always", "bestOf"],
                                },
                              ],
                            },
                          },
                          {
                            type: "json",
                            name: "preferences",
                            example: {
                              categories: {},
                              notifications: {},
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
      },
    },
  ],
};

export default config;
