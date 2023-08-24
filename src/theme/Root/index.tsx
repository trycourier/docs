import React from "react";

import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";
import { ApiReferenceTokenProvider as ApiReferenceUpdateTokenProvider } from "@site/src/components/ApiReferenceUpdate/ApiReferenceToken";

const Root = ({ children }) => {
  return (
    <ApiReferenceTokenProvider>
      <ApiReferenceUpdateTokenProvider>{children}</ApiReferenceUpdateTokenProvider>
    </ApiReferenceTokenProvider>
  );
};

export default Root;
