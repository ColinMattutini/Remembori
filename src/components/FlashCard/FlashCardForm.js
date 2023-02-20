import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import IndividualFlashcard from "./IndividualFlashcard";
import classes from "./FlashCardForm.module.css";

const FlashCardForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [cardSet, setCardSet] = useState([]);
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("");

  const answerHandler = (e) => {
    setAnswer(e.target.value);
  };

  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitCard = () => {
    setCardSet((cardSet) => [
      ...cardSet,
      {
        key: counter,
        counter: counter,
        question: question,
        answer: answer,
      },
    ]);
    setCounter(counter + 1);
    setAnswer("");
    setQuestion("");
  };

  const submitSet = async () => {
    for (const item in cardSet) {
      const response = await fetch("placeholderforAPIgateway", {
        method: "POST",
        body: JSON.stringify({
          id: cardSet[item].counter,
          title: title,
          question: cardSet[item].question,
          answer: cardSet[item].answer,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("Success saving card " + counter);
      }
    }
  };

  const saveSet = () => {
    localStorage.setItem(title, JSON.stringify(cardSet));
    console.log("Successfully saved!");
  };

  const flashCardSet = cardSet.map((cards) => (
    <IndividualFlashcard
      counter={cards.counter}
      question={cards.question}
      answer={cards.answer}
    />
  ));

  const printSet = () => {
    for (const item in cardSet) {
      console.log(cardSet[item].counter);
      console.log(cardSet[item].question);
      console.log(cardSet[item].answer);
    }
  };

  return (
    <Fragment>
      <div>
        <h2>Flashcard Set Title</h2>
        <input onChange={titleHandler} />
      </div>
      <div>
        <button onClick={saveSet}>Save Set</button>
        <h1>Question</h1>
        <input onChange={questionHandler} value={question}></input>
        <h1>Answer</h1>
        <input onChange={answerHandler} value={answer}></input>
        <div className={classes.spacer}>
          <button onClick={submitCard}>Add Card</button>
        </div>
      </div>
      {flashCardSet}
    </Fragment>
  );
};

export default FlashCardForm;
