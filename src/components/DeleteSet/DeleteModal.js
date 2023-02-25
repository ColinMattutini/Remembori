import React from "react";
import Modal from "../UI/Modal";
import classes from "./DeleteModal.module.css";

const DeleteModal = (props) => {
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
          <button>Delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
