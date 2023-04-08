import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const DropDownMenu = (props) => {
  const [cards, setCards] = useState("");
  const [name, setName] = useState(Object.keys(localStorage));
  let fixName = name.filter((e) => !e.includes("TXT NOTES "));

  const handleChange = (event) => {
    setCards(event.target.value);
    props.getSetName(cards);
    console.log(fixName);
  };

  useEffect(() => {
    props.getSetName(cards);
  }, [cards]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Card Set
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={cards}
          onChange={handleChange}
          autoWidth
          label="Card Set"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {fixName.map((content, index) => (
            <MenuItem value={content}>{content}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownMenu;
