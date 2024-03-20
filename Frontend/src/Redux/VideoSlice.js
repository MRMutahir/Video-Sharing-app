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
    FetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    Like: (state, action) => {
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex((userId) => {
            userId === action.payload;
          })
        );
      }
    },
    Dislike: (state, action) => {
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload);
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex((userId) => {
            userId === action.payload;
          })
        );
      }
    },
    Subscribes: (state, action) => {
      if (state.currentUser.other.subscribedUsers.includes(action.payload)) {
        state.currentUser.other.subscribedUsers.splice(
          state.currentUser.other.subscribedUsers.findIndex(
            (channelID) => channelID === action.payload
          ),
          1
        );
      } else {
        state.currentUser.other.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const {
  FetchStart,
  FetchSucces,
  FetchFailure,
  Like,
  Dislike,
  Subscribes,
} = videoSlice.actions;
export default videoSlice.reducer;
