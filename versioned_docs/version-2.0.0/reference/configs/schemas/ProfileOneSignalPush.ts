import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileOneSignalPush: ApiParam = {
  type: "object",
  displayName: "ProfileOneSignalPush",
  fields: [
    {
      type: "string",
      name: "oneSignalPlayerID",
      description: "[Learn more](/docs/guides/providers/push/onesignal-push)",
    },
  ],
};

export default ProfileOneSignalPush;
