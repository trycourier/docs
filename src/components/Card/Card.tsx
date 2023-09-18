import React from "react";
import clsx from "clsx";
import styles from "./card.module.css";
import Link from "@docusaurus/Link";

type PropType = {
  href: string;
  title: string;
  description: string;
  linkText?: string;
};

const Card = ({ href, title, description, linkText }: PropType) => {
  return (
    <Link to={href} className={clsx(styles.container)}>
      <h5 className={clsx(styles.title)}>{title}</h5>
      <p className={clsx(styles.description)}>{description}</p>
      {linkText && (
        <div className={clsx(styles.linkTextContainer)}>
          <div>
            <span>{linkText}</span>
            <span className={clsx(styles.rightArrow)}>→</span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Card;
