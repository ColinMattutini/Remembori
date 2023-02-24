import React, { useEffect, useState } from "react";

const IndividualEdit = (props) => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem(pathName))
  );

  const addCard = () => {
    let temp = { question: "", answer: "" };
    setCards(cards.concat(temp));
    console.log(cards);
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
      <button onClick={() => props.submitTest(cards)}>SUBMIT</button>

      {cards.map((card, index) => (
        <div key={index}>
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
      <button onClick={addCard}>ADD</button>
    </div>
  );
};

export default IndividualEdit;
