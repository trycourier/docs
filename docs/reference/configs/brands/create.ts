import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Brand from "../schemas/Brand";
import BrandSettings from "../schemas/BrandSettings";
import BrandSnippets from "../schemas/BrandSnippets";

const config: ApiReferenceProps = {
  description: "Create a new brand",
  method: "POST",
  path: "/brands",
  bodyParam: {
    type: "object",
    fields: [
      {
        type: "string",
        name: "id",
        example: "C8CPX6HQZ5M7Q5KAMW5CXC4N98DH",
        description: "Brand Identifier",
      },
      {
        type: "string",
        name: "name",
        required: true,
        example: "Example Brand Name",
        description: "Brand name",
      },
      {
        ...BrandSettings,
        name: "settings",
        required: true,
      },
      {
        ...BrandSnippets,
        name: "snippets",
      },
    ],
  },
  responses: [
    {
      status: 200,
      description: "OK",
      body: Brand,
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
    {
      status: 402,
      description: "Payment Required",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Limit Exceeded",
          },
          {
            type: "string",
            name: "type",
            description: "The type of error that occurred.",
            enum: ["authorization_error"],
            example: "authorization_error",
          },
        ],
      },
    },
    {
      status: 409,
      description: "Already Exists",
      body: {
        type: "object",
        fields: [
          {
            type: "string",
            name: "message",
            description: "A message describing the error that occurred.",
            example: "Already Exists",
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
