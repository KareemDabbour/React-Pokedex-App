import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./containers/Home/Home.jsx";
import PokemonCard from "./containers/Pokemon/PokemonCard.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Pokemon" component={PokemonCard} />
      </Switch>
    </Router>
  );
}

export default App;
