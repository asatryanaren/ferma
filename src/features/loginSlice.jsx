import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const cookies = new Cookies();

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") ?? false,
  token: null,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredendials: (state, action) => {
      const { token } = action.payload;
      const decoded = jwtDecode(token);
      state.token = token;
      if (decoded) {
        cookies.set("jwt_authorization", token, {
          expires: new Date(decoded.exp * 1000),
        });
        state.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", JSON.stringify(state.isLoggedIn));
      }
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      cookies.remove("jwt_authorization");
      localStorage.clear();
    },
    addErrorMessage: (state) => {
      state.errorMessage = "Email or password is not correct";
    },
  },
  // extraReducers: {
  // [loginedUser.pending]: (state) => {
  //   state.status = "loading";
  // },
  // [loginedUser.fulfilled]: (state, action) => {
  //   state.status = "resolved";
  //   state.data = action.payload;
  // },
  // [loginedUser.rejected]: (state, action) => {},
  // },
});

export const selectCurreentUser = (state) => state.loginSlice.user;
export const selectIsLoggedIs = (state) => state.loginSlice.isLoggedIn;

export const { setCredendials, logOut } = loginSlice.actions;
export default loginSlice.reducer;
