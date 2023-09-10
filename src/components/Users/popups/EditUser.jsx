import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";

import { AiOutlineClose, AiOutlineEdit } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa";
import { Box, InputLabel, TextField } from "@mui/material";
import MySelect from "../../Helpers/Styles/Select";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddUser = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{
          minWidth: "0px",
          fontSize: "20px",
          color: "#00A470",
          p: "0px",
          m: "0 13px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <AiOutlineEdit />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            width: "500px",
            fontSize: "16px",
            fontWeight: "400",
          }}
          id="customized-dialog-title"
        >
          Edit
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            fontSize: "20px",
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <AiOutlineClose />
        </IconButton>
        <DialogContent dividers>
          <Box
            sx={{
              color: "red",
              fontSize: "8px",
              display: "flex",
              alignItems: "center",
              m: "5px 0 10px 0",
            }}
          >
            <FaStarOfLife />
            <InputLabel
              sx={{
                display: "inline-block",
                mt: "6px",
                ml: "3px",
                fontSize: "15px",
              }}
            >
              Email
            </InputLabel>
          </Box>
          <TextField
            type="email"
            size="small"
            fullWidth
            InputProps={{ style: { borderRadius: 0, p: 0 } }}
          />
          <Box
            sx={{
              color: "red",
              fontSize: "8px",
              display: "flex",
              alignItems: "center",
              m: "20px 0 10px 0",
            }}
          >
            <FaStarOfLife />
            <InputLabel
              sx={{
                display: "inline-block",
                mt: "6px",
                ml: "3px",
                fontSize: "15px",
              }}
            >
              Role
            </InputLabel>
          </Box>
          <MySelect />
          <Box
            sx={{
              color: "red",
              fontSize: "8px",
              display: "flex",
              alignItems: "center",
              m: "20px 0 10px 0",
            }}
          >
            <FaStarOfLife />
            <InputLabel
              sx={{
                display: "inline-block",
                mt: "6px",
                ml: "3px",
                fontSize: "15px",
              }}
            >
              First Name
            </InputLabel>
          </Box>
          <TextField
            type="text"
            size="small"
            fullWidth
            InputProps={{ sx: { borderRadius: 0 } }}
          />
          <Box
            sx={{
              color: "red",
              fontSize: "8px",
              display: "flex",
              alignItems: "center",
              m: "20px 0 10px 0",
            }}
          >
            <FaStarOfLife />
            <InputLabel
              sx={{
                display: "inline-block",
                mt: "6px",
                ml: "3px",
                fontSize: "15px",
              }}
            >
              Last Name
            </InputLabel>
          </Box>
          <TextField
            type="text"
            size="small"
            fullWidth
            InputProps={{ sx: { borderRadius: 0 } }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              fontSize: "14px",
              borderRadius: "2px",
              border: "1px solid #d9d9d9",
              p: "3px 10px ",
              minWidth: "50px",
              textTransform: "none",
              color: "#7E7E7E",
              "&:hover": {
                border: "1px solid #1da57a",
                color: "#1da57a",
                backgroundColor: "transparent",
              },
            }}
          >
            Сancel
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              backgroundColor: "#1da57a",
              color: "white",
              fontSize: "14px",
              borderRadius: "2px",
              p: "4px 10px",
              minWidth: "50px",
              "&:hover": { backgroundColor: "#3db389" },
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};
export default AddUser;
