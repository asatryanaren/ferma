import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { Box, TextField } from "@mui/material";
import InputNumber from "../Helpers/Styles/InputNumber";
import MySelect from "../Helpers/Styles/Select";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddAnimal = () => {
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
          textTransform: "none",
          "&:hover": { backgroundColor: "#50C878" },
        }}
      >
        {<BsPlusCircle style={{ marginRight: "10px", fontSize: "18px" }} />} Add
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, minWidth: "550px" }}
          id="customized-dialog-title"
        >
          Add {"chekbox petqa dnem"}
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
        <DialogContent dividers sx={{ display: "flex" }}>
          <Box sx={{ width: "50%", mr: "10px" }}>
            <Typography gutterBottom>Animal Type</Typography>
            <MySelect />
            <Typography gutterBottom>Mother</Typography>
            <MySelect text="Select a mother" />
            <Typography gutterBottom>Male count</Typography>
            <InputNumber />
            <Typography sx={{}}>Birth date</Typography>
            <TextField
              type="date"
              inputProps={{
                style: {
                  padding: 7,
                  width: "200px",
                },
              }}
            />
          </Box>
          <Box sx={{ width: "50%", ml: "10px" }}>
            <Typography>Animal Sub Type</Typography>
            <MySelect />
            <Typography gutterBottom>Father</Typography>
            <MySelect text="Select a father" />
            <Typography gutterBottom>Female count</Typography>
            <InputNumber />
          </Box>
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
export default AddAnimal;
