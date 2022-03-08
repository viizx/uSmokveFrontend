import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Land from "./components/Land";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import BlogDetails from "./components/BlogDetails";
import User from "./components/User";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Items from "./components/Items";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  let authObject = JSON.parse(user);

  useEffect(() => {
    let isMounted = true;
    const auth = async () => {
      setUser(localStorage.getItem("user"));
    };

    auth();
    return () => {
      isMounted = false;
    };
  });
  return (
    <div className="App">
      <Router>
        <Nav auth={authObject} />
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
            <Route path="/user/:id">
              <User auth={authObject} />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/:id/reset/:token">
              <ResetPassword />
            </Route>
            <Route path="/items">
              <Items />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
