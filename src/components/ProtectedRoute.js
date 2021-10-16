import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

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

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
