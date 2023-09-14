import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import RegistredUsersSlice from "../features/RegistredUsers";

export const store = configureStore({
  reducer: {
    loginSlice,
    RegistredUsersSlice,
  },
});
