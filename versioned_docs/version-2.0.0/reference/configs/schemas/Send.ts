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
      name: "list_id",
      description: "A unique identifier associated with a Courier list of subscribers. A message will be sent to each subscriber in the list."
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

const routing: ApiParam = {
  type:"object",
  name: "routing",
  description: "Allows you to customize which channel(s) Courier will potentially deliver the message. If no routing key is specified, Courier will use the default routing configured in the Courier Studio UI.",
  fields: [
    {
      type: "string",
      name: "method",
      required: true,
      enum: ["all", "single"],
      example: "single",
      description: "The method for selecting channels to send the message with. If no method is specified, then 'single' will be used as default."
    },
    {
      type: "array",
      name: "channels",
      description: "An array of valid channel identifiers (like email, push, sms, etc.) and additional routing nodes.",
      field: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "method",
            required: true,
            enum: ["all", "single"],
            example: "single"
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

const channels: ApiParam = {
  type: "record",
  name: "channels",
  description: "A map of valid channel identifiers (e.g. email, sms, etc.) to channel configuration objects whose properties are below. If you don't specify 'channels', Courier will use the default configuration for each channel as specified in the Courier Studio UI.",
  field: {
    type: "object",
    displayName: "Channel Configuration Object",
    fields: [
      {
        type: "string",
        name: "brand_id",
        description: "Supply a specific brand id, which will apply to all messages sent through the channel.",
      },
      {
        type: "array",
        name: "providers",
        field: {
          type: "string",
        },
        description: "The providers to send the message through the channel. The channel must be available to the messages Routing for this field to take effect."
      },
      {
        type: "string",
        name: "routing_method",
        enum: ["all", "single"],
        description: "The method for selecting the providers to send the message with. If no routing_method is specified, then 'single' will be used as default."
      },
      {
        type: "string",
        name: "if",
        description: "A conditional expression to determine if the message should be sent through the channel. You can reference any property from the data or profile fields in your expression.",
        example: "data.locale === 'usa' && profile.name === 'Spongebob'"
      },
      {
        type:"object",
        name: "override",
        fields: []
      }
    ],
  },
}


const providers: ApiParam = {
  type: "record",
  name: "providers",
  description: "The providers object is a map of valid provider identifiers (e.g. twilio, slack, etc.) to provider configuration objects. If you don't specify providers, Courier will use the default configuration for each provider as specified in the Courier Studio UI.",
  field: {
    type: "object",
    displayName: "Provider Configuration Object",
    fields: [
      {
        type: "object",
        name: "override",
        fields: [],
        description: "Contains twilio specific overrides for settings like API keys and other configurations."
      },
      {
        type: "string",
        name: "if",
        description: "A conditional expression to determine if the message should be sent through twilio. You can reference any property from the data or profile fields in your expression.",
        example: "data.locale === 'usa' && profile.name === 'Spongebob'"
      }
    ]
  }
}

const template: ApiParam = {
  type: "string",
  name: "template",
  required: true,
  example: "NOTIFICATION_TEMPLATE",
  description: "A notification template id or event mapping from Courier Studio."
}

const content: ApiParam = {
  type: "object",
  name: "content",
  required: true,
  description: " A simple content object or a complete Courier Elemental document.",
  fields: []
};

const contentOrTemplate: ApiParam = {
  type: "oneOf",
  displayName: "content or template",
  required: true,
  options: [
    template,
    content,
  ],
};

const metadata: ApiParam = {
  type: "object",
  name: "metadata",
  fields: [
    {
      type: "string",
      name: "event",
      description: "An arbitrary string to tracks the event that generated this request (e.g. 'signup')."
    }
  ]
};

const Send: ApiParam = {
  type: "object",
  name: "message",
  displayName: "message",
  fields: [
    to,
    contentOrTemplate,
    brand_id,
    routing,
    channels,
    providers,
    metadata
  ]
};

export default Send;
