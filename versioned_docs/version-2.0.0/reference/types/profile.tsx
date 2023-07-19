import React from "react";
import { Params, Param, ExtendParams } from "@site/src/components/Params";

/** Does not include user_id */
export const Profile = () => (
  <Params>
    <Param name="email" type="string">
      Email Address
    </Param>
    <Param name="phone_number" type="string">
      A valid phone number
    </Param>
    <Param name="additional fields" type="[key: string]: any">
      Arbitrary fields beyond the above definitions may also be supplied.
    </Param>
  </Params>
);

export const ToProfile = () => (
  <Params>
    <Param name="user_id" type="string">
      Id of a user stored with Courier.
    </Param>
    <ExtendParams>
      <Profile />
    </ExtendParams>
  </Params>
);
