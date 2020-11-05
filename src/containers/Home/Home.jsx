import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import style from "./Home.module.scss";
import Header from "../../components/Header/Header.jsx";
import Cards from "../../components/Cards/Card.jsx";
import Search from "../../components/SearchBox/SearchBox.jsx";

const Home = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const hist = useHistory();
  const [pokeData, setPokeData] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem("search"));

  useEffect(() => {
    getPokemon(search !== null ? search : "");
    localStorage.setItem("search", search);
  }, [search]);

  const getPokemon = async (value) => {
    const data = await fetch(
      `https://api.pokemontcg.io/v1/cards?name=${value}`
    );
    const cards = await data.json();

    setPokeData(cards.cards);
    setSearch(value);
  };

  const handleOpen = (card) => {
    hist.push({
      pathname: "/Pokemon",
      state: { card },
    });
  };
  return (
    <div>
      <Header />
      <Search onLookUp={getPokemon} search={search} />

      {pokeData.length < 1 ? (
        <div className={style.Spin}>
          <Spin indicator={antIcon} size="large" />
        </div>
      ) : (
        <Cards fetchedCards={pokeData} onOpen={handleOpen} />
      )}
    </div>
  );
};

export default Home;
