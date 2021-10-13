import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NotFound from "./NotFound";
import QuestionDetail from "./QuestionDetail";
import Login from "./Login";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";
import ProtectedRoute from "./ProtectedRoute";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    //const { loggedIn } = this.props;
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Login} />
            <ProtectedRoute path="/dashboard" exact component={Home} />
            <ProtectedRoute path="/questions/:id" component={QuestionDetail} />
            <ProtectedRoute path="/add" exact component={NewQuestion} />
            <ProtectedRoute path="/leaderboard" exact component={Leaderboard} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Fragment>
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
