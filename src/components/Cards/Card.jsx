import React from "react";
import { Card } from "antd";
import style from "./Cards.module.scss";
const { Meta } = Card;

const Pokemon = ({ fetchedCards, onOpen }) => {
  return (
    <div>
      <div className={style.Cards}>
        {fetchedCards.map((card) => (
          <div className={style.Card} key={card.id}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={card.imageUrl} />}
              bodyStyle={{ backgroundColor: "#261a28" }}
              onClick={() => onOpen({ card })}
            >
              <Meta
                style={{ color: "white" }}
                title={card.name}
                description={card.set}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
// r 46 g 34 b 48
export default Pokemon;
