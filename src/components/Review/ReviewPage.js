import React from "react";
import ReviewCard from "./ReviewCard";
import classes from "./ReviewPage.module.css";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { Fragment } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteModal from "../DeleteSet/DeleteModal";

const ITEM_HEIGHT = 48;

const ReviewPage = () => {
  const nav = useNavigate();

  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteModalHandler = () => {
    showDeleteModal ? setShowDeleteModal(false) : setShowDeleteModal(true);
    handleClose();
  };

  const returnHandler = () => {
    nav("/reviewset");
  };

  const editNavHandler = () => {
    nav("/edit/" + pathName);
  };

  const reviewModeNavHandler = () => {
    nav("/reviewmode/" + pathName);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      {showDeleteModal && (
        <DeleteModal deleteModalHandler={deleteModalHandler} />
      )}
      <div className={classes.homepage}>
        <div className={classes.mainbackground}>
          <div className={classes.headerButtons}>
            <div className={classes.backButton}>
              <ArrowBackIcon onClick={returnHandler} />
            </div>
            <div className={classes.menuRight}>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                MenuListProps={{
                  "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                }}
              >
                <MenuItem key={0} onClick={editNavHandler}>
                  {"Edit Set"}
                </MenuItem>
                <MenuItem key={1} onClick={deleteModalHandler}>
                  {"Delete Set"}
                </MenuItem>
              </Menu>
            </div>
          </div>
          <ReviewCard />
          <div className={classes.buttonstack}>
            <button onClick={reviewModeNavHandler}>Review Mode</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ReviewPage;
