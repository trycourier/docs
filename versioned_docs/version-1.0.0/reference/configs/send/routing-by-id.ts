import { ApiReferenceProps } from "@site/src/components/ApiReference";

import SendRouteRecipient from "../schemas/SendRouteRecipient";

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
        field: SendRouteRecipient,
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
