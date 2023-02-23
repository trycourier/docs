import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Paging: ApiParam = {
  type: "object",
  name: "topic",
  description: "The topic preferences for a user. has_custom_routing and custom_routing are available to business tier customers.",
  fields: [
    {
      type: "string",
      name: "status",
      example: "OPTED_OUT",
      required: true,
      enum: ["OPTED_IN", "OPTED_OUT"],
      description: "The preference status the user has set for a subscription topic.",
    },
    {
      type: "boolean",
      name: "has_custom_routing",
      required: false,
      description: "Whether or not a user has set a channel preference for subscription topic. If false, custom_routing is ignored and the topic preference is used.",
    },
    {
      type: "array",
      name: "custom_routing",
      required: false,
      description: "The Channels a user has chosen to receive notifications through for this topic",
      field: {
        type: "string",
        enum: ["email", "push", "direct_message", "sms", "webhook"],
        example: "sms"
      },
    }
  ],
};

export default Paging;
