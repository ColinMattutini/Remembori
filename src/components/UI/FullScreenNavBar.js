import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "../Authentication/Account";
import { useEffect } from "react";
import { Fragment } from "react";
import NewNoteTitleModal from "../NewNoteTitleModal";

const drawerWidth = 300;

export default function FullScreenNavBar() {
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

  const noteListingNav = () => {
    nav("/notesreview");
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
    <Fragment>
      {newSetState && (
        <NewNoteTitleModal newNoteStateHandler={newNoteStateHandler} />
      )}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={homeHandler}>
                <ListItemIcon>
                  {" "}
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={createHandler}>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={"New Flashcard Set"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={newNoteStateHandler}>
                <ListItemIcon>
                  <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={"New Notes"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={reviewHandler}>
                <ListItemIcon>
                  <CreditCardIcon />
                </ListItemIcon>
                <ListItemText primary={"Cards"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={noteListingNav}>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary={"Notes"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"Account"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </Box>
    </Fragment>
  );
}
