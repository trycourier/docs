import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Paging: ApiParam = {
  type: "object",
  displayName: "Subscription Topic Preferences Input",
  fields: [
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
