import React from "react";
import LoginForm from "./LoginForm";

function Login({ user }) {
  return (
    <div className="login">
      <div className="container">{!user && <LoginForm />}</div>
    </div>
  );
}

export default Login;
