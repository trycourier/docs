import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Paging: ApiParam = {
  type: "object",
  name: "topic",
  displayName: "Subscription Topic Preferences Input",
  fields: [
    {
      type: "boolean",
      name: "has_custom_routing",
      example: true,
      description: "If true, respect custom_routing parameter. If false, use the default routing for the topic.",
    },
    {
      type: "array",
      name: "custom_routing",
      description: "The Channels a user has chosen to receive notifications through for this topic",
      field: {
        type: "string",
        enum: ["email", "push", "direct_message", "sms", "webhook"],
        example: "sms"
      },
    },
    {
      type: "string",
      name: "status",
      example: "OPTED_OUT",
      enum: ["OPTED_IN", "OPTED_OUT"],
      description: "The preference status the user has set for a subscription topic.",
    }
  ],
};

export default Paging;
