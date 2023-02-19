import React, { useState } from "react";
import FlashCardForm from "./FlashCardForm";
import classes from "./FlashCard.module.css";
import { useNavigate } from "react-router-dom";

const FlashCard = () => {
  const nav = useNavigate();

  const returnHandler = () => {
    nav("/home");
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.backbutton}>
          <button onClick={returnHandler}>Back</button>
        </div>
        <FlashCardForm />
      </div>
    </div>
  );
};

export default FlashCard;
