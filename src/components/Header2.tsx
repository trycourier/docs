import React from "react";

function convertToKebabCase(inputString: string): string {
  return inputString.replace(/ /g, "-").toLowerCase();
}

const Header2 = ({ children }: { children: string }) => {
  const id = convertToKebabCase(children);
  return (
    <h2 className="anchor anchor-anchorWithHideOnScrollNavbar" id={id}>
      {children}
      <a className="hash-link" aria-label={children} title={children} href={`#${id}`}>
        &#8203;
      </a>
    </h2>
  );
};

export default Header2;
