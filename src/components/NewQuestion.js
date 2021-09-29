import React, { Component } from "react";
import { Card, Box, TextField, Typography, Button } from "@mui/material";
class NewQuestion extends Component {
  render() {
    return (
      <Card
        style={{
          height: "370px",
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
          Create New Poll
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" style={{ marginBottom: "0" }}>
            Would you rather...
          </Typography>
          <TextField
            id="outlined-basic"
            label="Option one"
            variant="outlined"
          />
          <span
            style={{
              textAlign: "center",
              margin: "0 auto",
              border: "1px solid #ccc",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              padding: "5px",
              color: "#ccc",
            }}
          >
            Or
          </span>
          <TextField
            id="outlined-basic"
            label="Option two"
            variant="outlined"
          />
          <Button variant="outlined" size="medium" style={{ width: "360px" }}>
            Submit
          </Button>
        </Box>
      </Card>
    );
  }
}
export default NewQuestion;
