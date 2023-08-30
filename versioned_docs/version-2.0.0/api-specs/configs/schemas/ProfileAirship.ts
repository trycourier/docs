import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileAirship: ApiParam = {
  type: "object",
  displayName: "ProfileAirship",
  fields: [
    {
      type: "object",
      name: "airship",
      description: "[Learn more](/docs/platform/channels/push/airship)",
      fields: [
        {
          type: "object",
          name: "audience",
          fields: [
            {
              type: "string",
              name: "named_user",
            },
          ],
        },
        {
          type: "array",
          name: "device_types",
          field: { type: "string" },
        },
      ],
    },
  ],
};

export default ProfileAirship;
