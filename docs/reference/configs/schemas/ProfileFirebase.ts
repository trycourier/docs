import { ApiParam } from "@site/src/components/ApiReference";

const ProfileFirebase: ApiParam = {
  type: "object",
  displayName: "ProfileFirebase",
  fields: [
    {
      type: "string",
      name: "firebaseToken",
      description: "[Learn more](https://docs.courier.com/docs/firebase-fcm)",
    },
  ],
};

export default ProfileFirebase;
