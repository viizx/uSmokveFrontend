import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const getUserInfo = async () => {
      setUserId(props.auth._id);
      setName(props.auth.name);
    };
    getUserInfo();
    return () => {
      isMounted = false;
    };
  });
  return (
    <div>
      <nav className="navbar">
        <h1>u Smokve</h1>
        <div className="links">
          <Link to="/">Home</Link>
          {name ? (
            <Link
              to={`/user/${userId}`}
              style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px",
              }}
            >
              {name}
            </Link>
          ) : (
            <Link
              to="/login"
              style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px",
              }}
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
