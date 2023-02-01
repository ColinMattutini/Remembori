import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import IndividualFlashcard from "./IndividualFlashcard";

const FlashCardForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [cardSet, setCardSet] = useState([]);
  const [counter, setCounter] = useState(0);

  const answerHandler = (e) => {
    setAnswer(e.target.value);
  };

  const questionHandler = (e) => {
    setQuestion(e.target.value);
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

  const saveSet = () => {
    localStorage.setItem("flashCardSet", JSON.stringify(cardSet));
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
      console.log(cardSet[item]);
    }
  };

  return (
    <Fragment>
      <div>
        <button onClick={saveSet}>Save Set</button>
        <h1>Question</h1>
        <input onChange={questionHandler} value={question}></input>
        <h1>Answer</h1>
        <input onChange={answerHandler} value={answer}></input>
        <button onClick={submitCard}>Add Card</button>
        <button onClick={printSet}>Print</button>
      </div>
      {flashCardSet}
    </Fragment>
  );
};

export default FlashCardForm;