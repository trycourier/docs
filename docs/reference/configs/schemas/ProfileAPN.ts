import { ApiParam } from "@site/src/components/ApiReference";

const ProfileAPN: ApiParam = {
  type: "object",
  displayName: "ProfileAPN",
  fields: [
    {
      type: "string",
      name: "apn",
      description: "[Learn more](https://docs.courier.com/docs/apple-push-notification)",
    },
  ],
};

export default ProfileAPN;
