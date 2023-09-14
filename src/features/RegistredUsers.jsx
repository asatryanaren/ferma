import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: null,
  quantitUsers: null,
};
const RegistredUsersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.usersData = action.payload;
      state.quantitUsers = action.payload.length;
    },
  },
});

export const selectUsersData = (state) => state.RegistredUsersSlice.usersData;
export const selectQuantitUsers = (state) =>
  state.RegistredUsersSlice.quantitUsers;

export const { getUsers } = RegistredUsersSlice.actions;
export default RegistredUsersSlice.reducer;
