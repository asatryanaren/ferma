import Mytable from "../Helpers/MyTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./popups/AddUser";
import { getUsersApi } from "../../services/registredUsers.service";
import { selectToken } from "../../features/loginSlice";
import MyPagination from "../Helpers/Pagination";

const Users = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUsersApi(token));
  }, []);
  return (
    <>
      <AddUser />
      <Mytable />
      <MyPagination />
    </>
  );
};
export default Users;
