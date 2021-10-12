import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Typography,
} from "@mui/material";

class Question extends Component {
  render() {
    const { questionPreview, authorName, authorAvatar, toAnswer, id } =
      this.props;

    const button = toAnswer
      ? this.questionsToAnswer(id)
      : this.questionsAnswered(id);

    return (
      <Card
        style={{
          height: "180px",
          width: "400px",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <Typography
          component="div"
          variant="h6"
          style={{ padding: "6px", background: "#016779", color: "#fefefe" }}
        >
          <span style={{ fontSize: "18px" }}>{authorName} asks:</span>
        </Typography>

        <Box sx={{ display: "flex" }} style={{ marginTop: "15px" }}>
          <CardMedia
            style={{ borderRadius: "50%", height: "80px", marginLeft: "20px" }}
            component="img"
            sx={{ width: 80 }}
            image={authorAvatar}
            alt="avatar"
          />
          <CardContent
            sx={{ flex: "1 0 auto" }}
            style={{ padding: "2px", marginLeft: "30px" }}
          >
            <Typography
              component="div"
              variant="h6"
              style={{ marginBottom: "5px" }}
            >
              Would you rather
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {questionPreview}...
            </Typography>
            {button}
          </CardContent>
        </Box>
      </Card>
    );
  }
  questionsToAnswer(id) {
    return (
      <Link
        to={{
          pathname: `/questions/${id}`,
          state: { showResponse: false },
        }}
      >
        <Button
          variant="outlined"
          size="medium"
          style={{ float: "right", marginRight: "10px" }}
        >
          Respond
        </Button>
      </Link>
    );
  }
  questionsAnswered(id) {
    return (
      <Link
        to={{
          pathname: `/questions/${id}`,
          state: { showResponse: true },
        }}
      >
        <Button
          variant="outlined"
          size="medium"
          style={{ float: "right", marginRight: "10px" }}
        >
          View
        </Button>
      </Link>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const { authorAvatar, authorName, question } = data();

  return {
    authorAvatar,
    authorName,
    questionPreview: question.optionOne.text,
  };
  function data() {
    const question = questions[id];
    const authorAvatar = users[question.author].avatarURL;
    const authorName = users[question.author].name;
    return { authorAvatar, authorName, question };
  }
}
export default connect(mapStateToProps)(Question);

/* const question = questions[id];
const author = question ? users[question.author] : null;
return {
  authUser,
  question,
  author,
  optionPreview: question["optionOne"]["text"],
  authorAvatar: users[question["author"]]["avatarURL"],
}; */
