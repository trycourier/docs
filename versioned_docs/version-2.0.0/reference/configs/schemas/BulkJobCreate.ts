import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BulkJobCreate: ApiParam = {
  type: "object",
  displayName: "Bulk Job Create",
  fields: [
    {
      type: "json",
      name: "message",
      required: true,
      example: {
        event: "my-notification-or-event", // required
        brand: "my-brand", // optional brand id
        data: {}, // optional data bag
        locale: "en_US", // optional
        override: {}, // optional Courier overrides
      },
      description: "Message definition for the job",
    },
  ],
};

export default BulkJobCreate;
