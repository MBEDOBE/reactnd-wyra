import React, { Component, Fragment } from "react";
import { Circle } from "rc-progress";
import { Button, Card, Typography, CardMedia } from "@mui/material";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { responsePageData } from "../utils/helpers";
import NotFound from "./NotFound";

class Result extends Component {
  btnBackClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const {
      authorAvatar,
      authorName,
      optionOne,
      optionTwo,
      userAnswer,
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      loggedInUser,
      validId,
    } = this.props;

    return (
      <div>
        <Navbar />
        {validId ? (
          <Fragment>
            <Card
              style={{
                width: "900px",
                height: "300px",
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="avatar" style={{ marginTop: "60px" }}>
                  <CardMedia
                    style={{
                      borderRadius: "50%",
                      height: "80px",
                    }}
                    component="img"
                    sx={{ width: 80 }}
                    image={authorAvatar}
                    alt="avatar"
                  />
                  <span>{authorName}</span>
                </div>
                <div className="result-page">
                  <Typography>1. {optionOne}</Typography>

                  <Circle
                    percent={calcOptionOneRes()}
                    strokeColor="#00897B"
                    className="percentage"
                    strokeWidth="6"
                    strokeLinecap="round"
                    style={{ width: "50%" }}
                  />
                  <span>{calcOptionOneRes()}%</span>
                  <h5>{`${optionOneVotes} out of ${totalVotes}`}</h5>
                  <img alt="badge" src={"check"} className="badge" />
                </div>
                <div className="result-page">
                  <Typography>2. {optionTwo}</Typography>

                  <Circle
                    percent={calcOptionTwoRes()}
                    strokeColor="#00897B"
                    className="percentage"
                    strokeWidth="6"
                    strokeLinecap="round"
                    style={{ width: "50%" }}
                  />
                  <span>{calcOptionTwoRes()}%</span>
                  <h5>{`${optionTwoVotes} out of ${totalVotes}`}</h5>
                  <img alt="badge" src={"check"} className="badge" />
                </div>
              </div>
            </Card>
            <Button
              variant="contained"
              style={{ marginLeft: "233px", marginTop: "10px" }}
              onClick={this.btnBackClick}
            >
              Back
            </Button>
            <div
              style={{ backgroundColor: `lavenderblush`, padding: `10px` }}
            >{`${loggedInUser} selection`}</div>
          </Fragment>
        ) : (
          <NotFound />
        )}
      </div>
    );
    function calcOptionOneRes() {
      return Math.round((optionOneVotes / totalVotes) * 100);
    }
    function calcOptionTwoRes() {
      return Math.round((optionTwoVotes / totalVotes) * 100);
    }
  }
}
function mapStateToProps({ users, questions, authUser }, { id }) {
  const {
    authorName,
    authorAvatar,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    loggedInUser,
    validId,
  } = responsePageData(users, questions, authUser, id);

  return {
    authorName,
    authorAvatar,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    loggedInUser,
    validId,
  };
}
export default connect(mapStateToProps)(Result);
