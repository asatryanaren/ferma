import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsers } from "../features/RegistredUsers";

const BASE_URL = "https://d01b-37-252-90-50.ngrok-free.app";

export const getUsersApi = createAsyncThunk(
  "users/fetchUsers",
  async (token, { dispatch }) => {
    const response = await axios.get(`${BASE_URL}/api/users`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUsers(response.data));
  }
);
export const createUser = createAsyncThunk(
  "user/createUsers",
  async ({ user, token }, { dispatch }) => {
    await axios.post(`${BASE_URL}/api/users`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUsersApi(token));
  }
);
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ({ id, token }, { dispatch }) => {
    await axios.delete(`${BASE_URL}/api/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUsersApi(token));
  }
);
export const editUser = createAsyncThunk(
  "user/editUsers",
  async ({ data, token }, { dispatch }) => {
    await axios.patch(`${BASE_URL}/api/users/${data._id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUsersApi(token));
  }
);
