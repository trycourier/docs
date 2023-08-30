import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const PreferenceRules: ApiParam = {
  type: "object",
  displayName: "PreferenceRules",
  description:
    'example: OrderedMap { "type": "snooze", "until": "2021-12-31T00:00:00.000Z", "start": "2020-12-31T00:00:00.000Z" }',
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
    {
      type: "string",
      name: "start",
      required: false,
      description:
        "Start is a iso-8601 date string format that allows recipient to opt-out from a given notification starting at the given time.",
      enum: ["2021-08-23T23:27:41+00:00"],
      example: "2021-08-23T23:27:41+00:00",
    },
    {
      type: "string",
      name: "until",
      required: true,
      description:
        "Until is a iso-8601 date string format that allows recipient to opt-out from a given notification at the given time.",
      enum: ["2022-09-16T23:27:41+00:00"],
      example: "2022-09-16T23:27:41+00:00",
    },
  ],
};

export default PreferenceRules;
