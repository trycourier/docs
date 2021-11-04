import { ApiParam } from "@site/src/components/ApiReference";

const ProfileOIDC: ApiParam = {
  type: "object",
  displayName: "ProfileOIDC",
  fields: [
    {
      type: "object",
      name: "address",
      fields: [
        {
          type: "string",
          name: "formatted",
        },
        {
          type: "string",
          name: "street_address",
        },
        {
          type: "string",
          name: "locality",
        },
        {
          type: "string",
          name: "region",
        },
        {
          type: "string",
          name: "postal_code",
        },
        {
          type: "string",
          name: "country",
        },
      ],
    },
    {
      type: "string",
      name: "birthdate",
    },
    {
      type: "string",
      name: "email",
      example: "user@example.com",
    },
    {
      type: "boolean",
      name: "email_verified",
    },
    {
      type: "string",
      name: "family_name",
    },
    {
      type: "string",
      name: "gender",
    },
    {
      type: "string",
      name: "given_name",
    },
    {
      type: "string",
      name: "locale",
    },
    {
      type: "string",
      name: "middle_name",
    },
    {
      type: "string",
      name: "name",
    },
    {
      type: "string",
      name: "nickname",
    },
    {
      type: "string",
      name: "phone_number",
      example: "555-555-5555",
    },
    {
      type: "boolean",
      name: "phone_number_verified",
    },
    {
      type: "string",
      name: "picture",
    },
    {
      type: "string",
      name: "preferred_name",
    },
    {
      type: "string",
      name: "profile",
    },
    {
      type: "string",
      name: "sub",
    },
    {
      type: "string",
      name: "updated_at",
    },
    {
      type: "string",
      name: "website",
    },
    {
      type: "string",
      name: "zoneinfo",
    },
    {
      type: "json",
      name: "custom",
      description:
        "A free form object. Due to a limitation of the API Explorer, you can only enter string key/values below, but this API accepts more complex object structures.",
    },
  ],
};

export default ProfileOIDC;
