import React from "react";
import { platformCardData } from "../data/intro";
import { Card } from "@site/src/components/Card";

const PlatformCards = () => {
  return (
    <div className="card-list small">
      {platformCardData.map((card) => (
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

export default PlatformCards;
