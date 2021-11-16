import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileAPN: ApiParam = {
  type: "object",
  displayName: "ProfileAPN",
  fields: [
    {
      type: "string",
      name: "apn",
      description: "[Learn more](/docs/guides/providers/push/apple-push-notification)",
    },
  ],
};

export default ProfileAPN;
