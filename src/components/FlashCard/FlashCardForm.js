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
        question: question,
        answer: answer,
      },
    ]);
    localStorage.setItem("flashCardSet", JSON.stringify(cardSet));
    console.log(cardSet);
  };

  const counterIncreaseHandler = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  const counterDecreaseHandler = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>Question</h1>
      <input
        onChange={questionHandler}
        value={JSON.stringify(cardSet[counter].question)}
      ></input>
      <h1>Answer</h1>
      <input onChange={answerHandler}></input>
      <button onClick={submitCard}>Console Log</button>
      <button onClick={counterDecreaseHandler}>Back</button>
      <button onClick={counterIncreaseHandler}>Forward</button>
    </div>
  );
};

export default FlashCardForm;
