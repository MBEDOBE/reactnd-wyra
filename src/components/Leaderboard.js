import React, { Component } from "react";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

class Leaderboard extends Component {
  render() {
    return (
      <TableContainer
        component={Paper}
        style={{ width: "700px", margin: "0 auto", marginTop: "20px" }}
      >
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#ccc" }}>
              <TableCell>Leader</TableCell>
              <TableCell align="center">Questions</TableCell>
              <TableCell align="center">Answers</TableCell>
              <TableCell align="center">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                a
              </TableCell>
              <TableCell align="center">a</TableCell>
              <TableCell align="center">b</TableCell>
              <TableCell align="center">c</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
export default Leaderboard;
