import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileWebhook: ApiParam = {
  type: "object",
  displayName: "ProfileWebhook",
  fields: [
    {
      type: "object",
      name: "webhook",
      description: "[Learn more](/docs/platform/channels/webhook-integration)",
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
