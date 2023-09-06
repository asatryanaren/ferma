import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MySelect = ({ text }) => {
  const [age, setAge] = React.useState("");
  const handleChange = (e) => setAge(e.target.value);

  return (
    <Box sx={{ minWidth: 120, mt: "10px", mb: "10px", borderRadius: "0px" }}>
      <FormControl fullWidth size="small">
        <InputLabel>{text}</InputLabel>
        <Select
          fullWidth
          label={text}
          value={age}
          onChange={handleChange}
          sx={{ borderRadius: "0px" }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default MySelect;
