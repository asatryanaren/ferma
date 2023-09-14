import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { AiOutlineDelete } from "react-icons/ai";
import { Box, Button } from "@mui/material";
import EditPassword from "../Users/popups/EditPassword";
import EdithUser from "../Users/popups/EditUser";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../features/RegistredUsers";

const Mytable = () => {
  const users = useSelector(selectUsersData);
  return (
    <TableContainer component={Paper} sx={{ mt: "20px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
            <TableCell>Name</TableCell>
            <TableCell
              sx={{
                "&::before": {
                  content: `"Role"`,
                  display: "block",
                  borderLeft: "1px solid rgba(0,0,0,.06)",
                  pl: "15px",
                  ml: "-15px",
                },
              }}
            ></TableCell>
            <TableCell
              sx={{
                "&::before": {
                  content: `"Email"`,
                  display: "block",
                  borderLeft: "1px solid rgba(0,0,0,.06)",
                  pl: "15px",
                  ml: "-15px",
                },
              }}
            ></TableCell>
            <TableCell
              sx={{
                "&::before": {
                  content: `"Actions"`,
                  display: "block",
                  borderLeft: "1px solid rgba(0,0,0,.06)",
                  pl: "15px",
                  ml: "-15px",
                },
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user) => (
            <TableRow
              key={user.email}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": { backgroundColor: "#FAFAFA" },
              }}
            >
              <TableCell component="th">{user.firstName}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EditPassword />
                  <EdithUser />
                  <Button
                    disabled={user.role === "admin"}
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
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Mytable;
