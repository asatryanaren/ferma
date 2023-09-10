import Mytable from "../Helpers/MyTable";
import { useEffect } from "react";
import { usersApi } from "../../services/users.service";
import { useDispatch } from "react-redux";
import AddUser from "./popups/AddUser";
import { Pagination, Stack } from "@mui/material";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersApi());
  }, []);
  return (
    <>
      <AddUser />
      <Mytable />
      <Stack spacing={2}>
        <Pagination shape="rounded" />
      </Stack>
    </>
  );
};
export default Users;
