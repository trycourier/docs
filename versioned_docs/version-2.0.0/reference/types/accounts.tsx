import React from "react";
import { Params, Param, ChildParams } from "@site/src/components/Params";
import { SubscriptionTopic } from "./preferences";

/** Defines the server response when the full account object is returned (get, put etc) */
export const AccountResponse = () => (
  <Params>
    <Param name="id" type="string">
      Id of the account.
    </Param>
    <Param name="name" type="string">
      Name of the account.
    </Param>
    <Param name="parent_account_id" type="string?">
      Account's parent id (if any).
    </Param>
    <Param name="default_preferences" type="object?">
      Defines the preferences used for the account when the user hasn't specified their own.
    </Param>
    <Param name="properties" type="object?">
      Arbitrary properties accessible to a template.
    </Param>
    <Param name="user_profile" type="object?">
      A user profile object merged with user profile on send.
    </Param>
    <Param name="brand_id" type="string">
      Brand to be used for the account when one is not specified by the send call.
    </Param>
  </Params>
);

export const AccountRequest = () => (
  <Params>
    <Param name="name" type="string" required>
      Name of the account.
    </Param>
    <Param name="parent_account_id" type="string">
      Account's parent id (if any).
    </Param>
    <Param name="default_preferences" type="object">
      Defines the preferences used for the account when the user hasn't specified their own.
      <ChildParams>
        <SubscriptionTopic />
      </ChildParams>
    </Param>
    <Param name="properties" type="object">
      Arbitrary properties accessible to a template.
    </Param>
    <Param name="user_profile" type="object">
      A user profile object merged with user profile on send.
    </Param>
    <Param name="brand_id" type="string">
      Brand to be used for the account when one is not specified by the send call.
    </Param>
  </Params>
);
