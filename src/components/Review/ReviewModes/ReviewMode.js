import React from "react";
import classes from "./ReviewMode.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReviewModeCards from "./ReviewModeCards";

const ReviewMode = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.backButton}>
          <ArrowBackIcon />
        </div>
        <ReviewModeCards />
      </div>
    </div>
  );
};

export default ReviewMode;
