import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Navbar from "./Navbar";
import QuestionDetail from "./QuestionDetail";
import Login from "./Login";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        {!loggedIn ? (
          <Route path="/" exact component={Login} />
        ) : (
          <Switch>
            <Route path="/dashboard" exact component={Home} />
            <Route path="/questions/:id" component={QuestionDetail} />
            <Route path="/add" exact component={NewQuestion} />
            <Route path="/leaderboard" exact component={Leaderboard} />
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    loggedIn: authUser !== null,
  };
};

export default connect(mapStateToProps)(App);
