import React, { useEffect, useState } from "react";
import classes from "./IndividualEdit.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

const IndividualEdit = (props) => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem(pathName))
  );

  const nav = useNavigate();

  const backHandler = () => {
    nav("/review/" + pathName);
  };

  const addCard = () => {
    let temp = { question: "", answer: "" };
    setCards(cards.concat(temp));
  };

  const cardHandler = (index, field, event) => {
    const newValue = event.target.value;
    setCards([
      ...cards.slice(0, index),
      {
        ...cards[index],
        [field]: newValue,
      },
      ...cards.slice(index + 1),
    ]);
  };

  return (
    <div>
      <div>
        <div className={classes.buttonAlign}>
          <div className={classes.backbutton}>
            <ArrowBackIcon onClick={backHandler} />
          </div>
          <div className={classes.submitAdjust}>
            <CheckCircleIcon onClick={() => props.submitTest(cards)} />
          </div>
        </div>
      </div>
      {cards.map((card, index) => (
        <div key={index} className={classes.formPad}>
          <h2>Question</h2>
          <input
            type="text"
            value={card.question}
            onChange={cardHandler.bind(this, index, "question")}
          ></input>
          <h2>Answer</h2>
          <input
            type="text"
            value={card.answer}
            onChange={cardHandler.bind(this, index, "answer")}
          ></input>
        </div>
      ))}
      <div className={classes.footer}>
        <div className={classes.iconSizing}>
          <AddCircleOutlineIcon onClick={addCard} />
        </div>
      </div>
    </div>
  );
};

export default IndividualEdit;
