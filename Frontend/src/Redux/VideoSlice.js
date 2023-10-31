import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
export const VideoSlice = createSlice({
  name: "video",
});

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    LoginStart: (state) => {
      state.loading = true;
    },
    LoginSucces: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    LoginFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    Logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { LoginStart, LoginSucces, LoginFailure, Logout } =
  videoSlice.actions;
export default videoSlice.reducer;
