// slice/onBoard.js
import { createSlice } from "@reduxjs/toolkit";

const initialOnBoardState = {
  signUpData: { email: "" },
  loginData: { email: "", password: "" },
  forgotPasswordData: { email: "" },
};

export const onBoard = createSlice({
  name: "onBoard",
  initialState: initialOnBoardState,
  reducers: {
    updateSignUp(state, action) {
      state.signUpData = { ...state.signUpData, ...action.payload };
    },
    updateLogIn(state, action) {
      state.loginData = { ...state.loginData, ...action.payload };
    },
    updateForgotPassword(state, action) {
      state.forgotPasswordData = {
        ...state.forgotPasswordData,
        ...action.payload,
      };
    },
  },
});

export const { updateSignUp, updateLogIn, updateForgotPassword } =
  onBoard.actions;
export const onBoardReducer = onBoard.reducer;
