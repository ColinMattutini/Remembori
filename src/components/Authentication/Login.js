import React from "react";
import { useState, useContext } from "react";
import { AccountContext } from "./Account";
import classes from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        props.authModalHandler();
      })
      .catch((err) => {
        console.log("Failed to login", err);
      });
  };

  return (
    <div>
      <form onSubmit={submitForm} className={classes.login}>
        <h1>Login</h1>
        <div className={classes.signupControl}>
          <label htmlFor="email"></label>
          <input
            placeholder="Email"
            type="email"
            onChange={emailHandler}
            required
          />
          <label htmlFor="password"></label>
          <input
            placeholder="Password"
            type="password"
            onChange={passwordHandler}
            required
          />
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
