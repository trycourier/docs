import { ApiReferenceProps } from "@site/src/components/ApiReference";
import { UserTokenDevice, UserTokenTracking } from "../schemas/UserToken";

const config: ApiReferenceProps = {
  description: "Returns data associated with a token including token status.",
  method: "GET",
  path: "/users/:user_id/tokens/:token",
  pathParams: [
    {
      type: "string",
      name: "user_id",
      required: true,
      description: "The user's ID. This can be any uniquely identifiable string.",
      example: "user-1234",
    },
    {
      type: "string",
      name: "token",
      required: true,
      description: "The full token string.",
      example: "ABW7HO9Y7XAQXZ7Y",
    },
  ],
  responses: [
    {
      status: 200,
      description: "OK",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "token",
            description: "The full token string.",
          },
          {
            type: "string",
            name: "provider_key",
            description: "The provider token is to be associated with.",
            example: "firebase-fcm",
            enum: ["apn", "firebase-fcm"],
          },
          {
            type: "json",
            name: "properties",
            description: "Properties sent to the provider along with the token",
          },
          UserTokenDevice,
          UserTokenTracking,
          {
            type: "string",
            name: "status",
            description: "The status of the token.",
            example: "active",
            enum: ["active", "unknown", "failed", "revoked"],
          },
          {
            type: "string",
            name: "status_reason",
            description: "The reason for the token status.",
          },
        ],
      },
    },
    {
      status: 400,
      description: "Bad Request",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Error Message",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["invalid_request_error"],
            example: "invalid_request_error",
          },
        ],
      },
    },
  ],
};

export default config;
