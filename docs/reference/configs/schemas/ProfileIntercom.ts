import { ApiParam } from "@site/src/components/ApiReference";

const ProfileIntercom: ApiParam = {
  type: "object",
  displayName: "ProfileIntercom",
  fields: [
    {
      type: "object",
      name: "intercom",
      description: "[Learn more](https://docs.courier.com/docs/intercom)",
      fields: [
        {
          type: "string",
          name: "from",
        },
        {
          type: "object",
          name: "to",
          fields: [
            {
              type: "string",
              name: "id",
            },
          ],
        },
      ],
    },
  ],
};

export default ProfileIntercom;
