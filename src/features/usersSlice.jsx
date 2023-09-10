import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: null,
};
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      console.log(action.payload, "payload");
      state.usersData = action.payload;
    },
  },
});

export const selectUsersData = (state) => state.usersSlice.usersData;

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;
