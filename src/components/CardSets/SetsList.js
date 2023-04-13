import React, { useState } from "react";
import IndividualSets from "./IndividualSet";
import classes from "./SetsList.module.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const SetsList = () => {
  const [name, setName] = useState(Object.keys(localStorage));
  let fixName = name.filter((e) => !e.includes("Cognito"));
  fixName = fixName.filter((e) => !e.includes("TXT NOTES "));

  const individualSetCards = fixName.map((setNames) => (
    <IndividualSets name={setNames} />
  ));

  const nav = useNavigate();

  const backButtonHandler = () => {
    nav("/");
  };

  return (
    <div className={classes.alignment}>
      <div className={classes.backButton}>
        <ArrowBackIcon onClick={backButtonHandler} />
      </div>
      <div className={classes.cardWrap}>{individualSetCards}</div>
    </div>
  );
};

export default SetsList;
