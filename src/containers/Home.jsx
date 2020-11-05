import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Cards from "../components/Cards/Card.jsx";
import Search from "../components/SearchBox/SearchBox.jsx";

const Home = () => {
  const hist = useHistory();
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(localStorage.getItem("search"));
  const apiUrl = "https://api.pokemontcg.io/v1/cards";

  useEffect(() => {
    getPokemon(search === null ? "" : search);
    localStorage.setItem("search", search);
  }, [search]);

  const getPokemon = async (val) => {
    const data = await fetch(apiUrl);
    const cards = await data.json();

    setPokeData(cards.cards);
    setSearch(val);
    setLoading(false);
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
      <Search onLookUp={getPokemon} search={search} returnedCards={pokeData} />

      {loading ? (
        <h1 style={{ color: "white", fontSize: 20 }}>loading..</h1>
      ) : (
        <Cards fetchedCards={pokeData} onOpen={handleOpen} />
      )}
    </div>
  );
};

export default Home;
