import React from "react";
import { ChatButton } from "@site/src/components/ChatButton";

import { ApiReferenceTokenProvider } from "@site/src/components/ApiReference/ApiReferenceToken";
const Root = ({ children }) => {
  return <ApiReferenceTokenProvider>
    <ChatButton />
    {children}
    </ApiReferenceTokenProvider>;
};

export default Root;
