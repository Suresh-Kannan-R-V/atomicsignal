import React, { useState } from "react";
import OnBoard from "./onBoard";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import {
  LSizeSBWeight,
  SSizeMWeight,
  VSSizeMWeight,
} from "../../components/typography/typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  ForgotLink,
  LoginBox,
  LoginContainer,
  LogInTitle,
  QueryContainer,
} from "./logIn.style";
import StyledInputLabel from "../../components/inputLabel/InputLabel";
import StyledTextField from "../../components/textField/TextField";
import StyledButton from "../../components/button/button";
import PasswordField from "../../components/textField/passwordInput";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <OnBoard
      children={
        <LoginContainer>
          <LogInTitle>
            <LSizeSBWeight content={"Welcome!"} />
            <VSSizeMWeight
              content={`One positive feedback per day or week can make us grow exponentially`}
              color={"secondary"}
            />
          </LogInTitle>
          <LoginBox>
            <StyledInputLabel>Email</StyledInputLabel>
            <StyledTextField
              size="small"
              placeholder="Email"
              fullWidth
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="start">kg</InputAdornment>
                  ),
                },
              }}
            ></StyledTextField>
            <StyledInputLabel>Password</StyledInputLabel>
            <PasswordField placeholder="Password" />
            <QueryContainer>
              <ForgotLink to="/forgotpassword">Forgot Password?</ForgotLink>
            </QueryContainer>
          </LoginBox>
          <StyledButton size="large" variant="contained" fullWidth>
            <SSizeMWeight content={"Log in"} />
          </StyledButton>
        </LoginContainer>
      }
    />
  );
};

export default LogIn;
