import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Nav(props) {
  const history = useHistory();
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

  const logout = () => {
    localStorage.clear();
    history.go(0);
  };
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <h1>u Smokve</h1>
        </Link>
        <Link to="/blogs"></Link>
        <div className="links">
          {name && <button onClick={logout}>Logout</button>}
          <Link
            to="/items"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            Items
          </Link>
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
