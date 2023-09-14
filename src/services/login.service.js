import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authErrors, setCredendials } from "../features/loginSlice";

const BASE_URL = "https://d01b-37-252-90-50.ngrok-free.app";

export const loginedUser = createAsyncThunk(
  "user",
  async (user, { dispatch }) => {
    const { email, password } = user;

    if (email && password) {
      await axios
        .post(`${BASE_URL}/api/auth/login`, {
          email,
          password,
        })
        .then((resp) => dispatch(setCredendials(resp)))
        .catch((err) => dispatch(authErrors(err.response)));
    }
  }
);
