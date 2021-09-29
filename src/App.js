import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";
import Question from "./components/Question";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
