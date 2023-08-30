import React from "react";
import { Params, Param } from "@site/src/components/Params";

export const Context = () => (
  <Params>
    <Param name="tenant_id" type="string">
      An id of a tenant, <a href="/docs/reference/tenants">see tenants api docs</a>. Will load
      brand, default preferences and any other base context data associated with this tenant.
    </Param>
  </Params>
);
