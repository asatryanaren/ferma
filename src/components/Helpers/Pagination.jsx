import { Pagination, Box } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectQuantitUsers } from "../../features/RegistredUsers";

const MyPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = useSelector(selectQuantitUsers);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const PageChange = (value) => setCurrentPage(value);

  return (
    <Box sx={{ display: "flex", justifyContent: "end" }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={PageChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        siblingCount={1}
        boundaryCount={1}
        sx={{
          mt: "20px",
          "& .MuiPaginationItem-root": {
            color: "#1da57a",
            borderRadius: "2px",
            borderColor: "#1da57a",
            backgroundColor: "white",
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
  );
};

export default MyPagination;
