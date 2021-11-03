import { ApiReferenceProps } from "@site/src/components/ApiReference";

const brand: ApiReferenceProps["bodyParam"] = {
  type: "object",
  fields: [
    {
      type: "string",
      name: "id",
      example: "C8CPX6HQZ5M7Q5KAMW5CXC4N98DH",
      description: "Brand Identifier",
    },
    {
      type: "string",
      name: "name",
      required: true,
      example: "Example Brand Name",
      description: "Brand name",
    },
    {
      type: "object",
      name: "settings",
      required: true,
      fields: [
        {
          type: "object",
          name: "colors",
          description: "Brand colors",
          fields: [
            {
              type: "string",
              name: "primary",
              example: "#9D3789",
              description: "Primary brand color",
            },
            {
              type: "string",
              name: "secondary",
              example: "#9D3789",
              description: "Secondary brand color",
            },
            {
              type: "string",
              name: "tertiary",
              example: "#9D3789",
              description: "Tertiary brand color",
            },
          ],
        },
        {
          type: "object",
          name: "email",
          description: "Contains brand settings for emails",
          fields: [
            {
              type: "object",
              name: "footer",
              description: "Contains brand settings for the email footer",
              fields: [
                {
                  type: "string",
                  name: "markdown",
                  example: "**Bold** and _italic_ with a [link](https://www.courier.com)",
                  description:
                    "Markdown formatted content that will be rendered in the email footer",
                },
                {
                  type: "object",
                  name: "social",
                  fields: [
                    {
                      type: "object",
                      name: "facebook",
                      fields: [
                        {
                          type: "string",
                          name: "url",
                          example: "https://www.facebook.com/example",
                          description: "URL of Facebook Presence",
                        },
                      ],
                    },
                    {
                      type: "object",
                      name: "instagram",
                      fields: [
                        {
                          type: "string",
                          name: "url",
                          example: "https://www.instagram.com/example",
                          description: "URL of Instagram Presence",
                        },
                      ],
                    },
                    {
                      type: "object",
                      name: "linkedin",
                      fields: [
                        {
                          type: "string",
                          name: "url",
                          example: "https://www.linkedin.com/example",
                          description: "URL of LinkedIn Presence",
                        },
                      ],
                    },
                    {
                      type: "object",
                      name: "medium",
                      fields: [
                        {
                          type: "string",
                          name: "url",
                          example: "https://www.medium.com/example",
                          description: "URL of Medium Presence",
                        },
                      ],
                    },
                    {
                      type: "object",
                      name: "twitter",
                      fields: [
                        {
                          type: "string",
                          name: "url",
                          example: "https://www.twitter.com/example",
                          description: "URL of Twitter Presence",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "object",
              name: "header",
              description: "Contains brand settings for the email header",
              fields: [
                {
                  type: "string",
                  name: "barColor",
                  example: "#9D3789",
                  description: "The color email header bar",
                },
                {
                  type: "object",
                  name: "logo",
                  fields: [
                    {
                      type: "string",
                      name: "href",
                      example: "https://www.courier.com",
                      description: "A URL that the logo, when clicked on, will link to.",
                    },
                    {
                      type: "string",
                      name: "image",
                      example: "https://www.courier.com/logo.png",
                      description: "A URL pointing to the logo image",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "snippets",
      fields: [
        {
          type: "array",
          name: "items",
          field: {
            type: "object",
            description: "Individual snippet information",
            fields: [
              {
                type: "string",
                name: "format",
                required: true,
                enum: ["handlebars"],
              },
              {
                type: "string",
                name: "name",
                required: true,
              },
              {
                type: "string",
                name: "value",
                required: true,
              },
            ],
          },
        },
      ],
    },
  ],
};

const config: ApiReferenceProps = {
  description: "Create a new brand",
  method: "POST",
  path: "/brands",
  bodyParam: brand,
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        ...brand,
        fields: [
          {
            type: "number",
            name: "created",
            example: 1591753605265,
            description:
              "The date/time of when the brand was created. Represented in milliseconds since Unix epoch.",
          },
          {
            type: "number",
            name: "published",
            example: 1591753605265,
            description:
              "The date/time of when the brand was published. Represented in milliseconds since Unix epoch.",
          },
          {
            type: "number",
            name: "updated",
            example: 1591753605265,
            description:
              "The date/time of when the brand was updated. Represented in milliseconds since Unix epoch.",
          },
          {
            type: "string",
            name: "version",
            example: "2020-06-19T18:51:36.083Z",
            description: "The version identifier for the brand",
          },
          ...brand.fields,
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
    {
      status: 402,
      description: "Payment Required",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Limit Exceeded",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["authorization_error"],
            example: "authorization_error",
          },
        ],
      },
    },
    {
      status: 409,
      description: "Already Exists",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Already Exists",
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
