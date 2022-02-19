import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar">
        <h1>u Smokve</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link
            to="/login"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            Prijavi se
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
