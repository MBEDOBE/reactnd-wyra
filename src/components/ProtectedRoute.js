import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={function (props) {
        return rest.authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

function mapStateToProps({ authUser }) {
  return {
    authUser,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
