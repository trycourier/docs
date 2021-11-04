import { ApiParam } from "@site/src/components/ApiReference";

const ProfileDiscord: ApiParam = {
  type: "object",
  displayName: "ProfileDiscord",
  fields: [
    {
      type: "oneOf",
      name: "discord",
      description: "[Learn more](https://docs.courier.com/docs/discord)",
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
