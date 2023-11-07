import Card from "./Card";
import cardsData from "../data.ts";

export default function CardCarousel() {
  const cards = cardsData.map((card) => {
    return <Card key={card.id} {...card} />;
  });

  return (
    <div className="cardcarousel">
      <div className="cardcarousel__container">{cards}</div>
    </div>
  );
}
