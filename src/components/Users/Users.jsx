import Mytable from "../Helpers/MyTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddUser from "./popups/AddUser";
import { getUsersApi } from "../../services/registredUsers.service";
import { selectToken } from "../../features/loginSlice";
import { Pagination, Box } from "@mui/material";
import {
  selectQuantityUsers,
  selectUsersData,
} from "../../features/RegistredUsers";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const usersData = useSelector(selectUsersData)?.length;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;

  const pageQty = useSelector(selectQuantityUsers);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(pageQty / itemsPerPage);

  const PageChange = (_, num) => setSearchParams({ page: num });

  useEffect(() => {
    dispatch(getUsersApi({ token, itemsPerPage, page }));
  }, [page, usersData]);

  return (
    <>
      <AddUser />
      <Mytable />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={PageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
          siblingCount={1}
          boundaryCount={1}
          sx={{
            mt: "20px",
            "& .MuiPaginationItem-root": {
              color: "#D3D4D7",
              borderColor: "#D3D4D7",
              backgroundColor: "white",
              borderRadius: "2px",
            },
            "& .Mui-selected": {
              color: "#1da57a",
              borderColor: "#1da57a",
              backgroundColor: "white",
              borderRadius: "2px",
            },
          }}
        />
      </Box>
    </>
  );
};
export default Users;
