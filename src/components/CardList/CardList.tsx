import React from "react";
import clsx from "clsx";
import { Card } from "@site/src/components/Card";
import styles from "./cardList.module.css";
import { CardType } from "../Card/Card";

type PropType = {
  size?: "small" | "medium";
  cardData: CardType[];
};
const CardList = ({ size = "medium", cardData }: PropType) => {
  return (
    <div
      className={clsx(
        styles.cardList,
        size === "medium" && styles.medium,
        size === "small" && styles.small
      )}
    >
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          href={card.href}
          description={card.description}
          linkText={card.linkText}
        />
      ))}
    </div>
  );
};

export default CardList;
