import React, { Component } from "react";
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
          Dan asks
        </Typography>

        <Box sx={{ display: "flex" }} style={{ marginTop: "15px" }}>
          <CardMedia
            style={{ borderRadius: "50%", height: "80px", marginLeft: "20px" }}
            component="img"
            sx={{ width: 80 }}
            image="https://tylermcginnis.com/would-you-rather/sarah.jpg"
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
              Mac Miller went to school
            </Typography>
            <Button
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
export default Question;
