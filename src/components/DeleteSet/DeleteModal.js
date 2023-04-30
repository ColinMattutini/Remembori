import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../UI/Modal";
import classes from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const nav = useNavigate();

  const deleteHandler = () => {
    let cardSet = JSON.parse(localStorage.getItem(pathName));
    let setId = cardSet[0].setId;
    localStorage.removeItem(pathName);
    deleteSet(setId);
    nav("/reviewset");
  };

  const deleteSet = async (setId) => {
    let token = localStorage.getItem(
      "CognitoIdentityServiceProvider.5ckk48ttthca3bm3v5dlmapvbi.b29a2bad-578e-45f1-90fb-26e75512103a.idToken"
    );
    const response = await fetch(
      "https://ridrmxlnkl.execute-api.us-east-1.amazonaws.com/Prod/flashcard",
      {
        method: "DELETE",
        body: JSON.stringify({
          setId: setId,
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
    <Modal>
      <div className={classes.textAlign}>
        <h1>Are you sure you want to delete this set?</h1>
      </div>
      <div className={classes.buttonFloat}>
        <div className={classes.cancelButton}>
          <button onClick={props.deleteModalHandler}>Cancel</button>
        </div>
        <div className={classes.deleteButton}>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
