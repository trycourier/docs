import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import {
  brand_id,
  channels,
  contentOrTemplate,
  metadata,
  providers,
  routing,
} from "@site/versioned_docs/version-2.0.0/api-specs/configs/schemas/Send";

const BulkJobCreate: ApiParam = {
  type: "object",
  displayName: "Bulk Job Create",
  fields: [
    {
      type: "object",
      name: "message",
      required: true,
      fields: [
        {
          type: "string",
          name: "event",
          example: "EXAMPLE_NOTIFICATION",
          description:
            'A unique identifier that can be mapped to an individual Notification. This could be the "Notification ID” on Notification detail pages (see the [Notifications page](https://app.courier.com/designer/notifications) in the Courier app) or a custom string mapped to the event in [settings](https://app.courier.com/settings/events).',
        },
        {
          type: "string",
          name: "brand",
          example: "W50NC77P524K14M5300PGPEK4JMJ",
          description:
            "A unique identifier that represents the brand that should be used for rendering the notification.",
        },
        {
          type: "json",
          name: "data",
          example: { name: "Jane Doe", age: 27 },
          description:
            "An object that includes any data you want to pass to a message template. The data will populate the corresponding template variables.",
        },
        {
          type: "json",
          name: "override",
          description:
            "An object that is merged into the request sent by Courier to the provider to override properties or to gain access to features in the provider API that are not natively supported by Courier.",
        },
        {
          type: "object",
          displayName: "Bulk Job API v2 message",
          fields: [contentOrTemplate, brand_id, routing, channels, providers, metadata],
        },
      ],
      description: "Message definition for the job",
    },
  ],
};

export default BulkJobCreate;
