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

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
            <StyledTextField size="small" fullWidth></StyledTextField>
          </LoginBox>
          <StyledButton size="large" variant="contained" fullWidth>
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
