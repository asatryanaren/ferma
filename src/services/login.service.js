import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCredendials } from "../features/loginSlice";

const BASE_URL = "https://d01b-37-252-90-50.ngrok-free.app";

export const loginedUser = createAsyncThunk(
  "user",
  async (user, { dispatch }) => {
    const { email, password } = user;
    if (email && password) {
      const response = await axios
        .post(`${BASE_URL}/api/auth/login`, {
          email,
          password,
        })
        .then((resp) => {
          if (resp.status === 200) {
            dispatch(setCredendials(resp.data));
          }

          return resp.data;
        })
        .catch((err) => {
          if (err.response.status === 403) {
            alert("wrong password");
          }
          if (err.response.status === 404) {
            alert("wrong email");
          }
        });
    }
  }
);
