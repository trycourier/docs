import React from "react";
import { Params, Param } from "@site/src/components/Params";

/** Does not include user_id */
export const Content = () => (
  <Params>
    <Param name="title" type="string">
      The title to be displayed by channels that support a title, such as email.
    </Param>
    <Param name="body" type="string">
      Text content displayed in the notification. Supports markdown.
    </Param>
    <Param name="elements" type="array">
      Elements describing the content of the notification. Use this field or body. See
      <a href="/platform/content/elemental/elements">elements</a> for a list of available elements.
    </Param>
    <Param name="version" type="string">
      The version of elemental being supplied. Currently, only `2020-01-01` is supported.
    </Param>
  </Params>
);
