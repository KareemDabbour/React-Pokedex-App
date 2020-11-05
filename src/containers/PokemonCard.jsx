import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
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
      <div>
        <Link to="/">
          <Button>Back to Home Page</Button>
        </Link>
      </div>
      <div className="container">
        <img src={card.imageUrlHiRes} alt="example" />
        <Card title={card.name} bordered={false}>
          <div>
            {card.nationalPokedexNumber && (
              <>
                <label style={{ color: "white" }}> Pokedex Number: </label>
                {card.nationalPokedexNumber} <br style={{ color: "white" }} />
              </>
            )}
            {card.types && (
              <>
                <label style={{ color: "white" }}> Type: </label>
                {card.types} <br />
              </>
            )}
          </div>
        </Card>
      </div>
    </>
  );
};

export default Pokemon;
