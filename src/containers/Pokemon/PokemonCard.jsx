import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import styles from "./PokemonCard.module.scss";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";

const Pokemon = ({ location }) => {
  const [card, setCard] = useState(
    JSON.parse(localStorage.getItem("card")) || []
  );
  const status = location?.state?.card?.card || {};
  useEffect(() => {
    if (status) {
      localStorage.setItem("card", JSON.stringify(card));
      setCard(status);
    } else {
      setCard(JSON.parse(localStorage.getItem("card")));
    }
  }, [status, card]);

  return (
    <>
      <Header />
      <div className={styles.backButton}>
        <Link to="/">
          <Button className={styles.Button}>Back to Home Page</Button>
        </Link>
      </div>
      <div className={styles.Container}>
        <img
          className={styles.cardImg}
          src={card.imageUrlHiRes}
          alt="example"
        />
        <Card
          className={styles.card}
          headStyle={{ backgroundColor: "#422e45", padding: 10 }}
          bodyStyle={{ backgroundColor: "#523957", padding: 10 }}
          title={
            <label style={{ color: "white", fontWeight: "bold" }}>
              {card.name}
            </label>
          }
          bordered={false}
        >
          <div>
            {card.nationalPokedexNumber && (
              <>
                <b style={{ color: "white" }}> Pokedex Number: </b>
                <label style={{ color: "white" }}>
                  {card.nationalPokedexNumber}
                </label>
                <br />
              </>
            )}
            {card.types && (
              <>
                <b style={{ color: "white" }}> Type: </b>
                <label style={{ color: "white" }}>{card.types}</label>
                <br />
              </>
            )}
            {card.evolvesFrom && (
              <>
                <b style={{ color: "white" }}> Evolves from: </b>
                <label style={{ color: "white" }}>{card.evolvesFrom}</label>
                <br />
              </>
            )}
            <b style={{ color: "white" }}> Series: </b>
            <label style={{ color: "white" }}>{card.series}</label>
            <br />
            <b style={{ color: "white" }}> Subtype: </b>
            <label style={{ color: "white" }}>{card.subtype}</label>
            <br />
            <b style={{ color: "white" }}> Set: </b>
            <label style={{ color: "white" }}>{card.set}</label>
            <br />
            <b style={{ color: "white" }}> Rarity: </b>
            <label style={{ color: "white" }}>{card.rarity}</label>
            <br />
            {card.artist && (
              <>
                <b style={{ color: "white" }}> Artist: </b>
                <label style={{ color: "white" }}>{card.artist}</label>
                <br />
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Pokemon;
