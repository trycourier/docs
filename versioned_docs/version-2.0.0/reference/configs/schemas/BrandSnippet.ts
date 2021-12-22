import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const BrandSnippet: ApiParam = {
  type: "object",
  displayName: "BrandSnippet",
  description: "Individual snippet information",
  fields: [
    {
      type: "string",
      name: "format",
      required: true,
      enum: ["handlebars"],
    },
    {
      type: "string",
      name: "name",
      required: true,
    },
    {
      type: "string",
      name: "value",
      required: true,
    },
  ],
};

export default BrandSnippet;
