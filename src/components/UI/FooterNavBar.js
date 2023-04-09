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

const FooterNavBar = (props) => {
  const [value, setValue] = useState();

  return (
    <div className={classes.hold}>
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          sx={{ width: "100%" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Timer" icon={<TimerIcon />} />
          <BottomNavigationAction
            label="Cards"
            onClick={props.reviewHandler}
            icon={<CreditCardIcon />}
          />
          <BottomNavigationAction
            icon={
              <AddButtonMenu
                newNoteStateHandler={props.newNoteStateHandler}
                createHandler={props.createHandler}
              />
            }
          />
          <BottomNavigationAction label="Notes" icon={<DescriptionIcon />} />
          <BottomNavigationAction label="Account" icon={<PersonIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default FooterNavBar;
