import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/button/button";
import StyledInputLabel from "../../components/inputLabel/inputLabel";
import PasswordField from "../../components/textField/passwordInput";
import StyledTextField from "../../components/textField/textField";
import {
  LSizeSBWeight,
  SSizeMWeight,
  VSSizeMWeight,
} from "../../components/typography/typography";
import {
  ForgotLink,
  LoginBox,
  LoginContainer,
  LogInTitle,
  QueryContainer,
} from "./logIn.style";
import OnBoard from "./onBoard";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = () => {
    console.log("Logging in with email:", email, "password:", password);
    navigate("/profile");
  };

  return (
    <OnBoard>
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
            value={email}
            onChange={handleEmailChange}
          ></StyledTextField>
          <StyledInputLabel>Password</StyledInputLabel>
          <PasswordField
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <QueryContainer>
            <ForgotLink to="/forgotpassword">Forgot Password?</ForgotLink>
          </QueryContainer>
        </LoginBox>
        <StyledButton
          size="large"
          variant="contained"
          fullWidth
          onClick={handleLogIn}
        >
          <SSizeMWeight content={"Log in"} />
        </StyledButton>
      </LoginContainer>
    </OnBoard>
  );
};

export default LogIn;
