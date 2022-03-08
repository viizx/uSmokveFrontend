import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function ForgotPassword() {
  const history = useHistory();
  if (localStorage.getItem("auth-token")) history.push("/");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const creds = { email };
    console.log(creds);
    const rawResponse = await fetch(
      "https://port-3000-js-practice-vice889681.codeanyapp.com/api/user/reset",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      }
    );
    try {
      const response = await rawResponse.json();
      setMessage(response.message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="formLabel">Email adresa</label>
        </div>
        <input
          className="formItem"
          placeholder="email"
          id="inputEmailAddress"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        {message && <h4 className="err">{message.message}</h4>}
        <div className="container">
          <button className="loginBtn" type="submit">
            Reset password
          </button>
        </div>
      </form>
      <div className="container"></div>
    </div>
  );
}

export default ForgotPassword;
