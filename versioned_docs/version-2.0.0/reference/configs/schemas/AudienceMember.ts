import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const AudienceMember: ApiParam = {
  type: "object",
  displayName: "AudienceMember",
  fields: [
    {
      type: "string",
      name: "member_id",
      description: "profile id of the member created using the Profile API",
      example: "suhas_deshpande",
    },
    {
      type: "string",
      name: "added_at",
      description: "Date and time when the member was added to the audience",
      example: "2020-01-01T00:00:00.000Z",
    },
    {
      type: "string",
      name: "audience_id",
      description: "represents the audience_id this member belongs to",
      example: "developer-audience",
    },
    {
      type: "number",
      name: "audience_version",
      description:
        "Indicate the version of the audience, this member was added to, version is incremented when the audience is updated",
      example: 1,
    },
    {
      type: "string",
      name: "reason",
      description: "Reason for adding the member to the audience",
      example: "\"EQ('title', 'Software Engineer') => true\"",
    },
  ],
};

export default AudienceMember;
