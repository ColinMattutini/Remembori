import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ReviewCard.module.css";

const ReviewCard = () => {
  const pathName = window.location.pathname.split("/").pop();
  const [reviewSet, setReviewSet] = useState([
    JSON.parse(localStorage.getItem(pathName)),
  ]);

  const [shuffledSet, setShuffledSet] = useState([]);

  const [showAnswer, setShowAnswer] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const testHandler = () => {
    setReviewSet(JSON.parse(localStorage.getItem(pathName)));
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
      <div className={classes.textalign}>
        <h1>
          {cardIndex + 1}/{reviewSet.length}
        </h1>
        <div className={classes.card} onClick={showAnswerHandler}>
          {!showAnswer && <h1>{reviewSet[cardIndex].question}</h1>}
          {showAnswer && <h1>{reviewSet[cardIndex].answer}</h1>}
        </div>
        <div className={classes.buttonspacing}>
          <button onClick={cardIndexDecreaser}>Previous</button>
          <button onClick={cardIndexIncreaser}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
