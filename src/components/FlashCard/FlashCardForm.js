import React from "react";
import { useState } from "react";

const FlashCardForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const answerHandler = (e) => {
    setAnswer(e.target.value);
  };

  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const submitCard = () => {
    console.log(answer, question);
  };

  return (
    <div>
      <h1>Question</h1>
      <input onChange={questionHandler}></input>
      <h1>Answer</h1>
      <input onChange={answerHandler}></input>
      <button onClick={submitCard}>Console Log</button>
    </div>
  );
};

export default FlashCardForm;
