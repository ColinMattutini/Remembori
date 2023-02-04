import React, { useEffect, useState } from "react";

const ReviewCard = () => {
  const [reviewSet, setReviewSet] = useState([
    JSON.parse(localStorage.getItem("flashCardSet")),
  ]);

  const [cardIndex, setCardIndex] = useState(0);

  const testHandler = () => {
    setReviewSet(JSON.parse(localStorage.getItem("flashCardSet")));
  };

  const cardIndexIncreaser = () => {
    if (cardIndex < reviewSet.length - 1) {
      setCardIndex(cardIndex + 1);
    }
  };

  const cardIndexDecreaser = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  useEffect(() => {
    testHandler();
    console.log("Set Added For Review");
  }, []);

  return (
    <div>
      <button onClick={testHandler}>Reset</button>
      <h1>Question 1</h1>
      <h2>{reviewSet[cardIndex].question}</h2>
      <h2>{reviewSet[cardIndex].answer}</h2>
      <button onClick={cardIndexDecreaser}>Previous</button>
      <button onClick={cardIndexIncreaser}>Next</button>
    </div>
  );
};

export default ReviewCard;
