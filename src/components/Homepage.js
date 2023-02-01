import React, { useState } from "react";
import FlashCard from "./FlashCard/FlashCard";
import classes from "./Homepage.module.css";
import ReviewPage from "./Review/ReviewPage";

const Homepage = () => {
  const [createSet, setCreateSet] = useState(true);
  const [reviewSet, setReviewSet] = useState(false);

  const createHandler = () => {
    createSet ? setCreateSet(false) : setCreateSet(true);
    setReviewSet(false);
  };

  const reviewHandler = () => {
    reviewSet ? setReviewSet(false) : setReviewSet(true);
    setCreateSet(false);
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.alignment}>
        <button onClick={createHandler}>Create FlashCard Set</button>
        <button onClick={reviewHandler}>Review Flashcards</button>
        {createSet && <FlashCard />}
        {reviewSet && <ReviewPage />}
      </div>
    </div>
  );
};

export default Homepage;
