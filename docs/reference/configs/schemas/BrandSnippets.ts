import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import BrandSnippet from "./BrandSnippet";

const BrandSnippets: ApiParam = {
  type: "object",
  displayName: "BrandSnippets",
  fields: [
    {
      type: "array",
      name: "items",
      description: "Brand colors",
      field: BrandSnippet,
    },
  ],
};

export default BrandSnippets;
