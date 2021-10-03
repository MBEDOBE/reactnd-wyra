import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Question from "./Question";
import { connect } from "react-redux";
import { userQuestionData } from "../utils/helpers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
//state for answered and unanswered questions
const tab0 = () => {
  this.setState({
    unanswered: true,
  });
};

const tab1 = () => {
  this.setState({
    unanswered: false,
  });
};
//const { questions, authUser } = this.props;

function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { notAnswered } = this.state;
  const { answeredIds, unansweredIds } = this.props.questionsSplit;

  const unAnsweredQuestions = unansweredIds.map((id) => (
    <Question key={id} id={id} notAnswered={notAnswered} />
  ));
  const answeredQuestions = answeredIds.map((id) => (
    <Question key={id} id={id} notAnswered={notAnswered} />
  ));

  //const [questions, authUser] = this.props;
  //const questionIds = this.props.unansweredIds ? this.props.answeredIds:[]

  return (
    <div>
      <Navbar />
      <Box sx={{ width: "50%" }} style={{ margin: "0 auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Unanswered"
              {...a11yProps(0)}
              onClick={this.tab0}
              active={notAnswered}
            />
            <Tab
              label="Answered"
              {...a11yProps(1)}
              onClick={this.tab1}
              active={!notAnswered}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {notAnswered ? unAnsweredQuestions : answeredQuestions}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {!notAnswered ? answeredQuestions : unAnsweredQuestions}
        </TabPanel>
      </Box>
    </div>
  );
}

function mapStateToProps({ questions, users, authUser }) {
  const questionsSplit = userQuestionData(users, authUser, questions);

  return {
    loggedOut: authUser === null,
    authUser,
    questions,
    questionsSplit,
  };
}
export default connect(mapStateToProps)(Home);
