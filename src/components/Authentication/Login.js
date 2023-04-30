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
        let userId = data.idToken.payload["cognito:username"];
        localStorage.setItem(
          "Cognitousername",
          data.idToken.payload["cognito:username"]
        );
      })
      .then(() => fetchAllSets(localStorage.getItem("Cognitousername")))
      .then(() => fetchAllNotes(localStorage.getItem("Cognitousername")))
      .then(() => props.authModalHandler())
      .then(() => window.location.reload())
      .catch((err) => {
        console.log("Failed to login", err);
      });
  };

  const fetchAllSets = async (userId) => {
    let token = localStorage.getItem(
      "CognitoIdentityServiceProvider.5ckk48ttthca3bm3v5dlmapvbi.b29a2bad-578e-45f1-90fb-26e75512103a.idToken"
    );
    const response = await fetch(
      "https://ridrmxlnkl.execute-api.us-east-1.amazonaws.com/Prod/flashcard?userId=" +
        userId,
      {
        headers: {
          authToken: token,

          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    for (const setId in data) {
      localStorage.setItem(
        data[setId].setName,
        JSON.stringify(data[setId].flashCards)
      );
    }
    if (response.ok) {
      console.log("SUCCESS");
    } else {
      console.log("FAIL");
    }
  };

  const fetchAllNotes = async (userId) => {
    let token = localStorage.getItem(
      "CognitoIdentityServiceProvider.5ckk48ttthca3bm3v5dlmapvbi.b29a2bad-578e-45f1-90fb-26e75512103a.idToken"
    );
    const response = await fetch(
      "https://ridrmxlnkl.execute-api.us-east-1.amazonaws.com/Prod/note?userId=" +
        userId,
      {
        headers: {
          authToken: token,

          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    for (const noteId in data) {
      localStorage.setItem(
        data[noteId].noteName,
        JSON.stringify(data[noteId].content)
      );
    }
    if (response.ok) {
      console.log("SUCCESS");
    } else {
      console.log("FAIL");
    }
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
