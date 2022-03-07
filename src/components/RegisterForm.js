import React, { useState, useEffect } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const creds = { name, email, password };
    const rawResponse = await fetch(
      "https://port-3000-js-practice-vice889681.codeanyapp.com/api/user/register/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      }
    );
    try {
      const response = rawResponse.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
          placeholder="moja-email@adresa.com"
          id="inputEmailAddress"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div>
          <div>
            <label className="formLabel" for="inputPassword">
              Lozinka
            </label>
          </div>
          <input
            className="formItem"
            placeholder="Ime i Prezime"
            id="name"
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="formItem"
            placeholder="MojaLozinka123$"
            id="inputPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label className="formLabel" for="tel">
            Broj Mobitela
          </label>
          {/* <input
            className="formItem"
            placeholder="Broj mobitela"
            id="tel"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input> */}
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
