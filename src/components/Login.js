import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Card, Typography, Button } from "@mui/material";
import logo from "../assets/logo.jpg";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Login() {
  return (
    <Card className="login-box">
      <Typography className="header">
        Welcome to the Would You Rather App!
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2.2, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <img className="logo" src={logo} alt="logo" />
        <div className="input">
          <TextField
            id="outlined-select-account"
            select
            label="Select an account to login"
            value={"currency"}
            onChange={"handleChange"}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Box>
      <Button
        variant="outlined"
        size="medium"
        style={{ width: "360px", marginLeft: "17px", marginTop: "10px" }}
      >
        Login
      </Button>
      <Typography className="footer">
        Logo image from Pixabay - www.pixabay.com
      </Typography>
    </Card>
  );
}
