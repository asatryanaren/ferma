import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:api/5000/auth/login";
export const loginAPI = createAsyncThunk(
  "posts",
  async (user, { dispatch }) => {
    const { email, password, navigate } = user;
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.data);
    const loggedInUser = response?.find(
      (user) => email === user.email && password === user.password
    );
    if (loggedInUser) {
      localStorage.setItem("email", email);
      localStorage.setItem("userId", loggedInUser.id);
      dispatch(updateUser(loggedInUser));
      navigate("/posts");
    } else {
      dispatch(addErrorMessage());
    }
  }
);
