import React from "react";
// import OriginalIdealImage from "@theme-original/IdealImage";

import styles from "./styles.module.css";

function IdealImage({ img, alt, ...props }) {
  return (
    <figure className={styles.image}>
      <img src={img?.default ?? img} alt={alt} {...props} />

      {alt && <figcaption>{alt}</figcaption>}
    </figure>
  );
}

export default IdealImage;
