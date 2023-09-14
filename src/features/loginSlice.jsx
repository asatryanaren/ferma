import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("current-user") ?? null,
  token: JSON.parse(localStorage.getItem("token")) ?? null,
  currentUser: localStorage.getItem("current-user") ?? null,
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredendials: (state, action) => {
      const { data, status } = action.payload;
      if (status === 200) {
        localStorage.setItem("current-user", JSON.stringify(data));
        localStorage.setItem("token", JSON.stringify(data.token));
        state.token = data.token;
        state.isLoggedIn = true;
      }
    },
    authErrors: (state, action) => {
      const { status } = action.payload;
      if (status === 403) {
        alert("wrong password");
      }
      if (status === 404) {
        alert("wrong email");
      }
    },
    logOut: (state) => {
      state.isLoggedIn = null;
      state.token = null;
      localStorage.clear();
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
export const selectToken = (state) => state.loginSlice.token;

export const { setCredendials, authErrors, logOut } = loginSlice.actions;
export default loginSlice.reducer;
