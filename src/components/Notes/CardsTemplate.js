import React, { useEffect, useState } from "react";
import DropDownMenu from "./DropDownMenu";

const CardsTemplate = (props) => {
  const [name, setName] = useState("");
  const getSetName = (name) => {
    setName(name);
  };

  const [cardSet, setCardSet] = useState(
    JSON.parse(localStorage.getItem(name))
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
    console.log(cardSet);
    console.log(name);

    //let answer = window.getSelection().toString();
    let temp = JSON.parse(localStorage.getItem(name));
    temp.push({ question: question, answer: answer });
    localStorage.setItem(name, JSON.stringify(temp));
    setQuestion("");
    setAnswer("");
  };

  return (
    <div>
      <DropDownMenu getSetName={getSetName} />
      <input onChange={questionInputHandler} value={question} />
      <input onChange={answerInputHandler} value={answer} />
      <button onClick={questionHandler}>Add Question </button>
      <button onClick={answerHandler}>Add Answer</button>
      <button onClick={appendNewCard}>Save Card</button>
    </div>
  );
};

export default CardsTemplate;
