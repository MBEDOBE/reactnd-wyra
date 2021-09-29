import React, { Component } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Navbar from "./Navbar";

export default function Home() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box sx={{ width: "800px", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              centered
              onChange={handleChange}
              style={{ textAlign: "center", fontSize: "1.2rem" }}
            >
              <Tab className="tabs" label="Unanswered" value="1" />
              <Tab className="tabs" label="Answered" value="2" />
            </TabList>
          </Box>
          <TabPanel
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
            value="1"
          >
            Unanswered
          </TabPanel>
          <TabPanel
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
            value="2"
          >
            Answered
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

//export default Home;
