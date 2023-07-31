import React, { FC } from "react";
import { Params, Param } from "@site/src/components/Params";

export const PaginatedResponse: FC<{ type: string }> = ({ type, children }) => (
  <Params>
    <Param name="items" type={type}>
      {children}
    </Param>
    <Param name="has_more" type="boolean">
      Set to true when there are more pages that can be retrieved.
    </Param>
    <Param name="url" type="string">
      A url that may be used to generate these results.
    </Param>
    <Param name="next_url" type="string?">
      A url that may be used to generate fetch the next set of results. Defined only when
      <code>has_more</code> is set to true
    </Param>
    <Param name="cursor" type="string?">
      A pointer to the next page of results. Defined only when
      <code>has_more</code> is set to true
    </Param>
    <Param name="type" type="'list">
      Always set to <code>"list"</code>. Represents the type of this object.
    </Param>
  </Params>
);

export const PaginatedRequestQueryParams = () => (
  <Params>
    <Param name="limit" type="number">
      The number of accounts to return (defaults to 20, maximum value of 100)
    </Param>
    <Param name="starting_after" type="string">
      Value of next_page from previous response
    </Param>
  </Params>
);
