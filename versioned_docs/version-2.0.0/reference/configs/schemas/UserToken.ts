import { ApiParam } from "@site/src/components/ApiReference/ApiParamField";

export const UserTokenDevice: ApiParam = {
  type: "object",
  name: "device",
  description: "Information about the device the token is associated with.",
  fields: [
    {
      type: "string",
      name: "app_id",
      description: "Id of the application the token is used for",
      example: "com.example.app",
    },
    {
      type: "string",
      name: "ad_id",
      description: "Id of the advertising identifier",
      example: "1234567890",
    },
    {
      type: "string",
      name: "device_id",
      description: "Id of the device the token is associated with",
      example: "1234567890",
    },
    {
      type: "string",
      name: "platform",
      description: "The device platform i.e. android, ios, web",
      example: "android",
    },
    {
      type: "string",
      name: "manufacturer",
      description: "The device manufacturer",
      example: "Samsung",
    },
    {
      type: "string",
      name: "model",
      description: "The device model",
      example: "SM-G930F",
    },
  ],
};

export const UserTokenTracking: ApiParam = {
  type: "object",
  name: "tracking",
  description: "Information about the device the token is associated with.",
  fields: [
    {
      type: "string",
      name: "os_version",
      description: "The operating system version",
      example: "9",
    },
    {
      type: "string",
      name: "ip",
      description: "The IP address of the device",
      example: "1.2.3.4",
    },
    {
      type: "string",
      name: "lat",
      description: "The latitude of the device",
      example: "1.2",
    },
    {
      type: "string",
      name: "long",
      description: "The longitude of the device",
      example: "3.4",
    },
  ],
};

export const BaseUserTokenFields: ApiParam[] = [
  {
    type: "string",
    name: "provider_key",
    description: "The provider token is to be associated with.",
    example: "firebase-fcm",
    enum: ["apn", "firebase-fcm", "expo", "onesignal"],
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
    name: "expiry_date",
    description:
      "ISO 8601 formatted date the token expires. Defaults to 2 months. Set to false to disable expiration.",
    example: "2030-01-01T00:00:00.000Z",
  },
];

/** Full UserToken. Used for GET requests. Has info attached by backend. */
export const UserToken: ApiParam = {
  type: "object",
  fields: [
    {
      type: "string",
      name: "token",
      description: "The full token string.",
    },
    ...BaseUserTokenFields,
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
};
