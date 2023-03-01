import React from "react";
import classes from "./ReviewMode.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReviewModeCards from "./ReviewModeCards";
import ReviewModeStats from "./ReviewModesStats";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewMode = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [review, setReview] = useState(false);

  const reviewHandler = () => {
    review ? setReview(false) : setReview(true);
  };

  const nav = useNavigate();

  const backNavHandler = () => {
    nav("/review/" + pathName);
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.backButton} onClick={backNavHandler}>
          <ArrowBackIcon />
        </div>
        {!review && <ReviewModeCards reviewHandler={reviewHandler} />}
        {review && <ReviewModeStats />}
      </div>
    </div>
  );
};

export default ReviewMode;
