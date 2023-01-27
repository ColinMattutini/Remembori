import React from "react";
import FlashCard from "./FlashCard/FlashCard";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.alignment}>
        <FlashCard />
      </div>
    </div>
  );
};

export default Homepage;
