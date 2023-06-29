import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  isLoggedIn: boolean | undefined;
}

const initialState = {
  isLoggedIn: undefined,
} as LoginState;

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    loginStatus: (state) => {
      state.isLoggedIn;
    },
  },
});

export const { setLogin, loginStatus } = appSlice.actions;
export default appSlice.reducer;
