import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileSlack: ApiParam = {
  type: "object",
  displayName: "ProfileSlack",
  fields: [
    {
      type: "oneOf",
      name: "slack",
      description: "[Learn more](/docs/platform/channels/direct-message/slack)",
      options: [
        {
          type: "object",
          displayName: "Send to Slack Channel",
          fields: [
            {
              type: "string",
              name: "access_token",
            },
            {
              type: "string",
              name: "channel",
            },
          ],
        },
        {
          type: "object",
          displayName: "Send DM (w/ email)",
          fields: [
            {
              type: "string",
              name: "access_token",
            },
            {
              type: "string",
              name: "email",
            },
          ],
        },
        {
          type: "object",
          displayName: "Send DM (w/ user_id)",
          fields: [
            {
              type: "string",
              name: "access_token",
            },
            {
              type: "string",
              name: "user_id",
            },
          ],
        },
        {
          type: "object",
          displayName: "Incoming Webhooks",
          fields: [
            {
              type: "object",
              name: "incoming_webhook",
              fields: [
                {
                  type: "string",
                  name: "url",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default ProfileSlack;
