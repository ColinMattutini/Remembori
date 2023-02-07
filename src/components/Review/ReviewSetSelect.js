import React, { useState } from "react";

const ReviewSetSelect = () => {
  const [reviewSet, setReviewSet] = useState(Object.keys(localStorage));

  return <div>{reviewSet}</div>;
};

export default ReviewSetSelect;
