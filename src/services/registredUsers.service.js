import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUsers, quantityUsers } from "../features/RegistredUsers";

const BASE_URL = "https://d01b-37-252-90-50.ngrok-free.app";

export const getUsersApi = createAsyncThunk(
  "users/fetchUsers",
  async ({ token, itemsPerPage = 10, page }, { dispatch }) => {
    const response = await axios.get(
      `${BASE_URL}/api/users?page=${page}&skip=${
        (page - 1) * itemsPerPage
      }&limit=${itemsPerPage}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getUsers(response.data));
    const resp = await axios.get(`${BASE_URL}/api/users`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(quantityUsers(resp.data));
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
    dispatch(getUsersApi({ token }));
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
    dispatch(getUsersApi({ token }));
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
    dispatch(getUsersApi({ token }));
  }
);
export const resetUserPassword = createAsyncThunk(
  "user/resetUserPassword",
  async ({ token, email }) => {
    await axios.post(`${BASE_URL}/api/auth/reset-password`, email, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
);
