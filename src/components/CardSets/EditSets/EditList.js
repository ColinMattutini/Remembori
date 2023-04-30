import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./EditList.module.css";
import IndividualEdit from "./IndividualEdit";

const EditList = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const nav = useNavigate();

  const submitTest = (cards) => {
    cards = cards.filter((item) => item.question);
    let updateKey = cards[0].setId;
    localStorage.setItem(pathName, JSON.stringify(cards));
    console.log(updateKey);
    patchRequest(updateKey, JSON.stringify(cards));
    nav("/review/" + pathName);
  };

  const patchRequest = async (updateKey, updateValue) => {
    let token = localStorage.getItem(
      "CognitoIdentityServiceProvider.5ckk48ttthca3bm3v5dlmapvbi.b29a2bad-578e-45f1-90fb-26e75512103a.idToken"
    );
    const response = await fetch(
      "https://ridrmxlnkl.execute-api.us-east-1.amazonaws.com/Prod/flashcard",
      {
        method: "PATCH",
        body: JSON.stringify({
          setId: updateKey,
          updateKey: "flashCards",
          updateValue: updateValue,
        }),
        headers: {
          authToken: token,

          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("SUCCESS");
    } else {
      console.log("FAIL");
    }
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <IndividualEdit submitTest={submitTest} />
      </div>
    </div>
  );
};

export default EditList;
