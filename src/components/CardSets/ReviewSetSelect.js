import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ReviewSetSelect.module.css";
import SetsList from "./SetsList";

const ReviewSetSelect = () => {
  const [reviewSet, setReviewSet] = useState(Object.keys(localStorage));

  const nav = useNavigate();

  const backButtonHandler = () => {
    nav("/");
  };

  return (
    <div>
      <div className={classes.homepage}>
        <div className={classes.mainbackground}>
          <button onClick={backButtonHandler}>Back</button>
          <SetsList />
        </div>
      </div>
    </div>
  );
};

export default ReviewSetSelect;
