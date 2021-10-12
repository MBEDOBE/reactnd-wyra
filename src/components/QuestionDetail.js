import React, { Component, Fragment } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import Result from "../components/Result";
import { handleAnswer } from "../actions/questions";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import { questionPageData } from "../utils/helpers";

class QuestionDetail extends Component {
  state = {
    value: null,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authUser, id, handleAnswer } = this.props;
    const { value } = this.state;
    handleAnswer(authUser, id, value);
    this.setState((prevState) => ({
      ...prevState,
      showResult: true,
    }));
  };

  handleButtonClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { value, showResult } = this.state;

    const {
      authorName,
      id,
      location,
      validId,
      optionOne,
      optionTwo,
      authorAvatar,
    } = this.props;

    let btnDisabled = true;
    if (value !== null) {
      btnDisabled = false;
    }

    let showQuestionResponse = true;
    if (typeof location.state !== "undefined") {
      showQuestionResponse = location.state.showResponse;
    }

    return (
      <Fragment>
        {showQuestionResponse ? (
          <Result id={id} history={this.props.history} />
        ) : (
          <Fragment>
            {showResult ? (
              <Result id={id} history={this.props.history} />
            ) : (
              <Fragment>
                <Navbar history={this.props.history} />
                {validId ? (
                  <Fragment>
                    <Card className="detail-card">
                      <Typography
                        component="div"
                        variant="h6"
                        style={{
                          padding: "6px",
                          background: "#016779",
                          color: "#fefefe",
                        }}
                      >
                        {authorName} asks
                      </Typography>
                      <div className="avatar">
                        <CardMedia
                          style={{ borderRadius: "50%", height: "80px" }}
                          component="img"
                          sx={{ width: 80 }}
                          image={authorAvatar}
                          alt="avatar"
                        />
                      </div>

                      <FormControl
                        component="fieldset"
                        className="detail-right"
                      >
                        <FormLabel component="legend">
                          Would you rather...
                        </FormLabel>

                        <RadioGroup value={value} onChange={this.handleChange}>
                          <FormControlLabel
                            value={optionOne}
                            control={<Radio />}
                            label={optionOne}
                            checked={value === optionOne}
                          />
                          <FormControlLabel
                            value={optionTwo}
                            control={<Radio />}
                            label={optionTwo}
                            checked={value === optionTwo}
                          />
                        </RadioGroup>

                        <Button
                          onClick={this.handleSubmit}
                          variant="contained"
                          size="medium"
                          content="Submit"
                          disabled={btnDisabled}
                          style={{
                            float: "right",
                            marginRight: "10px",
                            backgroundColor: "#016779",
                            width: "280px",
                          }}
                        >
                          Submit
                        </Button>
                      </FormControl>
                    </Card>
                  </Fragment>
                ) : (
                  <NotFound />
                )}
              </Fragment>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps({ questions, authUser, users }, props) {
  const {
    id,
    authorName,
    optionOne,
    optionTwo,
    validId,
    question,
    authorAvatar,
  } = questionPageData(questions, users, props);

  return {
    authUser,
    authorName,
    id,
    question,
    optionOne,
    optionTwo,
    validId,
    authorAvatar,
  };
}
export default connect(mapStateToProps, { handleAnswer })(QuestionDetail);
