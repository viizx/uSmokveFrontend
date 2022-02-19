import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function LoginForm() {
  return (
    <div>
      <form>
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
          ></input>
        </div>
        <div className="container">
          <button className="loginBtn" onClick="submit">
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
