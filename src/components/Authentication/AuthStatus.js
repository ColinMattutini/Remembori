import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const AuthStatus = () => {
  const [status, setStatus] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? <button onClick={logout}>Logout</button> : "Please Login"}
    </div>
  );
};

export default AuthStatus;