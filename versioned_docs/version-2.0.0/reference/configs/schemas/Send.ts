import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const recipientList: ApiParam = {
  type: "array",
  displayName: "Recipient List",
  description: "The recipient of the message. Can also be a list of Recipient objects.",
  field: {
    type: "object",
    fields: [
      {
        type: "json",
        name: "data",
        description:
          "An object that includes any data you want to pass to the message. The data will populate the corresponding template or elemental variables.",
      },
      {
        type: "string",
        name: "email",
        description: "A unique email address associated to the recipient of message.",
      },
      {
        type: "string",
        name: "user_id",
        description: "A unique identifier associated with the recipient of the delivered message.",
      },
      {
        type: "string",
        name: "list_id",
        description:
          "A unique identifier associated with a Courier list of subscribers. A message will be sent to each subscriber in the list.",
      },
      {
        type: "string",
        name: "list_pattern",
        description:
          "A unique identifier associated with a Courier pattern used to identify specific list(s) intended to send. A message will be sent to each subscriber in the specific list(s).",
      },
      {
        type: "string",
        name: "phone_number",
        description: "A unique phone number associated to the recipient of message.",
      },
      {
        type: "json",
        name: "preferences",
        description: "An object that includes any preferences for the recipient.",
      },
    ],
  },
};

const recipient: ApiParam = {
  type: "object",
  displayName: "Recipient",
  description: "The recipient of the message. Can also be a list of Recipient objects.",
  fields: [
    {
      type: "json",
      name: "data",
      description:
        "An object that includes any data you want to pass to the message. The data will populate the corresponding template or elemental variables.",
    },
    {
      type: "string",
      name: "email",
      description: "A unique email address associated to the recipient of message.",
    },
    {
      type: "string",
      name: "user_id",
      description: "A unique identifier associated with the recipient of the delivered message.",
    },
    {
      type: "string",
      name: "list_id",
      description:
        "A unique identifier associated with a Courier list of subscribers. A message will be sent to each subscriber in the list.",
    },
    {
      type: "string",
      name: "list_pattern",
      description:
        "A unique identifier associated with a Courier pattern used to identify specific list(s) intended to send. A message will be sent to each subscriber in the specific list(s).",
    },
    {
      type: "string",
      name: "phone_number",
      description: "A unique phone number associated to the recipient of message.",
    },
    {
      type: "json",
      name: "preferences",
      description: "An object that includes any preferences for the recipient.",
    },
  ],
};

const to: ApiParam = {
  type: "oneOf",
  name: "to",
  displayName: "to",
  required: true,
  options: [recipient, recipientList],
};

export const brand_id: ApiParam = {
  type: "string",
  name: "brand_id",
  description:
    "A unique identifier that represents the brand that should be used for rendering the notification. Note that a brand_id will only be applied to a Template message.",
};

export const routingProvider: ApiParam = {
  type: "object",
  displayName: "Provider",
  fields: [
    {
      type: "string",
      name: "channel",
      required: true,
    },
    {
      type: "json",
      name: "config",
    },
    {
      type: "string",
      name: "if",
      description:
        "A conditional expression to determine if the message should be sent through the channel. You can reference any property from the data or profile fields in your expression.",
    },
  ],
};

export const routingChannel: ApiParam = {
  type: "object",
  displayName: "Channel",
  fields: [
    {
      type: "string",
      name: "channel",
      required: true,
    },
    {
      type: "string",
      name: "method",
      required: true,
      enum: ["all", "single"],
      description:
        "The method for selecting channels to send the message with. If no method is specified, then 'single' will be used as default.",
    },
    {
      type: "json",
      name: "config",
    },
    {
      type: "string",
      name: "if",
      description:
        "A conditional expression to determine if the message should be sent through the channel. You can reference any property from the data or profile fields in your expression.",
    },
    {
      type: "oneOf",
      name: "providers",
      options: [
        {
          type: "string",
          displayName: "string",
        },
        routingProvider,
      ],
    },
  ],
};

export const routing: ApiParam = {
  type: "object",
  name: "routing",
  description:
    "Allows you to customize which channel(s) Courier will potentially deliver the message. If no routing key is specified, Courier will use the default routing configured in the Courier Studio UI.",
  fields: [
    {
      type: "string",
      name: "method",
      required: true,
      enum: ["all", "single"],
      description: "The method for selecting channels to send the message with.",
    },
    {
      type: "array",
      name: "channels",
      description:
        "An array of valid channel identifiers (like email, push, sms, etc.) and additional routing nodes.",
      field: {
        type: "oneOf",
        options: [
          {
            type: "string",
            displayName: "string",
          },
          routingChannel,
          routingProvider,
        ],
      },
    },
  ],
};

export const channels: ApiParam = {
  type: "record",
  name: "channels",
  description:
    "A map of valid channel identifiers (e.g. email, sms, etc.) to channel configuration objects whose properties are below. If you don't specify 'channels', Courier will use the default configuration for each channel as specified in the Courier Studio UI.",
  field: {
    type: "object",
    displayName: "Channel Configuration Object",
    fields: [
      {
        type: "string",
        name: "brand_id",
        description:
          "Supply a specific brand id, which will apply to all messages sent through the channel.",
      },
      {
        type: "array",
        name: "providers",
        field: {
          type: "string",
        },
        description:
          "The providers to send the message through the channel. The channel must be available to the messages Routing for this field to take effect.",
      },
      {
        type: "string",
        name: "routing_method",
        enum: ["all", "single"],
        description:
          "The method for selecting the providers to send the message with. If no routing_method is specified, then 'single' will be used as default.",
      },
      {
        type: "string",
        name: "if",
        description:
          "A conditional expression to determine if the message should be sent through the channel. You can reference any property from the data or profile fields in your expression.",
      },
      {
        type: "json",
        name: "override",
      },
      {
        type: "object",
        name: "metadata",
        fields: [
          {
            type: "object",
            name: "utm",
            displayName: "utm",
            description:
              "Identify the campaign that refers traffic to a specific website through this specific channel. These properties will override the properties set in the message metadata.",
            fields: [
              {
                type: "string",
                name: "campaign",
              },
              {
                type: "string",
                name: "content",
              },
              {
                type: "string",
                name: "medium",
              },
              {
                type: "string",
                name: "source",
              },
              {
                type: "string",
                name: "term",
              },
            ],
          },
        ],
      },
      {
        type: "number",
        name: "timeout",
        description: "(Business tier only) Time in ms to attempt the channel before failover.",
      },
    ],
  },
};

