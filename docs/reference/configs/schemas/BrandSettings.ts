import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BrandSettings: ApiParam = {
  type: "object",
  displayName: "BrandSettings",
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
              description: "Markdown formatted content that will be rendered in the email footer",
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
};

export default BrandSettings;
