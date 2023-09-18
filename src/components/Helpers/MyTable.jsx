import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Box } from "@mui/material";
import EditPassword from "../Users/popups/EditPassword";
import EdithUser from "../Users/popups/EditUser";
import { useSelector } from "react-redux";
import { selectUsersData } from "../../features/RegistredUsers";
import DeleteUser from "../Users/popups/DeleteUser";

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
              <TableCell component="th">
                {user.firstName} {user.lastName}
              </TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EditPassword email={user.email} />
                  <EdithUser
                    userData={{
                      initialLastName: user.lastName,
                      initialFirstName: user.firstName,
                      initialEmail: user.email,
                      initialId: user._id,
                      initialRole: user.role,
                    }}
                  />
                  <DeleteUser role={user.role} id={user._id} />
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
