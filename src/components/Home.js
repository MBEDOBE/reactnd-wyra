import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Question from "./Question";
import { connect } from "react-redux";
import { getUnanswered } from "../utils/helpers";
import {_getQuestions} from '../utils/_DATA'


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


  //const { questions, authUser } = this.props;
  
function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  //const [questions, authUser] = this.props;
   //const questionIds = this.props.unansweredIds ? this.props.answeredIds:[]
  
  return (
    
    <div>
      <Navbar />
      <Box sx={{ width: "50%" }} style={{ margin: "0 auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
          >
            <Tab label="Unanswered" {...a11yProps(0)} />
            <Tab label="Answered" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {Object.map((id) => (
            <li key={id}>
              <Question id={id} />
            </li>
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Answered
        </TabPanel>
      </Box>
    </div>
  );
}

function mapStateToProps({ questions, users, authUser }) {
  const user = users[authUser];
  const answeredIds = user ? Object.keys(user["answers"]) : [];
  const unansweredIds = user
    ? getUnanswered(Object.keys(questions), answeredIds)
    : [];
  return {
    loggedOut: authUser === null,
    answeredIds: (questions, answeredIds),
    unansweredIds: (questions, unansweredIds),
  };
}
export default connect(mapStateToProps)(Home);
