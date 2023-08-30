import React from "react";
import { Params, Param } from "@site/src/components/Params";

export const SubscriptionTopic = () => (
  <Params>
    <Param name="id" type="string" required>
      Topic ID
    </Param>
    <Param name="Status" type="string" required>
      Possible values are "OPTED_OUT", "OPTED_IN" or "REQUIRED"
    </Param>
  </Params>
);
