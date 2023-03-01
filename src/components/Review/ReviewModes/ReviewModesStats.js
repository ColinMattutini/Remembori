import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReviewModeStats = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [reviewSet, setReviewSet] = useState(
    JSON.parse(localStorage.getItem(pathName))
  );

  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const correctCards = () => {
    let correct = reviewSet.slice();
    correct = correct.filter((e) => e.knowIt === "Know It");
    setCorrectCount(correct.length);
  };

  const incorrectCards = () => {
    let incorrect = reviewSet.slice();
    incorrect = incorrect.filter((e) => e.knowIt === "Don't Know It");
    setIncorrectCount(incorrect.length);
  };

  useMemo(() => {
    correctCards();
    incorrectCards();
  }, []);

  return (
    <div>
      <h1>Stats</h1>
      <h2>Know It: {correctCount}</h2>
      <h2>Don't Know It: {incorrectCount}</h2>
    </div>
  );
};

export default ReviewModeStats;
