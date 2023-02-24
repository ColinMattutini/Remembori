import React from "react";
import ReviewCard from "./ReviewCard";
import classes from "./ReviewPage.module.css";
import { useNavigate } from "react-router-dom";

const ReviewPage = () => {
  const nav = useNavigate();

  const returnHandler = () => {
    nav("/reviewset");
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.backbutton}>
          <button onClick={returnHandler}>Back</button>
        </div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewPage;
