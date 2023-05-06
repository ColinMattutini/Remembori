import React, { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const AuthStatus = (props) => {
  const [status, setStatus] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  const newLogout = () => {
    props.authModalHandler();
    logout();
  };

  useEffect(() => {
    getSession().then((session) => {
      localStorage.setItem(
        "Cognitousername",
        session.idToken.payload["cognito:username"]
      );
      setStatus(true);
    });
  }, []);

  return (
    <div>
      {status ? <button onClick={newLogout}>Logout</button> : "Please Login"}
    </div>
  );
};

export default AuthStatus;
