import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoggedIn: localStorage.getItem("email") ?? false,
  errorMessage: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getEmailUser: (state, action) => {
      state.emailUser = action.payload;
    },
    getUsersData: (state, action) => {
      state.data = action.payload;
    },
    updateUser: (state, action) => {
      //   state.user = action.payload.loggedInUser;
      state.isLoggedIn = true;
      state.errorMessage = "";
    },
    addErrorMessage: (state) => {
      state.errorMessage = "Email or password is not correct";
    },
  },
});
export const {} = loginSlice.actions;
export default loginSlice.reducer;
