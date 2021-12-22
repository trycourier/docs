import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileFirebase: ApiParam = {
  type: "object",
  displayName: "ProfileFirebase",
  fields: [
    {
      type: "string",
      name: "firebaseToken",
      description: "[Learn more](/docs/guides/providers/push/firebase-fcm)",
    },
  ],
};

export default ProfileFirebase;
