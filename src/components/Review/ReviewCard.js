import React, { useEffect, useState } from "react";

const ReviewCard = () => {
  const [reviewSet, setReviewSet] = useState([
    JSON.parse(localStorage.getItem("test")),
  ]);

  const [shuffledSet, setShuffledSet] = useState([]);

  const [showAnswer, setShowAnswer] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const testHandler = () => {
    setReviewSet(JSON.parse(localStorage.getItem("test")));
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

  const shuffleCards = (cards) => {
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var holder = cards[i];
      cards[i] = cards[j];
      cards[j] = holder;
    }
    console.log(cards);
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
      <button onClick={() => setShuffledSet(shuffleCards(reviewSet))}>
        Shuffle
      </button>
      <button onClick={showAnswerHandler}>Show Answer</button>
      <button onClick={cardIndexDecreaser}>Previous</button>
      <button onClick={cardIndexIncreaser}>Next</button>
    </div>
  );
};

export default ReviewCard;
