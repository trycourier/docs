import React, { FC } from "react";
import { Params, Param } from "@site/src/components/Params";

export const PaginatedResponse: FC<{ type: string }> = ({ type, children }) => (
  <Params>
    <Param name="items" type={type}>
      {children}
    </Param>
    <Param name="has_more" type="boolean">
      Set to <code>true</code> when there are more items that can be requested.
    </Param>
    <Param name="cursor" type="string?">
      A cursor to provide for the starting_after parameter. Will be supplied whenver{" "}
      <code>has_more</code> is true.
    </Param>
  </Params>
);
