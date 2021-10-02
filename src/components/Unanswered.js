import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import { sortByTime, getUnanswered } from "../utils/helpers";

class UnansweredQuestions extends Component {
  state = {
    value: 0,
  };
  render() {
    const questionIds =
      this.state.value === 0
        ? this.props.unansweredIds
        : this.props.answeredIds;
    console.log(this.props);
    return (
      <div>
        <ul>
          {questionIds.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }) {
  const user = users[authUser];
  const answeredIds = user ? Object.keys(user["answers"]) : [];
  const unansweredIds = user
    ? getUnanswered(Object.keys(questions), answeredIds)
    : [];
  return {
    answeredIds: sortByTime(questions, answeredIds),
    unansweredIds: sortByTime(questions, unansweredIds),
  };
}
export default connect(mapStateToProps)(UnansweredQuestions);
