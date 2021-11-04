import { ApiParam } from "@site/src/components/ApiReference";

const PreferenceType: ApiParam = {
  type: "string",
  displayName: "PreferenceType",
  example: "OPT_OUT",
  enum: ["OPT_IN", "OPT_OUT", "REQUIRED"],
};

export default PreferenceType;
