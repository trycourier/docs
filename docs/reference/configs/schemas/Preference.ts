import { ApiParam } from "@site/src/components/ApiReference";

import ChannelPreferences from "./ChannelPreferences";
import PreferenceRules from "./PreferenceRules";
import PreferenceStatus from "./PreferenceStatus";

const Preference: ApiParam = {
  type: "object",
  displayName: "Preference",
  fields: [
    {
      type: "array",
      name: "channel_preferences",
      field: ChannelPreferences,
    },
    {
      type: "array",
      name: "rules",
      field: PreferenceRules,
    },
    {
      ...PreferenceStatus,
      name: "status",
    },
  ],
};

export default Preference;
