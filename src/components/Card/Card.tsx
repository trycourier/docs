import React from "react";
import clsx from "clsx";
import styles from "./card.module.css";
import Link from "@docusaurus/Link";

export type CardType = {
  href?: string;
  title?: string;
  description?: string;
  linkText?: string;
  children?: React.ReactNode;
};

type PropType = CardType;

const CardContentWrapper = ({
  href,
  children,
}: Partial<Pick<PropType, "href">> & { children: React.ReactNode }) => {
  if (href)
    return (
      <Link to={href} className={clsx(styles.container)}>
        <>{children}</>
      </Link>
    );

  return <div className={clsx(styles.container)}>{children}</div>;
};

const Card = ({ href, title, description, linkText, children }: PropType) => {
  return (
    <CardContentWrapper href={href}>
      {title && <h5 className={clsx(styles.title)}>{title}</h5>}
      {description && <p className={clsx(styles.description)}>{description}</p>}
      {children && <p className={clsx(styles.description)}>{children}</p>}
      {linkText && (
        <div className={clsx(styles.linkTextContainer)}>
          <div>
            <span>{linkText}</span>
            <span className={clsx(styles.rightArrow)}>→</span>
          </div>
        </div>
      )}
    </CardContentWrapper>
  );
};

export default Card;
