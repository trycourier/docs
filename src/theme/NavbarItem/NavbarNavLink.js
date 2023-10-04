import React from "react";
import NavbarNavLink from "@theme-original/NavbarItem/NavbarNavLink";
import { ServiceStatus } from "./ServiceStatus";

const SERVICE_STATUS_LABEL = "Service Status";

export default function NavbarNavLinkWrapper(props) {
  if (props.label === SERVICE_STATUS_LABEL) return <ServiceStatus />;
  return (
    <>
      <NavbarNavLink {...props} />
    </>
  );
}
