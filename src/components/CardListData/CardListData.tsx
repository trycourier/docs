import React from "react";
import { Card } from "@site/src/components/Card";
import { CardType } from "../Card/Card";
import CardList from "../CardList/CardList";

type PropType = {
  size?: "small" | "medium";
  cardData: CardType[];
};
const CardListData = ({ size = "medium", cardData }: PropType) => {
  return (
    <CardList size={size}>
      {cardData.map((card) => (
        <Card key={card.title} title={card.title} href={card.href} linkText={card.linkText}>
          {card.description}
        </Card>
      ))}
    </CardList>
  );
};

export default CardListData;
