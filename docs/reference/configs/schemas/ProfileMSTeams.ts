import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

const ProfileMSTeams: ApiParam = {
  type: "object",
  displayName: "ProfileMSTeams",
  fields: [
    {
      type: "oneOf",
      name: "ms_teams",
      description: "[Learn more](https://docs.courier.com/docs/microsoft-teams)",
      options: [
        {
          type: "object",
          displayName: "Send to an MS Teams User",
          fields: [
            {
              type: "string",
              name: "user_id",
            },
            {
              type: "string",
              name: "tenant_id",
            },
            {
              type: "string",
              name: "service_url",
            },
          ],
        },
        {
          type: "object",
          displayName: "Send to an MS Teams Channel",
          fields: [
            {
              type: "string",
              name: "conversation_id",
            },
            {
              type: "string",
              name: "tenant_id",
            },
            {
              type: "string",
              name: "service_url",
            },
          ],
        },
      ],
    },
  ],
};

export default ProfileMSTeams;
