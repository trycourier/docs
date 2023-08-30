import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileAPN: ApiParam = {
  type: "object",
  displayName: "ProfileAPN",
  fields: [
    {
      type: "string",
      name: "apn",
      description: "[Learn more](/docs/platform/channels/push/apple-push-notification)",
    },
  ],
};

export default ProfileAPN;
