import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {connect} from 'react-redux';
import Question from './Question'

 function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div>
      <div className="header">
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Unanswered" eventKey="unanswered" />
            <Tab disabled />
            <Tab label="Answered" eventKey="unanswered" />
          </Tabs>
        </Box>
      </div>
      <div className="tab-content">
        {/* want to display the list here based on tab clicked */}
        
      </div>
    </div>
  );
}

function mapStateToProps(){
  return{

  }
}
export default connect(mapStateToProps)(Home)