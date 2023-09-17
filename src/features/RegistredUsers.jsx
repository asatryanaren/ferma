import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: null,
  quantityUsers: null,
};
const RegistredUsersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.usersData = action.payload;
    },
    quantityUsers: (state, action) => {
      state.quantityUsers = action.payload.length;
    },
  },
});

export const selectUsersData = (state) => state.RegistredUsersSlice.usersData;
export const selectQuantityUsers = (state) =>
  state.RegistredUsersSlice.quantityUsers;

export const { getUsers, quantityUsers } = RegistredUsersSlice.actions;
export default RegistredUsersSlice.reducer;
