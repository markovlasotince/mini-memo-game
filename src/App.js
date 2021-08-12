import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import GamePlay from "./pages/GamePlay";
import Scoreboard from "./pages/Scoreboard";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/play" component={GamePlay} />
      <Route exact path="/score" component={Scoreboard} />

      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
