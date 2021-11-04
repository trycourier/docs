import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const AccessorType: ApiParam = {
  type: "object",
  displayName: "AccessorType",
  fields: [
    {
      type: "string",
      name: "$ref",
      required: true,
      example: "data.foo.bar",
      description:
        "The path to the value to be accessed. The root of the path must be either a property in run context or a step reference.",
    },
  ],
};

export default AccessorType;
