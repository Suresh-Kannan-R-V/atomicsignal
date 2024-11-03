import React, { useState } from "react";
import OnBoard from "./onBoard";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import {
  LSizeSBWeight,
  SSizeMWeight,
  SSizeRWeight,
  VSSizeMWeight,
} from "../../components/typography/typography";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  ForgotLink,
  LoginBox,
  LoginContainer,
  LogInTitle,
} from "./logIn.style";
import StyledInputLabel from "../../components/inputLabel/InputLabel";
import StyledTextField from "../../components/textField/TextField";
import StyledButton from "../../components/button/button";
import { QueryContainer } from "./signUp.styles";
import { useDispatch, useSelector } from "react-redux";
import { updateForgotPassword } from "../../slice/onBoard";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.onBoard.forgotPasswordData.email);

  const handleEmailChange = (e) => {
    dispatch(updateForgotPassword({ email: e.target.value }));
  };

  const handleForgotPassword = () => {
    // Dispatch action to submit forgot password form (e.g., API call)
    console.log("Requesting password reset for email:", email);
  };

  return (
    <OnBoard
      children={
        <LoginContainer>
          <LogInTitle>
            <LSizeSBWeight content={"Forgot Password"} />
            <VSSizeMWeight
              content={`Provide us the registered email to reset your password.`}
              color={"secondary"}
            />
          </LogInTitle>
          <LoginBox>
            <StyledInputLabel>Email</StyledInputLabel>
            <StyledTextField
              size="small"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            ></StyledTextField>
          </LoginBox>
          <StyledButton
            size="large"
            variant="contained"
            fullWidth
            onClick={handleForgotPassword}
          >
            <SSizeMWeight content={"Get Link"} />
          </StyledButton>
          <QueryContainer>
            <SSizeRWeight
              content={`Remembered the password?`}
              color="secondary"
            />
            <ForgotLink to="/login">Log in</ForgotLink>
          </QueryContainer>
        </LoginContainer>
      }
    />
  );
};

export default ForgotPassword;
