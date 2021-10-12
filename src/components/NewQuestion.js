import React, { Component } from "react";
import { Card, Box, TextField, Typography, Button } from "@mui/material";
import Navbar from "./Navbar";
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from "react-router";
import { connect } from "react-redux";
class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    onSubmit: false,
  };

  handleInputChange = (name) => (e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  submitQuestion = (e) => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, authUser } = this.props;

    e.preventDefault();
    this.setState(
      {
        optionOneText: "",
        optionTwoText: "",
        onSubmit: true,
      },
      () => dispatch(handleSaveQuestion(optionOneText, optionTwoText, authUser))
    );
  };

  render() {
    const { optionOneText, optionTwoText, onSubmit } = this.state;

    if (onSubmit === true) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div>
        <Navbar history={this.props.history} />
        <Card
          style={{
            height: "370px",
            width: "400px",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            style={{ padding: "6px", background: "#016779", color: "#fefefe" }}
          >
            Create New Poll
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h6" style={{ marginBottom: "0" }}>
              Would you rather...
            </Typography>
            <TextField
              id="outlined-basic"
              label="Option One here..."
              variant="outlined"
              value={optionOneText}
              onChange={this.handleInputChange("optionOneText")}
            />
            <span
              style={{
                textAlign: "center",
                margin: "0 auto",
                border: "1px solid #ccc",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                padding: "5px",
                color: "#016779",
              }}
            >
              Or
            </span>
            <TextField
              id="outlined-basic"
              label="Option Two here..."
              variant="outlined"
              value={optionTwoText}
              onChange={this.handleInputChange("optionTwoText")}
            />
            <Button
              variant="outlined"
              size="medium"
              style={{ width: "360px" }}
              onClick={this.submitQuestion}
              disabled={optionOneText === "" || optionTwoText === ""}
            >
              Submit
            </Button>
            console.log(submitQuestion)
          </Box>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ authUser, loadingBar }) {
  return {
    authUser,
    loadingBar,
  };
}

export default connect(mapStateToProps)(NewQuestion);
