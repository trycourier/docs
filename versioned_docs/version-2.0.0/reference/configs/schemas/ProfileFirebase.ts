import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileFirebase: ApiParam = {
  type: "object",
  displayName: "ProfileFirebase",
  fields: [
    {
      type: "string",
      name: "firebaseToken",
      description: "[Learn more](/docs/platform/channels/push/firebase-fcm)",
    },
  ],
};

export default ProfileFirebase;
