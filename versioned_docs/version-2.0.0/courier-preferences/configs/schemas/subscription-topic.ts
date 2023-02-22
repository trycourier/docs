import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Paging: ApiParam = {
  type: "object",
  displayName: "Subscription Topic",
  fields: [
    {
      type: "string",
      name: "default_status",
      example: "OPT_IN",
      enum: ["OPT_IN", "OPT_OUT", "REQUIRED"],
      description: "The default status for a subscription topic",
    },
    {
      type: "boolean",
      name: "has_custom_routing",
      example: true,
      description: "Whether or not a user has set a channel preference for subscription topic.",
    },
    {
      type: "array",
      name: "custom_routing",
      description: "The Channels a user has chosen to receive notifications through for this topic",
      field: {
        type: "string",
        enum: ["email", "push", "direct_message", "sms", "webhook"],
        example: "email"
      },
    },
    {
      type: "string",
      name: "status",
      example: "OPTED_OUT",
      enum: ["OPTED_IN", "OPTED_OUT"],
      description: "The preference status the user has set for a subscription topic.",
    },
    {
      type: "string",
      name: "topic_id",
      example: "FW0YU64P4TMYKMMHH67D6FENX8VS",
      description: "The id for a subscription topic.",
    },
    {
      type: "string",
      name: "topic_name",
      example: "Invitations",
      description: "The name for a subscription topic.",
    },
  ],
};

export default Paging;
