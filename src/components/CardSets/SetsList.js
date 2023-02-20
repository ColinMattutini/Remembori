import React, { useState } from "react";
import IndividualSets from "./IndividualSet";

const SetsList = () => {
  const [name, setName] = useState(Object.keys(localStorage));

  const individualSetCards = name.map((setNames) => (
    <IndividualSets name={setNames} />
  ));

  return <div>{individualSetCards}</div>;
};

export default SetsList;
