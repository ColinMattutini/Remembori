import React, { useMemo, useState } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import classes from "./ReviewModeCards.module.css";

const ReviewModeCards = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [reviewSet, setReviewSet] = useState(
    JSON.parse(localStorage.getItem(pathName))
  );

  const [shuffledSet, setShuffledSet] = useState(
    JSON.parse(localStorage.getItem(pathName).slice())
  );

  const [showAnswer, setShowAnswer] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const shuffleCards = (cards) => {
    let newCards = cards;
    for (var i = newCards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var holder = newCards[i];
      newCards[i] = newCards[j];
      newCards[j] = holder;
    }
    console.log(newCards);
    setShuffledSet(newCards);
  };

  const showAnswerHandler = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };

  const cardIndexIncreaser = () => {
    if (cardIndex < reviewSet.length - 1) {
      setCardIndex(cardIndex + 1);
      setShowAnswer(false);
      knowItHandler();
    }
  };

  const cardIndexDecreaser = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowAnswer(false);
    }
  };

  const knowItHandler = () => {
    let temp = "Know It";
    let questionFind = shuffledSet[cardIndex].question;
    console.log(questionFind);
    let originalIndex = reviewSet.findIndex((x) => x.question === questionFind);
    console.log(originalIndex);
    reviewSet[originalIndex].knowIt = temp;
    console.log(reviewSet);

    localStorage.setItem(pathName, JSON.stringify(reviewSet));
    setCardIndex(cardIndex + 1);
  };

  const dontKnowItHandler = () => {
    let temp = "Don't Know It";
    let questionFind = shuffledSet[cardIndex].question;
    console.log(questionFind);
    let originalIndex = reviewSet.findIndex((x) => x.question === questionFind);
    console.log(originalIndex);
    reviewSet[originalIndex].knowIt = temp;
    console.log(reviewSet);

    localStorage.setItem(pathName, JSON.stringify(reviewSet));
    setCardIndex(cardIndex + 1);
  };

  useMemo(() => {
    shuffleCards(shuffledSet);
    console.log("Shuffled.");
    console.log(shuffledSet);
    console.log(reviewSet);
  }, []);

  return (
    <div>
      <div className={classes.textalign}>
        <h1>
          {cardIndex + 1}/{reviewSet.length}
        </h1>

        <div className={classes.card}>
          <div className={classes.cardText} onClick={showAnswerHandler}>
            {!showAnswer && <h1>{shuffledSet[cardIndex].question}</h1>}
            {showAnswer && <h1>{shuffledSet[cardIndex].answer}</h1>}
          </div>
        </div>

        <div className={classes.buttonspacing}>
          <button onClick={dontKnowItHandler}>Don't Know It</button>
          <button onClick={knowItHandler}>Know It</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModeCards;
