import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileFacebookMessenger: ApiParam = {
  type: "object",
  displayName: "ProfileFacebookMessenger",
  fields: [
    {
      type: "string",
      name: "facebookPSID",
      description: "[Learn more](/docs/platform/channels/other/facebook-messenger)",
    },
  ],
};

export default ProfileFacebookMessenger;
