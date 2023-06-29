import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

export const store = configureStore({
  reducer: {
    setLogin: appSlice,
    loginStatus: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
