import React, { useEffect, useState } from "react";

const ReviewCard = () => {
  const [reviewSet, setReviewSet] = useState([
    JSON.parse(localStorage.getItem("flashCardSet")),
  ]);

  const testHandler = () => {
    setReviewSet(JSON.parse(localStorage.getItem("flashCardSet")));
  };

  return (
    <div>
      <button onClick={testHandler}>Reset</button>
      <h1>Question 1</h1>
      <h2>{reviewSet[0].answer}</h2>
    </div>
  );
};

export default ReviewCard;
