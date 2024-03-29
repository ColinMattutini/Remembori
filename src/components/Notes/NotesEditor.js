import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import "./styles.css";
import CardsTemplate from "./CardsTemplate";
import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
    </>
  );
};

const NotesEditor = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [text, setText] = useState(JSON.parse(localStorage.getItem(pathName)));
  const [cardState, setCardState] = useState(false);
  let noteId = text.noteId;

  const nav = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: text,
  });

  const saveText = () => {
    let json = editor.getJSON();
    json = { noteId: noteId, ...json };

    patchNotesRequest(noteId, json);
    json = JSON.stringify(json);
    localStorage.setItem(pathName, json);
  };

  const patchNotesRequest = async (noteId, updateValue) => {
    let token = localStorage.getItem("Cognitotoken");
    const response = await fetch(
      "https://ridrmxlnkl.execute-api.us-east-1.amazonaws.com/Prod/note",
      {
        method: "PATCH",
        body: JSON.stringify({
          noteId: noteId,
          updateKey: "content",
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

  const checkHighlighted = () => {
    const high = window.getSelection().toString();
  };

  const backHandler = () => {
    nav("/");
  };

  const cardStateHandler = () => {
    cardState ? setCardState(false) : setCardState(true);
  };

  return (
    <div>
      <div className="textEditor">
        <div className="header">
          <button onClick={backHandler}>Back</button>
          {!cardState && <MenuBar editor={editor} />}
          <button onClick={saveText}>Save</button>
          <button onClick={checkHighlighted}>HIGHLIGHTED</button>
          <button onClick={cardStateHandler}>CREATE FLASHCARDS</button>

          {cardState && <CardsTemplate />}
        </div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default NotesEditor;
