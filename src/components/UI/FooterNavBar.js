import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DescriptionIcon from "@mui/icons-material/Description";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TimerIcon from "@mui/icons-material/Timer";
import PersonIcon from "@mui/icons-material/Person";
import AddButtonMenu from "./AddButtonMenu";
import classes from "./FooterNavBar.module.css";
import AuthModal from "../Authentication/AuthModal";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import NewNoteTitleModal from "../NewNoteTitleModal";
import { useContext } from "react";
import { AccountContext } from "../Authentication/Account";
import { useEffect } from "react";
import LogoutMenu from "./LogoutMenu";

const FooterNavBar = (props) => {
  const { getSession, logout } = useContext(AccountContext);
  const [status, setStatus] = useState(false);
  const [value, setValue] = useState();
  const [auth, setAuth] = useState(false);
  const [newSetState, setNewSetState] = useState(false);

  const nav = useNavigate();

  const authModalHandler = () => {
    auth ? setAuth(false) : setAuth(true);
  };

  const createHandler = () => {
    nav("/createset");
  };

  const reviewHandler = () => {
    nav("/reviewset");
  };

  const homeHandler = () => {
    nav("/");
  };

  const newNoteStateHandler = () => {
    newSetState ? setNewSetState(false) : setNewSetState(true);
  };

  const newLogout = () => {
    logout();
    nav("/");
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    getSession().then((session) => {
      setStatus(true);
    });
  }, [authModalHandler]);

  return (
    <div>
      {newSetState && (
        <NewNoteTitleModal newNoteStateHandler={newNoteStateHandler} />
      )}
      {auth && <AuthModal authModalHandler={authModalHandler} />}
      <div className={classes.navBar}>
        <Box sx={{ width: "100%" }}>
          <BottomNavigation
            sx={{ width: "100%" }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              onClick={homeHandler}
              label="Home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              label="Cards"
              onClick={reviewHandler}
              icon={<CreditCardIcon />}
            />

            <AddButtonMenu
              newNoteStateHandler={newNoteStateHandler}
              createHandler={createHandler}
            />

            <BottomNavigationAction label="Notes" icon={<DescriptionIcon />} />
            {!status && (
              <BottomNavigationAction
                onClick={authModalHandler}
                label="Account"
                icon={<PersonIcon />}
              />
            )}
            {status && (
              <BottomNavigationAction
                onClick={newLogout}
                label="Logout"
                icon={<PersonIcon />}
              />
            )}
          </BottomNavigation>
        </Box>
      </div>
    </div>
  );
};

export default FooterNavBar;
