import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashCard from "./FlashCard/FlashCard";
import classes from "./Homepage.module.css";
import ReviewPage from "./Review/ReviewPage";

const Homepage = () => {
  const nav = useNavigate();

  const createHandler = () => {
    nav("/createset");
  };

  const reviewHandler = () => {
    nav("/review");
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.alignment}>
          <div className={classes.buttonstack}>
            <button onClick={createHandler}>Create FlashCard Set</button>

            <button onClick={reviewHandler}>Review Flashcards</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
