import { createSlice } from "@reduxjs/toolkit";

const initialState = {token: localStorage.getItem('user')};

const authSlice = createSlice({
  name: "Slice for Token",
  initialState,
  reducers: {
    addToken: (state, action) => {
      (state.token = action.payload),
        localStorage.setItem("user", action.payload);
    },
    removeToken: (state) => {
      (state.token = null), localStorage.setItem("user", "");
    },
  },
});

export const {addToken, removeToken} = authSlice.actions;
export default authSlice.reducer;

