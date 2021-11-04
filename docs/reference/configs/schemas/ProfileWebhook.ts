import { ApiParam } from "@site/src/components/ApiReference";

const ProfileWebhook: ApiParam = {
  type: "object",
  displayName: "ProfileWebhook",
  fields: [
    {
      type: "object",
      name: "webhook",
      description: "[Learn more](https://docs.courier.com/docs/webhook-integration)",
      fields: [
        {
          type: "string",
          name: "url",
        },
        {
          type: "string",
          name: "method",
          enum: ["POST", "GET"],
        },
        {
          type: "json",
          name: "headers",
        },
        {
          type: "object",
          name: "authentication",
          fields: [
            {
              type: "string",
              name: "mode",
              enum: ["none", "basic", "bearer"],
            },
            {
              type: "string",
              name: "username",
            },
            {
              type: "string",
              name: "password",
            },
            {
              type: "string",
              name: "token",
            },
          ],
        },
        {
          type: "string",
          name: "profile",
          enum: ["limited", "expanded"],
        },
      ],
    },
  ],
};

export default ProfileWebhook;
