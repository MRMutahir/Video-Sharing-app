import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    FetchStart: (state) => {
      state.loading = true;
    },  
    FetchSucces: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    FetchFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { FetchStart, FetchSucces, FetchFailure } = videoSlice.actions;
export default videoSlice.reducer;
