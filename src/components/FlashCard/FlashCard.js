import React, { useState } from "react";
import FlashCardForm from "./FlashCardForm";

const FlashCard = () => {
  const [flashcards, setFlashCards] = useState([]);
  const [cardCount, setCardCount] = useState(0);

  return (
    <div>
      <FlashCardForm />
    </div>
  );
};

export default FlashCard;
