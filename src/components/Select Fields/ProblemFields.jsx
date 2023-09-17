import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box, Button, Divider } from "@mui/material";
import Add from "./Popup/Add";

const ProblemFields = () => {
  return (
    <Box>
      <DialogTitle
        sx={{ m: 0, p: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Box component="span">Problem Fields</Box> <Add />
      </DialogTitle>
      {/* <DialogContent dividers></DialogContent> */}
      <Divider orientation="horizontal" />
    </Box>
  );
};
export default ProblemFields;
