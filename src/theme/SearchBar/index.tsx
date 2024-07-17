import React, { useContext, useCallback } from "react";
import SearchBar from "@theme-original/SearchBar";
import BrowserOnly from "@docusaurus/BrowserOnly";
import qs from "qs";

import { ApiReferenceTokenContext } from "@site/src/components/ApiReference/ApiReferenceToken";

const CustomSearchBar = () => {
  const { ssoToken, token, setToken } = useContext(ApiReferenceTokenContext);
  const loggedIn = ssoToken && ssoToken === token;

  const logOut = useCallback(
    (event) => {
      event.preventDefault();

      setToken("");
    },
    [setToken]
  );

  return (
    <>
      {/* <BrowserOnly>
        {() => (
          <a
            href={`https://app.courier.com/sso/documentation${qs.stringify(
              { docsDeepLink: encodeURI(window.location.pathname) },
              { addQueryPrefix: true }
            )}`}
            onClick={loggedIn ? logOut : undefined}
            target="_self"
            rel="noopener noreferrer"
            className="navbar__item navbar-login"
          >
            {loggedIn ? <span>Log Out</span> : <span>Login</span>}
          </a>
        )}
      </BrowserOnly> */}

      <SearchBar />
    </>
  );
};

export default CustomSearchBar;
