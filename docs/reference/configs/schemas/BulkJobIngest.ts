import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BulkJobIngest: ApiParam = {
  type: "object",
  displayName: "Bulk Job Create",
  fields: [
    {
      type: "array",
      name: "users",
      required: true,
      description: "User data ingestion for the job",
      field: {
        type: "json",
        required: true,
        example: {
          recipient: "jane-001",
          email: "jane@email.com",
          data: {}, // optional data bag, precedence over message data
          locale: "en_US", // optional, precedence over message locale
          preferences: {}, // optional, similar to preferences API
        },
        description: "User data for the job",
      },
    },
  ],
};

export default BulkJobIngest;
