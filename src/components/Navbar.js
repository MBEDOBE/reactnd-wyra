import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";
import { setAuthUser } from "../actions/authedUser";

class Navbar extends Component {
  logoutUser = () => {
    this.props.dispatch(setAuthUser(null));
  };
  render() {
    const { user, authUser } = this.props;
    const uavatar = user ? user.avatarURL : "a";
    const uname = user ? user.name : "";
    //redirect
    if (!authUser) return <Link to="/" />;

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
          <span style={{ color: "#fff" }}>{uname}</span>
          <img className="avatar" src={uavatar} alt="a" />
          <NavLink
            className="logout"
            to="/"
            exact
            activeClassName="active"
            onClick={this.logoutUser}
          >
            Logout
          </NavLink>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ authUser, users }, props) {
  return {
    authUser,
    users,
    user: users[authUser],
  };
}
export default connect(mapStateToProps)(Navbar);
