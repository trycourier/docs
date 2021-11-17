import React from "react";

import imageStyles from "@site/src/theme/IdealImage/styles.module.css";

interface GifWrapperProps {
  width: number;
  height: number;
  children: React.ReactNode;
  caption?: string;
}

const GifWrapper = ({ width, height, caption, children }: GifWrapperProps) => (
  <figure className={imageStyles.image}>
    <div style={{ maxWidth: width, position: "relative" }}>
      <div style={{ paddingTop: `${(height / width) * 100}%` }} />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>

    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default GifWrapper;
