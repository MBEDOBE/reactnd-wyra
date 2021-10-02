import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../utils/helpers";
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
    const {question, author, authorAvatar} = this.props;
    if(question === null){
      return <p>404</p>
    }

    console.log(this.props)
    //const {text, name, authorAvatar} = question;
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
          variant="h5"
          style={{ padding: "6px", background: "#ccc", color: "#fefefe" }}
        >
          <span>{author.name}</span>
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
              {question.optionOne.text}...
            </Typography>
            <Button
              //to={`/questions/${id}`}
              variant="outlined"
              size="medium"
              style={{ float: "right", marginRight: "10px" }}
            >
              View
            </Button>
          </CardContent>
        </Box>
      </Card>
    );
  }
}

function mapStateToProps({ authUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  return {

    authUser,
    question,
    author,
    optionPreview: question['optionOne']['text'],
    authorAvatar: users[question['author']]['avatarURL']
  };
}
export default connect(mapStateToProps)(Question);
