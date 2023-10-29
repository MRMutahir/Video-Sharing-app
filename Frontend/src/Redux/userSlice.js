import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isloading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginStart: (state) => {
      state.loading = true;
    },
    LoginSucces: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    LoginFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    Logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { LoginStart, LoginSucces, LoginFailure, Logout } =
  userSlice.actions;
  export default userSlice.reducer;
