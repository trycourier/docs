import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BulkJobIngest: ApiParam = {
  type: "object",
  displayName: "Bulk Job Ingest",
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
          recipient: "jane-001", // optional, defaults to a randomly generated ID
          profile: {}, // optional profile bag (profile.locale takes precedence over message.locale)
          data: {}, // optional data bag, precedence over message data
          preferences: {}, // optional, similar to preferences API
        },
        description: "User data for the job",
      },
    },
  ],
};

export default BulkJobIngest;
