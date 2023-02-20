import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./IndividualSet.module.css";

const IndividualSets = (props) => {
  const nav = useNavigate();
  const [name, setName] = useState(Object.keys(localStorage));

  const navHandler = () => {
    nav("/review/" + props.name);
  };

  return (
    <div className={classes.cardWrap}>
      <div className={classes.card} onClick={navHandler}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default IndividualSets;
