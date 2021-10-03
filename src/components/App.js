import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Navbar from "./Navbar";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import Question from "./Question";
import Login from "./Login";
import QuestionDetail from "./QuestionDetail";
import NotFound from "./NotFound";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    //const {authUser} = this.props;
    return (
      <div>
        
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Home} />
            <Route path="/add" exact component={NewQuestion} />
            <Route path="/leaderboard" exact component={Leaderboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect()(App);



   
