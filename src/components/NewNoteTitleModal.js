import React from "react";
import Modal from "./UI/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewNoteTitleModal = (props) => {
  const [noteTitle, setNoteTitle] = useState("");
  const nav = useNavigate();

  const noteTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const newNoteNav = () => {
    localStorage.setItem(
      "TXT NOTES " + noteTitle,
      JSON.stringify({ type: "doc", content: [{ type: "paragraph" }] })
    );
    nav("/notesedit/TXT NOTES " + noteTitle);
    props.newNoteStateHandler();
  };

  return (
    <Modal>
      <button onClick={props.newNoteStateHandler}>X</button>
      <div>
        <h1>Notes Title</h1>
        <input onChange={noteTitleHandler}></input>
        <button onClick={newNoteNav}>Submit</button>
      </div>
    </Modal>
  );
};

export default NewNoteTitleModal;
