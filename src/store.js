import { configureStore } from "@reduxjs/toolkit";
import { onBoardReducer } from "./slice/onBoard";

export const store = configureStore({
  devTools: true,
  reducer: {
    onBoard: onBoardReducer,
  },
});
