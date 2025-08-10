import { useState } from "react";
import {
  LSizeSBWeight,
  SSizeMWeight,
  SSizeRWeight,
  VSSizeMWeight,
} from "../../components/typography/typography";
import OnBoard from "./onBoard";

import StyledButton from "../../components/button/button";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import StyledTextField from "../../components/textField/textField";
import {
  ForgotLink,
  LoginBox,
  LoginContainer,
  LogInTitle,
} from "./logIn.style";
import { QueryContainer } from "./signUp.styles";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here (e.g., API call)
    console.log("Requesting password reset for email:", email);
  };

  return (
    <OnBoard>
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
    </OnBoard>
  );
};

export default ForgotPassword;
