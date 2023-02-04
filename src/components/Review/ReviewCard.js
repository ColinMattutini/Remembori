import React, { useEffect, useState } from "react";

const ReviewCard = () => {
  const [reviewSet, setReviewSet] = useState([
    JSON.parse(localStorage.getItem("flashCardSet")),
  ]);

  const [showAnswer, setShowAnswer] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const testHandler = () => {
    setReviewSet(JSON.parse(localStorage.getItem("flashCardSet")));
  };

  const showAnswerHandler = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };

  const cardIndexIncreaser = () => {
    if (cardIndex < reviewSet.length - 1) {
      setCardIndex(cardIndex + 1);
      setShowAnswer(false);
    }
  };

  const cardIndexDecreaser = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowAnswer(false);
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
      {!showAnswer && <h2>{reviewSet[cardIndex].question}</h2>}
      {showAnswer && <h2>{reviewSet[cardIndex].answer}</h2>}
      <button onClick={showAnswerHandler}>Show Answer</button>
      <button onClick={cardIndexDecreaser}>Previous</button>
      <button onClick={cardIndexIncreaser}>Next</button>
    </div>
  );
};

export default ReviewCard;
