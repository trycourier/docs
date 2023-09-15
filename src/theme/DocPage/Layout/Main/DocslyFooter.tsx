import React from "react";
import styles from "./docslyFooter.module.css";
import clsx from "clsx";
import Docsly from "@docsly/react";
import "@docsly/react/styles.css";
import { useLocation } from "@docusaurus/router";

const DocslyFooter = () => {
  const { pathname } = useLocation();
  return (
    <div className={clsx(styles.container)}>
      <div className={styles.helpfulTextContainer}>
        <span>Was this helpful?</span>
        <Docsly
          publicId={process.env.DOCSLY_PUBLIC_ID}
          pathname={pathname}
          appearance={{
            docslyToolboxStyles: styles.docslyToolboxStyles,
          }}
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default DocslyFooter;
