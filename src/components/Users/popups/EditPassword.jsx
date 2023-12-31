import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { BiReset } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Tooltip } from "@mui/material";
import { resetUserPassword } from "../../../services/registredUsers.service";
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

const EditPassword = ({ email }) => {
  const [open, setOpen] = React.useState(false);
  const clickOpen = () => setOpen(true);
  const close = () => setOpen(false);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const resetPassword_and_close = () => {
    dispatch(resetUserPassword({ token, email }));
    setOpen(false);
  };

  return (
    <>
      {/* tooltip error */}
      {/* <Tooltip title="Reset Password" placement="top" arrow> */}
      <Typography>
        <Button
          onClick={clickOpen}
          sx={{
            minWidth: "0px",
            fontSize: "20px",
            color: "#00A470",
            p: "0px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <BiReset />
        </Button>
      </Typography>
      {/* </Tooltip> */}
      <BootstrapDialog
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: "absolute",
            right: 8,
            top: 11,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <AiOutlineClose />
        </IconButton>
        <DialogContent dividers>
          <Typography
            gutterBottom
            sx={{
              fontSize: "22px",
              mr: "22px",
              textAlign: "center",
            }}
          >
            This action will unset current password and will send an email with
            link to create a new password
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={close}
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
            onClick={resetPassword_and_close}
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
export default EditPassword;
