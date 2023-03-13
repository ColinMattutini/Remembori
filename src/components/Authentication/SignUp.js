import React from "react";
import { useState } from "react";
import UserPool from "./UserPool";

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
      <form onSubmit={submitForm}>
        <h1>Email</h1>
        <input type={"text"} value={email} onChange={emailHandler} />
        <h1>
          <input
            type={"password"}
            value={password}
            onChange={passwordHandler}
          />
        </h1>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default SignUp;
