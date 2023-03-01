import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ReviewSetSelect.module.css";
import SetsList from "./SetsList";

const ReviewSetSelect = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <div className={classes.alignment}>
          <SetsList />
        </div>
      </div>
    </div>
  );
};

export default ReviewSetSelect;
