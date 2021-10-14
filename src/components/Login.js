import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Card, Typography, Button } from "@mui/material";
import logo from "../assets/logo.jpg";
import { setAuthUser } from "../actions/authedUser";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    uid: null,
    loggedIn: false,
  };
  handleUserChange = (e) => {
    this.setState({ uid: e.target.value });
  };

  handleSubmit = (e) => {
    //handle login if user is selected
    const { uid } = this.state;
    const { dispatch, history } = this.props;

    dispatch(setAuthUser(uid));
    this.setState({ loggedIn: true });
    this.redirectMethod(history);
  };
  redirectMethod(history) {
    if (window.location.pathname === "/") {
      history.push("/dashboard");
    } else {
      history.push(
        this.props.location.state === undefined
          ? "/"
          : this.props.location.state.redirect
      );
    }
  }

  render() {
    const { users } = this.props;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    //redirect to dashboard after login
    if (this.state.redirect === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <Card className="login-box">
          <Typography className="header">
            Welcome to the Would You Rather App!
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2.2, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <img className="logo" src={logo} alt="logo" />
            <div className="input">
              <TextField
                select
                label="Select an account to login"
                value={this.state.uid}
                onChange={this.handleUserChange}
              >
                {Object.keys(users).map((key) => (
                  <MenuItem key={key} value={users[key].id}>
                    {users[key].name}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
          <Button
            disabled={this.state.uid === null}
            variant="outlined"
            type="submit"
            size="medium"
            onClick={(e) => this.handleSubmit(e)}
            style={{ width: "360px", marginLeft: "17px", marginTop: "10px" }}
          >
            Login
          </Button>
          <Typography className="footer">
            Logo image from Pixabay - www.pixabay.com
          </Typography>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default withRouter(connect(mapStateToProps)(Login));
