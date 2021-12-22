import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileExpo: ApiParam = {
  type: "object",
  displayName: "ProfileExpo",
  fields: [
    {
      type: "oneOf",
      name: "expo",
      description: "[Learn more](/docs/guides/providers/push/expo)",
      options: [
        {
          type: "object",
          displayName: "Single Token",
          fields: [
            {
              type: "string",
              name: "token",
            },
          ],
        },
        {
          type: "object",
          displayName: "Multiple Tokens",
          fields: [
            {
              type: "array",
              name: "tokens",
              field: { type: "string" },
            },
          ],
        },
      ],
    },
  ],
};

export default ProfileExpo;
