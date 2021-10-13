import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div>
        <h3
          style={{ marginTop: "20px", textAlign: "center", color: "#c48f00" }}
        >
          404 Page not found
        </h3>
        <button>
          <Link to="/dashboard">Back Home</Link>
        </button>
      </div>
    );
  }
}
export default NotFound;
