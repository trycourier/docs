import { ApiParam } from "@site/src/components/ApiReference";

const ChannelPreferences: ApiParam = {
  type: "object",
  displayName: "ChannelPreferences",
  description:
    "This preference allows you to specify channel preferences, custom to your recipient. E.g. If recipient A, only wants to be notified using SMS, you can set the channel_preferences for the recipient to `direct_message` and Courier will use `direct_message` as first mode to send notification",
  fields: [
    {
      type: "string",
      name: "channel",
      enum: ["direct_message", "email", "push"],
      example: "direct_message",
    },
  ],
};

export default ChannelPreferences;
