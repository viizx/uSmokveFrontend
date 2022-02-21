import "./App.css";
import Nav from "./components/Nav";
import Land from "./components/Land";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Nav />
          <div>
            <Switch>
              <Route exact path="/">
                <Land />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
