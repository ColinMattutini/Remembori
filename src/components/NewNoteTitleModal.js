import React from "react";
import Modal from "./UI/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
var uuid = require("uuid");

const NewNoteTitleModal = (props) => {
  const [noteTitle, setNoteTitle] = useState("");
  const nav = useNavigate();

  const noteTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const newNoteNav = () => {
    let noteId = uuid.v1();
    let noteName = "TXT NOTES " + noteTitle;
    let content = {
      noteId: noteId,
      type: "doc",
      content: [{ type: "paragraph" }],
    };
    localStorage.setItem(
      "TXT NOTES " + noteTitle,
      JSON.stringify({
        noteId: noteId,
        type: "doc",
        content: [{ type: "paragraph" }],
      })
    );
    postNotes(noteId, noteName, content);
    nav("/notesedit/TXT NOTES " + noteTitle);
    props.newNoteStateHandler();
  };

  const postNotes = async (noteId, noteName, content) => {
    let token = localStorage.getItem(
      "CognitoIdentityServiceProvider.5ckk48ttthca3bm3v5dlmapvbi.b29a2bad-578e-45f1-90fb-26e75512103a.idToken"
    );
    const response = await fetch(
      "https://ridrmxlnkl.execute-api.us-east-1.amazonaws.com/Prod/note",
      {
        method: "POST",
        body: JSON.stringify({
          userId: localStorage.getItem("Cognitousername"),
          noteId: noteId,
          noteName: noteName,
          content: content,
        }),
        headers: {
          authToken: token,

          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log("NOTE POSTED");
    } else {
      console.log("FAIL");
    }
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
