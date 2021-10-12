import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import {
  TableContainer,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  CardMedia,
} from "@mui/material";
import { prepareLeaderBoard } from "../utils/helpers";

class Leaderboard extends Component {
  render() {
    //create leaderboard using data from users props just like the
    const { users } = this.props;
    const leader = users.sort((a, b) => b.score - a.score);

    //console.log(this.props);

    return (
      <div>
        <Navbar />
        <TableContainer
          component={Paper}
          style={{ width: "700px", margin: "0 auto", marginTop: "20px" }}
        >
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: "#016779",
                  color: "#fff",
                  fontSize: "18px",
                }}
              >
                <TableCell>Leader</TableCell>
                <TableCell align="center">Questions</TableCell>
                <TableCell align="center">Answers</TableCell>
                <TableCell align="center">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leader.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      <CardMedia
                        style={{
                          borderRadius: "50%",
                          height: "32px",
                          marginLeft: "20px",
                        }}
                        component="img"
                        sx={{ width: 32 }}
                        image={user.avatarURL}
                        alt="avatar"
                      />
                      <span>{user.name}</span>
                    </TableCell>
                    <TableCell align="center">
                      {user.questions.length}
                    </TableCell>
                    <TableCell align="center">
                      {Object.keys(user.answers).length}
                    </TableCell>
                    <TableCell align="center">{user.score}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
function mapStateToProps({ authUser, users }) {
  const leaders = Object.values(users);
  leaders.map(
    (user) =>
      (user.score = Object.keys(user.answers).length + user.questions.length)
  );
  return {
    loggeOut: authUser === null,
    users: leaders,
    userAvatar: users["avatarURL"],
  };
}
export default connect(mapStateToProps)(Leaderboard);
