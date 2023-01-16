import React from "react";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.alignment}>
        <h1>Hello!</h1>
        <button>Create New Flashcard Set</button>
      </div>
    </div>
  );
};

export default Homepage;
