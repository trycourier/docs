import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import AccessorType from "./AccessorType";
import CancelStep from "./CancelStep";
import DelayStep from "./DelayStep";
import SendStep from "./SendStep";
import SendListStep from "./SendListStep";
import UpdateProfileStep from "./UpdateProfileStep";
import InvokeStep from "./InvokeStep";

const AutomationRun: ApiParam = {
  type: "object",
  displayName: "AutomationRun",
  fields: [
    {
      type: "object",
      name: "automation",
      required: true,
      fields: [
        {
          type: "array",
          name: "steps",
          required: true,
          field: {
            type: "oneOf",
            options: [CancelStep, DelayStep, SendStep, SendListStep, UpdateProfileStep, InvokeStep],
          },
        },
        {
          type: "oneOf",
          name: "cancelation_token",
          description:
            "A unique id or accessor that can be used to cancel this automation from executing from another automation via the Cancel Automation step.",
          options: [
            {
              type: "string",
              displayName: "string",
              description: "The string that is associated with the cancelable automation run.",
            },
            AccessorType,
          ],
        },
      ],
    },
    // {
    //   type: "string",
    //   name: "brand",
    //   example: "W50NC77P524K14M5300PGPEK4JMJ",
    //   description:
    //     "A unique identifier that represents the brand that should be used for rendering the notification.",
    // },
    {
      type: "string",
      name: "automation",
      example: {"steps": [{"action": "send", "template": "SAMPLE_TEMPLATE"}, {"action": "delay", "until": "20240408T080910.123"}]},
      description:
        'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
    },
    // {
    //   type: "string",
    //   name: "recipient",
    //   example: "8ec8c99a-c5f7-455b-9f60-8222b8a27056",
    //   description: "A unique identifier associated with the recipient of the delivered message.",
    // },
    {
      type: "json",
      name: "data",
      example: { name: "Jane Doe", age: 27 },
      description:
        "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
    },
    {
      type: "json",
      name: "profile",
      example: { user_id: "fubar", email: "hello@example.com" },
      description:
        "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](/docs/platform/channels) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
    },
  ],
};

export default AutomationRun;
