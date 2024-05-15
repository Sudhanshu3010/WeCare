import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userOTP: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserOTP: (state, action) => {
      state.userOTP = action.payload;
    },
  },
});

export const { setUser, setUserOTP } = userSlice.actions;
export default userSlice.reducer;
