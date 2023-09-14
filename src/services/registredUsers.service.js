import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsers } from "../features/RegistredUsers";

const BASE_URL = "https://d01b-37-252-90-50.ngrok-free.app";

export const getUsersApi = createAsyncThunk(
  "users/fetchUsers",
  async (token, { dispatch }) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/users`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUsers(response.data));
    } catch (error) {
      console.error("my error");
    }
  }
);
