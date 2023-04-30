import React from "react";
import Modal from "../UI/Modal";
import SignUp from "./SignUp";
import Login from "./Login";
import { useState } from "react";
import { Account } from "./Account";
import AuthStatus from "./AuthStatus";
import classes from "./AuthModal.module.css";

const AuthModal = (props) => {
  const [loginState, setLoginState] = useState(false);

  const loginStateHandler = () => {
    loginState ? setLoginState(false) : setLoginState(true);
  };

  return (
    <Account>
      <Modal>
        <AuthStatus />
        <button onClick={props.authModalHandler}>X</button>
        {loginState && <Login authModalHandler={props.authModalHandler} />}
        {loginState && (
          <div className={classes.button}>
            <button onClick={loginStateHandler}>
              Already Have an Account?
            </button>
          </div>
        )}
        {!loginState && <SignUp />}
        {!loginState && (
          <button onClick={loginStateHandler}>Sign Up Here</button>
        )}
      </Modal>
    </Account>
  );
};

export default AuthModal;