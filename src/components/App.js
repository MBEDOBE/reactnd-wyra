import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import Login from "./Login";
import QuestionDetail from "./QuestionDetail";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/dashboard" exact component={Home} />
          <Route path="/add" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={Leaderboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
