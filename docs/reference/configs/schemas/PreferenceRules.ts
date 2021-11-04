import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const PreferenceRules: ApiParam = {
  type: "object",
  displayName: "PreferenceRules",
  description: 'example: OrderedMap { "type": "snooze", "until": "2021-12-31T00:00:00.000Z" }',
  fields: [
    {
      type: "string",
      name: "type",
      required: true,
      description:
        "snooze rule takes start (optional) and until in the form of iso-8601 date string format, to allow recipient to opt-out from a given notification",
      enum: ["snooze"],
      example: "snooze",
    },
  ],
};

export default PreferenceRules;
