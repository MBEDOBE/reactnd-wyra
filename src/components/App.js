import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NotFound from "./NotFound";
import QuestionDetail from "./QuestionDetail";
import Login from "./Login";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import Leaderboard from "./Leaderboard";

//function to redirect to requested url after login
function ProtectedRoute({ component: Component, authUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: props.location,
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/" exact component={Login} />
            <ProtectedRoute
              path="/dashboard"
              exact
              component={Home}
              authUser={this.props.authUser}
            />
            <ProtectedRoute
              path="/questions/:id"
              component={QuestionDetail}
              authUser={this.props.authUser}
            />
            <ProtectedRoute
              path="/add"
              exact
              component={NewQuestion}
              authUser={this.props.authUser}
            />
            <ProtectedRoute
              path="/leaderboard"
              exact
              component={Leaderboard}
              authUser={this.props.authUser}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {
    authUser,
  };
};

export default connect(mapStateToProps)(App);
