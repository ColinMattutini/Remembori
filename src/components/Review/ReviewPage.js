import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewSetSelect from "./ReviewSetSelect";
import classes from "./ReviewPage.module.css";
import { useNavigate } from "react-router-dom";

const ReviewPage = () => {
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
        <ReviewCard />
        {/* <ReviewSetSelect /> */}
      </div>
    </div>
  );
};

export default ReviewPage;
