import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Box, Typography } from "@mui/material";

import { AiOutlineDelete } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { deleteUser } from "../../../services/registredUsers.service";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../../features/loginSlice";

const DeleteUser = ({ role, id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleClose = () => setAnchorEl(null);
  const delete_and_close = () => {
    setAnchorEl(null);
    dispatch(deleteUser({ id, token }));
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        disabled={role === "admin"}
        sx={{
          border: "1px solid red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "2px",
          fontSize: "18px",
          minWidth: "30px",
          height: "30px",
          color: "red",
          p: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:disabled": {
            border: "1px solid #D9D9D9",
            backgroundColor: "#F5F5F5",
            color: "#D0D0D0",
          },
        }}
      >
        <AiOutlineDelete />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            padding: "16px",
            borderRadius: "2px",
            top: "none",
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box component="span" sx={{ mt: "3px", mr: "7px" }}>
            <BsFillExclamationCircleFill style={{ color: "#faad14" }} />
          </Box>
          <Typography sx={{ fontSize: "14px", color: "rgba(0,0,0,.85)" }}>
            Delete this user?
          </Typography>
        </Box>
        <Box sx={{ textAlign: "end" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              fontSize: "14px",
              borderRadius: "2px",
              border: "1px solid #d9d9d9",
              p: "1.5px 5px ",
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
            onClick={delete_and_close}
            autoFocus
            sx={{
              backgroundColor: "#1da57a",
              color: "white",
              fontSize: "14px",
              borderRadius: "2px",
              p: "2px 5px",
              minWidth: "40px",
              ml: "10px",
              "&:hover": { backgroundColor: "#3db389" },
            }}
          >
            Ok
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};
export default DeleteUser;
