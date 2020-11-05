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
              bodyStyle={{ backgroundColor: "#2e2230" }}
              onClick={() => onOpen({ card })}
            >
              <Meta
                style={{ color: "white" }}
                title={<b>{card.name}</b>}
                description={card.set}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
