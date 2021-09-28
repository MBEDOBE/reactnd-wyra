import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="left">
          <div className="links">
            <li>
              <NavLink to="/dashboard">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add">New Question</NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </li>
          </div>
        </div>
        <div className="right">
          <span>
            <img className="avatar" src="#" alt="a" />
            Kojo
          </span>
          <button>Logout</button>
        </div>
      </div>
    );
  }
}
export default Navbar;
