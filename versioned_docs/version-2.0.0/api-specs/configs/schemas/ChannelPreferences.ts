import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ChannelPreferences: ApiParam = {
  type: "object",
  displayName: "ChannelPreferences",
  description:
    "This property is used to set the preferred channel for a given user. When you send a notification to the user with `channel_preferences`, Courier will use the preferred channel if it is available. If the preferred channel is not available, Courier will use the next available channel. Courier will only send to the first available preferred channel.",
  fields: [
    {
      type: "string",
      name: "channel",
      enum: ["direct_message", "email", "push", "sms"],
      example: "push",
    },
  ],
};

export default ChannelPreferences;
