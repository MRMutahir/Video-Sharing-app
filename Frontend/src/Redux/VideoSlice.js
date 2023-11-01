import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};
export const VideoSlice = createSlice({
  name: "video",
});

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    FetchStart: (state) => {
      state.loading = true;
    },
    FetchSucces: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    FetchFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { LoginStart, LoginSucces, LoginFailure, Logout } =
  videoSlice.actions;
export default videoSlice.reducer;
