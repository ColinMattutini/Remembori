import React from "react";

const IndividualFlashcard = (props) => {
  return (
    <div>
      <h1>{props.question}</h1>
      <h1>{props.answer}</h1>
    </div>
  );
};

export default IndividualFlashcard;
