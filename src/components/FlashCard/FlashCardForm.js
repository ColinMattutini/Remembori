import React from "react";
import { useState } from "react";

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
        counter: counter,
        question: question,
        answer: answer,
      },
    ]);
    localStorage.setItem("flashCardSet", JSON.stringify(cardSet));
    setCounter(counter + 1);
    setAnswer("");
    setQuestion("");
  };

  const printSet = () => {
    for (const item in cardSet) {
      console.log(cardSet[item]);
    }
  };

  return (
    <div>
      <h1>Question</h1>
      <input onChange={questionHandler} value={question}></input>
      <h1>Answer</h1>
      <input onChange={answerHandler} value={answer}></input>
      <button onClick={submitCard}>Add Card</button>
      <button onClick={printSet}>Print</button>
    </div>
  );
};

export default FlashCardForm;
