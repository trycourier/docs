import { ApiReferenceProps } from "@site/src/components/ApiReference";

import Paging from "../schemas/Paging";
import List from "../schemas/List";

const config: ApiReferenceProps = {
  description: "Returns all of the lists, with the ability to filter based on a pattern.",
  method: "GET",
  path: "/lists",
  queryParams: [
    {
      type: "string",
      name: "cursor",
      description: "A unique identifier that allows for fetching the next page of lists.",
      example: "MTU4OTQ5NTI1ODY4NywxLTVlYmRjNWRhLTEwODZlYWFjMWRmMjEwMTNjM2I0ZjVhMA==",
    },
    {
      type: "string",
      name: "pattern",
      description:
        "A pattern used to filter the list items returned. Pattern types supported: exact match on `list_id` or a pattern of one or more pattern parts. you may replace a part with either: `*` to match all parts in that position, or `**` to signify a wildcard `endsWith` pattern match.",
      example: "exact-list-id OR example.*, example.**, example.*.list",
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
            ...Paging,
            name: "paging",
          },
          {
            type: "array",
            name: "results",
            field: List,
          },
        ],
      },
    },
  ],
};

export default config;

export const listsResponse = [
  {
    name: "paging",
    type: "Object",
    description: "",
    children: [
      {
        name: "cursor",
        type: "String",
        description: "",
      },
      {
        name: "more",
        type: "Boolean",
        description: "",
      },
    ],
  },
  {
    name: "results",
    type: "Array",
    description: "",
    children: [
      {
        name: "Unnamed_1",
        type: "Object",
        description: "",
        children: [
          {
            name: "created",
            type: "String",
            description: "",
          },
          {
            name: "id",
            type: "String",
            description: "",
          },
          {
            name: "name",
            type: "String",
            description: "",
          },
          {
            name: "updated",
            type: "String",
            description: "",
          },
          {
            name: "preferences",
            type: "Object",
            description: "",
            children: [
              {
                name: "notifications",
                type: "Object",
                description: "",
                children: [
                  {
                    name: "{KEY}",
                    type: "Object",
                    description: "",
                    children: [
                      {
                        name: "channel_preferences",
                        type: "Array",
                        description: "",
                        children: [
                          {
                            name: "Unnamed_2",
                            type: "Object",
                            description: "",
                            children: [
                              {
                                name: "channel",
                                type: "String",
                                description: "",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: "rules",
                        type: "Array",
                        description: "",
                        children: [
                          {
                            name: "Unnamed_3",
                            type: "Object",
                            description: "",
                            children: [
                              {
                                name: "type",
                                type: "String",
                                description: "",
                              },
                              {
                                name: "start",
                                type: "String",
                                description: "",
                              },
                              {
                                name: "until",
                                type: "String",
                                description: "",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: "status",
                        type: "String",
                        description: "",
                      },
                    ],
                  },
                ],
              },
              {
                name: "categories",
                type: "Object",
                description: "",
                children: [
                  {
                    name: "{KEY}",
                    type: "Object",
                    description: "",
                    children: [
                      {
                        name: "channel_preferences",
                        type: "Array",
                        description: "",
                        children: [
                          {
                            name: "Unnamed_4",
                            type: "Object",
                            description: "",
                            children: [
                              {
                                name: "channel",
                                type: "String",
                                description: "",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: "rules",
                        type: "Array",
                        description: "",
                        children: [
                          {
                            name: "Unnamed_5",
                            type: "Object",
                            description: "",
                            children: [
                              {
                                name: "type",
                                type: "String",
                                description: "",
                              },
                              {
                                name: "start",
                                type: "String",
                                description: "",
                              },
                              {
                                name: "until",
                                type: "String",
                                description: "",
                              },
                            ],
                          },
                        ],
                      },
                      {
                        name: "status",
                        type: "String",
                        description: "",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
