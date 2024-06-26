import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Operator: ApiParam = {
  type: "string",
  name: "operator",
  description: "The operator to use for filtering",
  enum: [
    "ENDS_WITH",
    "EQ",
    "EXISTS",
    "GT",
    "GTE",
    "INCLUDES",
    "IS_AFTER",
    "IS_BEFORE",
    "LT",
    "LTE",
    "NEQ",
    "OMIT",
    "STARTS_WITH",
  ],
  example: "EQ",
};

const SingleFilter: ApiParam = {
  type: "object",
  displayName: "Single Filter",
  description: "A single filter to use for filtering",
  fields: [
    Operator,
    {
      type: "string",
      name: "value",
      description: "The value to use for filtering",
      example: "engineer",
    },
    {
      type: "string",
      name: "path",
      description:
        "The attribe name from profile whose value will be operated against the filter value",
      example: "title",
    },
  ],
};

var GroupFilter: ApiParam = {
  type: "object",
  name: "Multiple Filters",
  fields: [
    {
      type: "string",
      name: "operator",
      description: "The operator to use for filtering",
      enum: ["AND", "OR"],
      example: "OR",
    },
    {
      type: "array",
      name: "filters",
      field: SingleFilter,
    },
  ],
};

const Audience: ApiParam = {
  type: "object",
  displayName: "Audience",
  fields: [
    {
      type: "string",
      name: "id",
      description: "A unique identifier representing the audience_id",
      example: "developer-audience",
    },
    {
      type: "string",
      name: "name",
      description: "The name of the audience",
      example: "Developer Audience",
    },
    {
      type: "string",
      name: "description",
      description: "A description of the audience",
      example: "Audience for developers",
    },
    {
      type: "oneOf",
      name: "filter",
      description: "Either a single filter or a group of filters",
      required: true,
      options: [SingleFilter, GroupFilter],
    },
  ],
};

export const AudiencePut: ApiParam = {
  ...Audience,
  name: "audience",
  fields: [
    ...Audience.fields.slice(0, Audience.fields.length - 1),
    {
      type: "string",
      name: "created_at",
      description: "When audience was created",
      example: "2023-08-23T18:40:59.143Z",
    } as ApiParam,
    {
      type: "string",
      name: "updated_at",
      description: "When audience was updated",
      example: "2023-08-23T18:45:26.199Z",
    } as ApiParam,
    ...Audience.fields.slice(Audience.fields.length - 1),
  ],
};

export default Audience;
