import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MySelect = ({ items }) => {
  const [age, setAge] = React.useState("");
  const handleChange = (e) => setAge(e.target.value);

  return (
    <Box sx={{ minWidth: 120, mt: "10px", mb: "10px", borderRadius: "0px" }}>
      <FormControl fullWidth size="small">
        <Select fullWidth onChange={handleChange} sx={{ borderRadius: "0px" }}>
          {items?.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
export default MySelect;
