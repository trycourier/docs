import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileDiscord: ApiParam = {
  type: "object",
  displayName: "ProfileDiscord",
  fields: [
    {
      type: "oneOf",
      name: "discord",
      description: "[Learn more](/docs/guides/providers/direct-message/discord)",
      options: [
        {
          type: "object",
          displayName: "Send to Discord Channel",
          fields: [
            {
              type: "string",
              name: "channel_id",
            },
          ],
        },
        {
          type: "object",
          displayName: "Send DM",
          fields: [
            {
              type: "string",
              name: "user_id",
            },
          ],
        },
      ],
    },
  ],
};

export default ProfileDiscord;
