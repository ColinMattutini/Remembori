import React from "react";
import NotesEditor from "./NotesEditor";
import classes from "./NotesBackground.module.css";

const NotesBackground = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.mainbackground}>
        <NotesEditor />
      </div>
    </div>
  );
};

export default NotesBackground;
