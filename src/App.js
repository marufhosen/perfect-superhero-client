import "./App.css";
import CreateHero from "./components/CreateHero/CreateHero";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComparisonWithHero from "./components/ComparisonWithHero/ComparisonWithHero";
import { createContext, useState } from "react";

export const superHeroContext = createContext();

function App() {
  const [checkSupHeroChar, setCheckSupHeroChar] = useState({});
  return (
    <superHeroContext.Provider value={[checkSupHeroChar, setCheckSupHeroChar]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/createSuperHero">
            <CreateHero></CreateHero>
          </Route>
          <Route path="/interview">
            <ComparisonWithHero></ComparisonWithHero>
          </Route>
          <Route exact path="/">
            <CreateHero></CreateHero>
          </Route>
        </Switch>
      </Router>
    </superHeroContext.Provider>
  );
}

export default App;
