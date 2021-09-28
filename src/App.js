import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewQuestion from "./components/NewQuestion";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard" exact component={Home} />
        <Route path="/add" exact component={NewQuestion} />
        <Route path="/leaderboard" exact component={Leaderboard} />
      </Switch>
    </Router>
  );
}

export default App;
