import React from "react";
import NavbarNavLink from "@theme-original/NavbarItem/NavbarNavLink";

const SERVICE_STATUS_LABEL = "Service Status";
const SDK = "SDK Libraries";


export default function NavbarNavLinkWrapper(props) {
  // removing the status and sdk tabs
  if (props.label === SERVICE_STATUS_LABEL) return null;
  if (props.label === SDK) return null;
  return (
    <>
      <NavbarNavLink {...props} />
    </>
  );
}
