import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const to: ApiParam = {
  type: "object",
  name: "to",
  required: true,
  description: 'The recipient of the message.',
  fields: [
    {
      type: "object",
      name: "data",
      fields: [],
      description: "An object that includes any data you want to pass to the message. The data will populate the corresponding template or elemental variables."
    },
    {
      type: "string",
      name: "email",
      description: "A unique email address associated to the recipient of message."
    },
    {
      type: "string",
      name: "user_id",
      description: "A unique identifier associated with the recipient of the delivered message."
    },
    {
      type: "string",
      name: "phone_number",
      description: "A unique phone number associated to the recipient of message."
    },
    {
      type: "object",
      name: "preferences",
      description: "An object that includes any preferences for the recipient.",
      fields: []
    },
  ]
};

const brand_id: ApiParam = {
  type: "string",
  name: "brand_id",
  description: "A unique identifier that represents the brand that should be used for rendering the notification. Note that a brand_id will only be applied to a Template message."
}

const channelsEmail: ApiParam = {
  type: "object",
  name: "email",
  fields: [
    {
      type: "string",
      name: "brand_id",
    },
    {
      type: "array",
      name: "providers",
      field: {
        type: "string",
      },
    },
    {
      type: "string",
      name: "routing_method",
      enum: ["all", "single"]
    },
    {
      type: "string",
      name: "if"
    },
    {
      type:"object",
      name: "override",
      fields: []
    }
  ]
}

const channelsPush: ApiParam = {
  type: "object",
  name: "push",
  fields: [
    {
      type: "string",
      name: "brand_id",
    },
    {
      type: "array",
      name: "providers",
      field: {
        type: "string",
      },
    },
    {
      type: "string",
      name: "routing_method",
      enum: ["all", "single"]
    },
    {
      type: "string",
      name: "if"
    },
    {
      type:"object",
      name: "override",
      fields: []
    }
  ]
}

const channels: ApiParam = {
  type: "object",
  name: "channels",
  description: "A map of valid channel identifiers (e.g. email, sms, etc.) to channel configuration objects whose properties are below. If you don't specify 'channels', Courier will use the default configuration for each channel as specified in the Courier Studio UI.",
  fields: [
    channelsPush,
    channelsEmail
  ]
}

const routingStrategyProvider: ApiParam = {
  type: "object",
  fields: [
    {
      type: "string",
      name: "name"
    },
    {
      type: "object",
      name: "config",
      fields: []
    },
    {
      type: "string",
      name: "if"
    }
  ]
}

const routingStrategyChannel: ApiParam = {
  type: "object",
  fields: [
    {
      type: "string",
      name: "channel"
    },
    {
      type: "object",
      name: "config",
      fields: []
    },
    {
      type: "array",
      name: "providers",
      field: {
        type: "oneOf",
        options: [
          routingStrategyProvider,
          {
            type: "string"
          }
        ]
      }
    },
    {
      type: "string",
      name: "if"
    }
  ]
}

const routingChannel: ApiParam = {
  type: "oneOf",
  options: [
    routingStrategyChannel,
    routingStrategyProvider,
    {
      type: "string"
    }
  ]
}

const routing: ApiParam = {
  type:"object",
  name: "routing",
  description: "Allows you to customize which channel(s) Courier will potentially deliver the message. If no routing key is specified, Courier will use the default routing configured in the Courier Studio UI.",
  fields: [
    {
      type: "string",
      name: "method",
      required: true,
      enum: ["all", "single"]
    },
    {
      type: "array",
      name: "channels",
      field: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "method",
            required: true,
            enum: ["all", "single"]
          },
          {
            type: "array",
            name: "channels",
            field: {
              type: "object",
              fields: []
            }
          }
        ]
      }
    }
  ]
}

const providers: ApiParam = {
  type: "object",
  name: "providers",
  description: "The providers object is a map of valid provider identifiers (e.g. twilio, slack, etc.) to channel configuration objects. If you don't specify providers, Courier will use the default configuration for each provider as specified in the Courier Studio UI.",
  fields: [
    {
      type: "object",
      fields: [
        {
          type: "object",
          name: "override",
          fields: []
        },
        {
          type: "string",
          name: "if"
        }
      ]
    }
  ]
}

const Send: ApiParam = {
  type: "object",
  displayName: "Send",
  fields: [
    to,
    brand_id,
    routing,
    channels,
    providers,
    {
      type: "string",
      name: "template"
    },
    {
      type: "object",
      name: "content",
      fields: []
    },
    {
      type: "object",
      name: "metadata",
      fields: []
    }
  ]
};

export default Send;
