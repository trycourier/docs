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
      {title && <span className={clsx(styles.title)}>{title}</span>}
      {description && <p className={clsx(styles.description)}>{description}</p>}
      {children && <span className={clsx(styles.description)}>{children}</span>}
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
