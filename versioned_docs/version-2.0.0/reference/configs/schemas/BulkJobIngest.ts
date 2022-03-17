import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const User: ApiParam = {
  type: "object",
  displayName: "User",
  fields: [
    {
      type: "string",
      name: "recipient",
      example: "8ec8c99a-c5f7-455b-9f60-8222b8a27056",
      description: "A unique identifier associated with the recipient of the delivered message.",
    },
    {
      type: "json",
      name: "preferences",
      description: "An object that includes any preferences for the recipient.",
    },
    {
      type: "json",
      name: "profile",
      example: { phone_number: "2025550125", email: "hello@example.com" },
      description:
        "An object that includes any key-value pairs required by your chosen Integrations (see our [Provider Documentation](/docs/guides/providers) for the requirements for each Integration.) If profile information is included in the request and that information already exists in the profile for the recipientId, that information will be merged.",
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
      name: "to",
      description: "A user recipient you want to send to",
      example: {
        email: "tejas@courier.com",
      },
    },
  ],
};

const BulkJobIngest: ApiParam = {
  type: "object",
  displayName: "Bulk Job Ingest",
  fields: [
    {
      type: "array",
      name: "users",
      required: true,
      description: "User data ingestion for the job",
      field: User,
    },
  ],
};

export default BulkJobIngest;
