import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ChannelPreferences: ApiParam = {
  type: "object",
  displayName: "ChannelPreferences",
  description:
    "`channel_preferences` lets you customize and set preferred channel the user wants to get notified on. e.g. If user A, only wants to be notified using SMS, you can set the channel_preferences for the user to `sms` and Courier will use `sms` as first mode to send notification",
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
