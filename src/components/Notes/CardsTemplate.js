import React, { useState } from "react";

const CardsTemplate = (props) => {
  const [cardSet, setCardSet] = useState(
    JSON.parse(localStorage.getItem("TEST TITLE"))
  );
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const questionHandler = () => {
    setQuestion(window.getSelection().toString());
  };

  const answerHandler = () => {
    setAnswer(window.getSelection().toString());
  };

  const questionInputHandler = (e) => {
    setQuestion(e.target.value);
  };

  const answerInputHandler = (e) => {
    setAnswer(e.target.value);
  };

  const appendNewCard = () => {
    let answer = window.getSelection().toString();
    let temp = cardSet;
    temp.push({ question: question, answer: answer });
    localStorage.setItem("TEST TITLE", JSON.stringify(temp));
    setQuestion("");
    setAnswer("");
  };

  return (
    <div>
      <input onChange={questionInputHandler} value={question} />
      <input onChange={answerInputHandler} value={answer} />
      <button onClick={questionHandler}>Add Question </button>
      <button onClick={answerHandler}>Add Answer</button>
      <button onClick={appendNewCard}>Save Card</button>
    </div>
  );
};

export default CardsTemplate;
