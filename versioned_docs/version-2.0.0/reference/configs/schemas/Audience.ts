import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const Operator: ApiParam = {
  type: "string",
  name: "operator",
  description: "The operator to use for filtering",
  enum: ["AND", "EQ", "GT", "GTE", "INCLUDES", "LT", "LTE", "NEQ", "OMIT", "OR"],
  example: "EQ",
};

const SingleFilter: ApiParam = {
  type: "object",
  name: "Single Filter",
  description: "A single filter to use for filtering",
  fields: [
    Operator,
    {
      type: "string",
      name: "value",
      description: "The value to use for filtering",
      example: "developer-audience",
    },
    {
      type: "string",
      name: "path",
      description:
        "The attribe name from profile whose value will be operated against the filter value",
    },
  ],
};

var GroupFilters: ApiParam = {
  type: "array",
  name: "Group of Filter rules",
  description: "Group of filters to combine multiple rules",
  field: {
    type: "oneOf",
    options: [SingleFilter, GroupFilters],
  },
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
      options: [SingleFilter, GroupFilters],
    },
  ],
};

export default Audience;
