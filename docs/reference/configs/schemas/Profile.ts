import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import ProfileOIDC from "./ProfileOIDC";
import ProfileAirship from "./ProfileAirship";
import ProfileAPN from "./ProfileAPN";
import ProfileAWSSNSPush from "./ProfileAWSSNSPush";
import ProfileDiscord from "./ProfileDiscord";
import ProfileExpo from "./ProfileExpo";
import ProfileFacebookMessenger from "./ProfileFacebookMessenger";
import ProfileFirebase from "./ProfileFirebase";
import ProfileIntercom from "./ProfileIntercom";
import ProfileMSTeams from "./ProfileMSTeams";
import ProfileOneSignalPush from "./ProfileOneSignalPush";
import ProfileSlack from "./ProfileSlack";
import ProfileWebhook from "./ProfileWebhook";

const Profile: ApiParam = {
  type: "object",
  displayName: "Profile",
  fields: [
    {
      type: "object",
      name: "profile",
      description:
        "An object that includes any key-value pairs required by your chosen Integrations.",
      fields: [
        ...(ProfileOIDC.type === "object" ? ProfileOIDC.fields : []),
        ...(ProfileAirship.type === "object" ? ProfileAirship.fields : []),
        ...(ProfileAPN.type === "object" ? ProfileAPN.fields : []),
        ...(ProfileAWSSNSPush.type === "object" ? ProfileAWSSNSPush.fields : []),
        ...(ProfileDiscord.type === "object" ? ProfileDiscord.fields : []),
        ...(ProfileExpo.type === "object" ? ProfileExpo.fields : []),
        ...(ProfileFacebookMessenger.type === "object" ? ProfileFacebookMessenger.fields : []),
        ...(ProfileFirebase.type === "object" ? ProfileFirebase.fields : []),
        ...(ProfileIntercom.type === "object" ? ProfileIntercom.fields : []),
        ...(ProfileMSTeams.type === "object" ? ProfileMSTeams.fields : []),
        ...(ProfileOneSignalPush.type === "object" ? ProfileOneSignalPush.fields : []),
        ...(ProfileSlack.type === "object" ? ProfileSlack.fields : []),
        ...(ProfileWebhook.type === "object" ? ProfileWebhook.fields : []),
      ],
    },
  ],
};

export default Profile;