export const providers: ApiParam = {
  type: "record",
  name: "providers",
  description:
    "The providers object is a map of valid provider identifiers (e.g. twilio, slack, etc.) to provider configuration objects. If you don't specify providers, Courier will use the default configuration for each provider as specified in the Courier Studio UI.",
  field: {
    type: "object",
    displayName: "Provider Configuration Object",
    fields: [
      {
        type: "json",
        name: "override",
        description:
          "Contains twilio specific overrides for settings like API keys and other configurations.",
      },
      {
        type: "string",
        name: "if",
        description:
          "A conditional expression to determine if the message should be sent through twilio. You can reference any property from the data or profile fields in your expression.",
      },
      {
        type: "object",
        name: "metadata",
        fields: [
          {
            type: "object",
            name: "utm",
            displayName: "utm",
            description:
              "Identify the campaign that refers traffic to a specific website through this specific provider. These properties will override the properties set in the message metadata and the channel metadata.",
            fields: [
              {
                type: "string",
                name: "campaign",
              },
              {
                type: "string",
                name: "content",
              },
              {
                type: "string",
                name: "medium",
              },
              {
                type: "string",
                name: "source",
              },
              {
                type: "string",
                name: "term",
              },
            ],
          },
        ],
      },
      {
        type: "number",
        name: "timeout",
        description: "(Business tier only) Time in ms to attempt the provider before failover.",
      },
    ],
  },
};

export const template: ApiParam = {
  type: "string",
  name: "template",
  required: true,
  example: "NOTIFICATION_TEMPLATE",
  description: "A notification template id or event mapping from Courier Studio.",
};

export const content: ApiParam = {
  type: "object",
  name: "content",
  required: true,
  description: " A simple content object or a complete Courier Elemental document.",
  fields: [
    {
      type: "string",
      name: "title",
      description: "The title of a notification.  (i.e. Email Subject / Push Title)",
    },
    {
      type: "string",
      name: "body",
      description: "The body of a notification.",
    },
  ],
};

export const contentOrTemplate: ApiParam = {
  type: "oneOf",
  displayName: "content or template",
  required: true,
  options: [template, content],
};

export const metadata: ApiParam = {
  type: "object",
  name: "metadata",
  fields: [
    {
      type: "string",
      name: "event",
      description:
        "An arbitrary string to tracks the event that generated this request (e.g. 'signup').",
    },
    {
      type: "array",
      name: "tags",
      description:
        "An array of up to 9 tags you wish to associate with this request (and corresponding messages) for later analysis. Individual tags cannot be more than 30 characters in length.",
      field: {
        type: "string",
      },
    },
    {
      type: "string",
      name: "trace_id",
      description:
        "A unique ID used to correlate this request to processing on your servers. Courier does not verify the uniqueness of this ID.",
    },
    {
      type: "object",
      name: "utm",
      displayName: "utm",
      description:
        "Identify the campaign that refers traffic to a specific website, and attributes the browser's website session.",
      fields: [
        {
          type: "string",
          name: "campaign",
        },
        {
          type: "string",
          name: "content",
        },
        {
          type: "string",
          name: "medium",
        },
        {
          type: "string",
          name: "source",
        },
        {
          type: "string",
          name: "term",
        },
      ],
    },
  ],
};

export const timeout: ApiParam = {
  type: "object",
  name: "timeout",
  fields: [
    {
      type: "number",
      name: "message",
      description:
        "An arbitrary duration for a message to be available for delivery. Default is 72 hours or 259200000 Milliseconds",
    },
    {
      type: "number",
      name: "channel",
      description: "(Business tier only) Time in ms to attempt a channel before failover.",
    },
    {
      type: "number",
      name: "provider",
      description: "(Business tier only) Time in ms to attempt a provider before failover.",
    },
  ],
};

export const delay: ApiParam = {
  type: "object",
  name: "delay",
  fields: [
    {
      type: "number",
      name: "duration",
      description: "The millisecond duration to delay the delivery of the message.",
    },
  ],
};

export const expiry: ApiParam = {
  type: "object",
  name: "expiry",
  description: "Expiry allows you to set an absolute or relative time in which a message expires.  Note: This is only valid for the Courier Inbox channel as of 12-08-2022.",
  fields: [
    {
      type: "string",
      name: "expires_at",
      description: "An epoch timestamp or ISO8601 timestamp with timezone (YYYY-MM-DDThh:mm:ss.sTZD) that describes the time in which a message expires.",
    },
    {
      type: "string",
      name: "expires_in",
      description: "A duration in the form of milliseconds or an ISO8601 Duration format (i.e. P1DT4H).  https://tc39.es/proposal-temporal/docs/duration.html",
    },
  ],
};

const Send: ApiParam = {
  type: "object",
  name: "message",
  displayName: "message",
  fields: [to, contentOrTemplate, brand_id, routing, channels, providers, metadata, timeout, delay, expiry],
};

export default Send;
