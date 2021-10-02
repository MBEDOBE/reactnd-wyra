import React, { Component, useState } from "react";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import UnansweredQuestions from "./Unanswered";
import AnsweredQuestions from "./Answered";
import Question from "./Question";

class Home extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: 0,
      };
  }

   handleTabChange = (e, newValue) => {
     this.setState(newValue);
   };
  render() {
    const { selectedTab, setSelectedTab } = this.state;
    
    const { questions, authUser } = this.props;
    const questionIds =
      this.state.value === 0
        ? this.props.unansweredIds
        : this.props.answeredIds;
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box sx={{ width: "800px", typography: "body1" }}>
            <TabContext value={selectedTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  centered
                  onChange={this.handleTabChange}
                  style={{ textAlign: "center", fontSize: "1.2rem" }}
                >
                  <Tab className="tabs" label="Unanswered"  />
                  <Tab className="tabs" label="Answered"  />
                </TabList>
              </Box>

              <TabPanel
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
                
              >
                <ul>
                  {this.props.questionIds.map((id) => (
                    <li
                      key={id}
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <Question id={id} />
                    </li>
                  ))}
                </ul>
              </TabPanel>

              <TabPanel
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
                
              >
                Answered
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Home);
