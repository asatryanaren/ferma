import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { AiOutlineClose } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { TextField } from "@mui/material";
import InputNumber from "../Helpers/Styles/InputNumber";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddWeigth = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          color: "white",
          backgroundColor: "#00A470",
          minWidth: "30px",
          pl: "0",
          pr: "0",
          "&:hover": { backgroundColor: "#50C878" },
        }}
      >
        {<BsPlusCircle />}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, width: "400px" }}
          id="customized-dialog-title"
        >
          Add Weight
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <AiOutlineClose />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>Weight</Typography>
          <InputNumber style={{ width: "180px" }} />
          <Typography gutterBottom sx={{ mt: "20px" }}>
            Date
          </Typography>
          <TextField
            type="date"
            inputProps={{
              style: {
                padding: 7,
                width: "200px",
              },
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              outline: "rgba(0, 0, 0, 0.87)",
              color: "rgba(0, 0, 0, 0.87)",
              "&:hover": { backgroundColor: "#50C878", color: "white" },
            }}
          >
            Сancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              backgroundColor: "#00A570",
              color: "white",
              "&:hover": { backgroundColor: "#50C878" },
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default AddWeigth;
