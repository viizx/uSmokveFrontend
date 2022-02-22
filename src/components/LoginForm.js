import React, { useState } from "react";
import { Link } from "react-router-dom";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    const creds = { email, password };
    console.log(creds)
    e.preventDefault();
    fetch(
      "https://port-3000-js-practice-vice889681.codeanyapp.com/api/user/login/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json",
     },
        body: JSON.stringify(creds),
      }
    ).then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="formLabel" for="inputEmailAddres">
            Email adresa
          </label>
        </div>
        <input
          className="formItem"
          placeholder="email"
          id="inputEmailAddress"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div>
          <div>
            <label className="formLabel" for="inputPassword">
              Šifra
            </label>
          </div>
          <input
            className="formItem"
            placeholder="password"
            id="inputPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="container">
          <button className="loginBtn" type="submit">
            Prijavi se
          </button>
        </div>
      </form>
      <div className="container">
        <div className="links">
          <Link to="/register">Nemaš račun? Klikni me!</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
