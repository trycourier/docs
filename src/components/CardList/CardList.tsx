import React from "react";
import clsx from "clsx";
import styles from "./cardList.module.css";

type PropType = {
  size?: "small" | "medium";
  children?: React.ReactNode;
};
const CardList = ({ size = "medium", children }: PropType) => {
  return (
    <div
      className={clsx(
        styles.cardList,
        size === "medium" && styles.medium,
        size === "small" && styles.small
      )}
    >
      {children}
    </div>
  );
};

export default CardList;
