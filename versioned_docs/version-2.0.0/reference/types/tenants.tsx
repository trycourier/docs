import React from "react";
import { Params, Param, ChildParams } from "@site/src/components/Params";
import { SubscriptionTopic } from "./preferences";
import { Profile } from "./profile";

/** Defines the server response when the full account object is returned (get, put etc) */
export const AccountResponse = () => (
  <Params>
    <Param name="id" type="string">
      Id of the tenant.
    </Param>
    <Param name="name" type="string">
      Name of the tenant.
    </Param>
    <Param name="parent_tenant_id" type="string?">
      Tenant's parent id (if any).
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

export const TenantRequest = () => (
  <Params>
    <Param name="name" type="string" required>
      Name of the tenant.
    </Param>
    <Param name="parent_tenant_id" type="string">
      Tenant's parent id (if any).
    </Param>
    <Param name="default_preferences" type="object">
      Defines the preferences used for the tenant when the user hasn't specified their own.
      <ChildParams name="fields">
        <Param name="items" type="array<SubscriptionTopic>">
          A list of subscription topic preferences
          <ChildParams name="subscription topic type">
            <SubscriptionTopic />
          </ChildParams>
        </Param>
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

export const UserTenantAssociation = () => (
  <Params>
    <Param name="tenant_id" type="string" required>
      Tenant ID the user association is tied to.
    </Param>
    <Param name="profile" type="Profile" required>
      Tenant ID the user association is tied to.
      <ChildParams name="profile type">
        <Profile />
      </ChildParams>
    </Param>
  </Params>
);
