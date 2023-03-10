import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./FlashCardForm.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const FlashCardForm = () => {
  const [counter, setCounter] = useState(1);
  const [cardSet, setCardSet] = useState([
    { question: "", answer: "", favorite: false, knowIt: "" },
  ]);
  const [title, setTitle] = useState("");

  const nav = useNavigate();

  const returnHandler = () => {
    nav("/");
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const cardHandler = (index, field, event) => {
    const newValue = event.target.value;
    setCardSet([
      ...cardSet.slice(0, index),
      {
        ...cardSet[index],
        [field]: newValue,
      },
      ...cardSet.slice(index + 1),
    ]);
  };

  useEffect(() => {}, [counter]);

  const saveSet = (e) => {
    e.preventDefault();
    let blankSet = cardSet.filter((item) => item.question);
    setCardSet(blankSet);
    let trimTitle = title.trim();
    localStorage.setItem(trimTitle, JSON.stringify(blankSet));
    nav("/review/" + trimTitle);
  };

  const addCardHandler = () => {
    let temp = { question: "", answer: "", favorite: false, knowIt: "" };
    let test = cardSet.concat(temp);
    setCardSet(test);
  };

  const removeCardHandler = () => {
    let temp = cardSet.pop();
    let test = cardSet;
    setCardSet(test);
    setCounter(counter - 1);
  };

  return (
    <Fragment>
      <form onSubmit={saveSet}>
        <div>
          <div className={classes.buttonAlign}>
            <div className={classes.backbutton}>
              <ArrowBackIcon onClick={returnHandler} />
            </div>
            <div className={classes.submitAdjust}>
              <button>
                <CheckCircleIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={classes.title}>
          <h2>Set Title</h2>
          <input
            required
            type="text"
            onChange={titleHandler}
            onInvalid={(e) =>
              e.target.setCustomValidity("Please Enter a Title")
            }
            onInput={(e) => e.target.setCustomValidity("")}
          />
        </div>
        {cardSet.map((card, index) => (
          <div className={classes.spacer} key={index}>
            <h2>Question</h2>
            <input
              key={index}
              type="text"
              onChange={cardHandler.bind(this, index, "question")}
            ></input>
            <h2>Answer</h2>
            <input
              type="text"
              onChange={cardHandler.bind(this, index, "answer")}
            ></input>
          </div>
        ))}
      </form>
      <div className={classes.footer}>
        <AddCircleOutlineIcon
          className={classes.iconSizing}
          fontSize="medium"
          onClick={addCardHandler}
        />
        <RemoveCircleOutlineIcon
          className={classes.iconSizing}
          fontSize="medium"
          onClick={removeCardHandler}
        />
      </div>
    </Fragment>
  );
};

export default FlashCardForm;
