import { Tabs, Tab } from "@mui/material";
import React, { Component } from "react";
import {  userQuestionData } from "../utils/helpers";
import Question from "./Question";
import { connect } from "react-redux";
import Navbar from "./Navbar";

class Home extends Component {
  state = {
    value: 0,
    toAnswer: true,
  };

  handleTabChange = (e, value) => {
    this.setState({ value });
  };

  unAnsweredHandler = () => {
    this.setState({
      toAnswer: true,
    });
  };

  answeredHandler = () => {
    this.setState({
      toAnswer: false,
    });
  };

  render() {
    const { toAnswer } = this.state;
    const { answeredId, unansweredId } = this.data();

    const unAnsweredQuestions = unansweredId.map((id) => (
      <Question key={id} id={id} toAnswer={toAnswer} />
    ));

    const answeredQuestions = answeredId.map((id) => (
      <Question id={id} key={id} toAnswer={toAnswer} />
    ));
    return (
      <div className="home">
        <Navbar history={this.props.history} />
        <div className="tabs">
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            centered
          >
            <Tab
              label="Unanswered"
              active={toAnswer}
              onClick={this.unAnsweredHandler}
            />
            <Tab
              label="Answered"
              active={!toAnswer}
              onClick={this.answeredHandler}
            />
          </Tabs>
        </div>
        <div className="questions">
          {toAnswer ? unAnsweredQuestions : answeredQuestions}
        </div>
      </div>
    );
  }

  data() {
    return this.props.separateQuestions;
  }
}

function mapStateToProps({ questions, users, authUser }) {
  const separateQuestions = userQuestionData(users, authUser, questions);

  return {
    authUser,
    questions,
    separateQuestions,
  };
}
export default connect(mapStateToProps)(Home);
