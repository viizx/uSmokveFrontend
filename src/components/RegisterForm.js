import React from "react";

function RegisterForm() {
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
          placeholder="moja-email@adresa.com"
          id="inputEmailAddress"
          type="email"
        ></input>
        <div>
          <div>
            <label className="formLabel" for="inputPassword">
              Lozinka
            </label>
          </div>
          <input
            className="formItem"
            placeholder="MojaLozinka123$"
            id="inputPassword"
            type="password"
          ></input>
          <label className="formLabel" for="tel">
            Broj Mobitela
          </label>
          <input
            className="formItem"
            placeholder="Broj mobitela"
            id="tel"
            type="tel"
          ></input>
        </div>
        <div className="container">
          <button className="loginBtn" onClick="submit">
            Registracija
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
