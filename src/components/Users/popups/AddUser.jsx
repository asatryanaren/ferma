import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";

import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa";
import { Box, InputLabel, TextField } from "@mui/material";
import MySelect from "../../Helpers/Styles/Select";
import { createUser } from "../../../services/registredUsers.service";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../features/loginSlice";

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
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("editor");
  const [firstName, setFirstname] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const changeEmail = (e) => setEmail(e.target.value);
  const changeRole = (e) => setRole(e.target.value);
  const changeFirstName = (e) => setFirstname(e.target.value);
  const changeLastName = (e) => setLastName(e.target.value);

  const token = useSelector(selectToken);

  const addNewUser_And_close = () => {
    const user = { role, firstName, lastName, email };
    dispatch(createUser({ user, token }));
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          color: "white",
          backgroundColor: "#00A470",
          textTransform: "none",
          borderRadius: "2px",
          border: "none",
          "&:hover": { backgroundColor: "#50C878", border: "none" },
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
          sx={{ m: 0, p: 2, width: "500px", fontSize: "16px" }}
          id="customized-dialog-title"
        >
          Add
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
            value={email}
            onChange={changeEmail}
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
              Role
            </InputLabel>
          </Box>
          <MySelect
            items={["admin", "editor"]}
            valueRole={role}
            changeRole={setRole}
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
              First Name
            </InputLabel>
          </Box>
          <TextField
            type="text"
            size="small"
            value={firstName}
            onChange={changeFirstName}
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
            value={lastName}
            onChange={changeLastName}
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
            onClick={addNewUser_And_close}
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
