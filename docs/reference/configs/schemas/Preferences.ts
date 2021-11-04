import { ApiParam } from "@site/src/components/ApiReference";

// import Preference from "./Preference";

const Preferences: ApiParam = {
  type: "object",
  displayName: "Preferences",
  fields: [
    // {
    //   type: "record",
    //   required: true,
    //   name: "notifications",
    //   description: "json object that contains notification ids with the respective preferences",
    //   field: Preference,
    // },
    // {
    //   type: "record",
    //   name: "categories",
    //   description: "json object that contains category ids with the respective preferences",
    //   field: Preference,
    // },
    {
      type: "string",
      name: "templateId",
      description:
        "specify an optional preference template id to validate preferences before persisting it",
      example: "W951R8G37V49KZMK8DEKW8Z588BZ",
    },
  ],
};

export default Preferences;
