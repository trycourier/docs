import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import BrandSettings from "./BrandSettings";
import BrandSnippets from "./BrandSnippets";

const Brand: ApiParam = {
  type: "object",
  displayName: "Brand",
  fields: [
    {
      type: "number",
      name: "created",
      example: 1591753605265,
      description:
        "The date/time of when the brand was created. Represented in milliseconds since Unix epoch.",
    },
    {
      type: "string",
      name: "id",
      example: "C8CPX6HQZ5M7Q5KAMW5CXC4N98DH",
      description: "Brand Identifier",
    },
    {
      type: "string",
      name: "name",
      required: true,
      example: "Example Brand Name",
      description: "Brand name",
    },
    {
      type: "number",
      name: "published",
      example: 1591753605265,
      description:
        "The date/time of when the brand was published. Represented in milliseconds since Unix epoch.",
    },
    { ...BrandSettings, name: "settings" },
    {
      type: "number",
      name: "updated",
      example: 1591753605265,
      description:
        "The date/time of when the brand was updated. Represented in milliseconds since Unix epoch.",
    },
    { ...BrandSnippets, name: "snippets" },
    {
      type: "string",
      name: "version",
      example: "2020-06-19T18:51:36.083Z",
      description: "The version identifier for the brand",
    },
  ],
};

export default Brand;
