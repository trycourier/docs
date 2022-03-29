import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

import Preference from "./Preference";

const Preferences: ApiParam = {
  type: "object",
  displayName: "Preferences",
  fields: [
    {
      type: "record",
      required: true,
      name: "notifications",
      description: "json object that contains notification ids with the respective preferences",
      field: Preference,
    },
    {
      type: "record",
      name: "categories",
      description: "json object that contains category ids with the respective preferences",
      field: Preference,
    },
  ],
};

export default Preferences;
