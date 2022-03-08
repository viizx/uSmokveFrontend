import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const url = useParams();
  const userId = url.id;
  const token = url.token;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const creds = { password };
    const rawResponse = await fetch(
      `https://port-3000-js-practice-vice889681.codeanyapp.com/api/user/${userId}/reset/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      }
    );
    try {
      const response = await rawResponse.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="formItem"
          placeholder="password"
          id="inputPassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="loginBtn" type="submit">
          Reset password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
