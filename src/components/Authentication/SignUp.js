import React from "react";
import { useState } from "react";
import UserPool from "./UserPool";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={submitForm} className={classes.login}>
        <div className={classes.signupControl}>
          <h1>Sign-Up</h1>

          <input
            placeholder="Email"
            type="email"
            onChange={emailHandler}
            required
          />

          <input
            type="password"
            placeholder="Password: Enter 8 characters or more"
            onChange={passwordHandler}
            required
          />
        </div>
        <button>Sign-Up</button>
      </form>
    </div>
  );
};

export default SignUp;
