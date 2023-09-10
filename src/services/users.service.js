import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsers } from "../features/usersSlice";

const BASE_URL = "https://d01b-37-252-90-50.ngrok-free.app";

export const usersApi = createAsyncThunk("user", async (user, { dispatch }) => {
  const response = await axios.get(`${BASE_URL}/api/users`);
  // .then((resp) => resp.data)
  // .catch((err) => {
  //   console.log("my error");
  // });
  dispatch(getUsers(response.data));
});
