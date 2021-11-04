import { ApiParam } from "@site/src/components/ApiReference";

const PreferenceStatus: ApiParam = {
  type: "string",
  displayName: "PreferenceStatus",
  description: "Whether or not the recipient has opted in or out.",
  enum: ["OPTED_IN", "OPTED_OUT"],
  example: "OPTED_IN",
};

export default PreferenceStatus;
