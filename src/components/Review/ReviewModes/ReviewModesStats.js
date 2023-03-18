import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import classes from "./ReviewModesStats.module.css";

const ReviewModeStats = (props) => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [reviewSet, setReviewSet] = useState(
    JSON.parse(localStorage.getItem(pathName))
  );

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [knowAll, setKnowAll] = useState(false);

  const correctCards = () => {
    let correct = reviewSet.slice();
    correct = correct.filter((e) => e.knowIt === "Know It");
    setCorrectCount(correct.length);
  };

  const incorrectCards = () => {
    let incorrect = reviewSet.slice();
    incorrect = incorrect.filter((e) => e.knowIt === "Don't Know It");
    setIncorrectCount(incorrect.length);
    if (incorrect.length === 0) {
      setKnowAll(true);
    }
  };

  const newReviewWrongHandler = () => {
    props.reviewWrongHandler();
    props.reviewHandler();
  };

  const reviewAllHandler = () => {
    props.reviewHandler();
    props.flipReviewWrongHandler();
  };

  useMemo(() => {
    correctCards();
    incorrectCards();
  }, []);

  return (
    <div>
      <div className={classes.card}>
        <h1>Summary</h1>
        <h1>Know It: {correctCount}</h1>
        <h1>Don't Know It: {incorrectCount}</h1>
        {knowAll && <h1>Congrats!</h1>}
      </div>
      <div className={classes.buttonstack}>
        {!knowAll && (
          <button onClick={newReviewWrongHandler}>Review Don't Knows</button>
        )}

        <button onClick={reviewAllHandler}>Review All</button>
      </div>
    </div>
  );
};

export default ReviewModeStats;
