import React, { useState, useEffect } from "react";

import useFetch from "./utils/useFetch";

function User(props) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const getUserInfo = async () => {
      setUser(props.auth._id);
      setEmail(props.auth.email);
      setIsAdmin(props.auth.isAdmin);
      setName(props.auth.name);
    };
    getUserInfo();
    return () => {
      isMounted = false;
    };
  });
  return (
    <div>
      <h1>yo</h1>
      {user ? <h3>{user}</h3> : <h3>nono</h3>}
      {name ? <h3>{name}</h3> : <h3>nono</h3>}
      {email ? <h3>{email}</h3> : <h3>nono</h3>}
      {isAdmin ? <h3>{isAdmin}</h3> : <h3>nono</h3>}
    </div>
  );
}
export default User;
