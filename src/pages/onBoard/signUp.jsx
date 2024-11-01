import GoogleIcon from "../../assets/icons/google";
import OutlookIcon from "../../assets/icons/outlook";
import {
  LSizeSBWeight,
  SSizeMWeight,
  SSizeRWeight,
  VSSizeMWeight,
  VSSizeRWeight,
} from "../../components/typography/typography";
import OnBoard from "./onBoard";
import {
  LoginLink,
  OrBox,
  OrContainer,
  QueryContainer,
  SignUpBox,
  SignUpContainer,
  SignUpInputContainer,
  SignUpTitle,
  SSOButton,
  SSOContainer,
} from "./signUp.styles";
import StyledInputLabel from "../../components/inputLabel/InputLabel";
import StyledTextField from "../../components/textField/textField";
import StyledButton from "../../components/button/button";

const SignUp = () => {
  return (
    <OnBoard
      children={
        <SignUpContainer>
          <SignUpTitle>
            <LSizeSBWeight content={"Sign up"} />
            <VSSizeMWeight
              content={`You're just a few details away to set
           up a culture of feedback and thriving environment`}
              color={"secondary"}
            />
          </SignUpTitle>
          <SSOContainer>
            <SSOButton
              icon={<GoogleIcon />}
              fullWidth
              content={"Sign up with google"}
            />
            <SSOButton
              icon={<OutlookIcon />}
              fullWidth
              content={"Sign up with google"}
            />
          </SSOContainer>
          <OrContainer>
            <OrBox>
              <VSSizeRWeight content={"or"} color={"secondary"} />
            </OrBox>
          </OrContainer>
          <SignUpInputContainer>
            <SignUpBox>
              <StyledInputLabel required>Work Email</StyledInputLabel>
              <StyledTextField size="small" fullWidth></StyledTextField>
            </SignUpBox>

            <StyledButton size="large" variant="contained" fullWidth>
              <SSizeMWeight content={"Sign up"} />
            </StyledButton>
          </SignUpInputContainer>
          <QueryContainer>
            <SSizeRWeight
              content={`Already have an account?`}
              color="secondary"
            />
            <LoginLink />
          </QueryContainer>
        </SignUpContainer>
      }
    />
  );
};

export default SignUp;
