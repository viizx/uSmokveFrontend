import "./App.css";
import Nav from "./components/Nav";
import Land from "./components/Land";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Nav />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Land />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
