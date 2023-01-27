import React, { useState } from "react";
import FlashCardForm from "./FlashCardForm";

const FlashCard = () => {
  const [flashcards, setFlashCards] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  const flashCardAmountHandler = () => {
    setCardCount(cardCount + 1);
    console.log(cardCount);
  };

  return (
    <div>
      <FlashCardForm />
      <button onClick={flashCardAmountHandler}>Add Card</button>
    </div>
  );
};

export default FlashCard;
