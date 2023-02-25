import React, { useState } from "react";
import IndividualSets from "./IndividualSet";
import classes from "./SetsList.module.css";

const SetsList = () => {
  const [name, setName] = useState(Object.keys(localStorage));

  const individualSetCards = name.map((setNames) => (
    <IndividualSets name={setNames} />
  ));

  return (
    <div>
      <div className={classes.cardWrap}>{individualSetCards}</div>
    </div>
  );
};

export default SetsList;
