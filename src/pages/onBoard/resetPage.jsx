import { Avatar } from "@mui/material";
import OnBoard from "./onBoard";
import {
  StyledBox,
  StyledButton,
  StyledGrid,
  StyledInputBox,
  StyledInputGrid,
  StyledInputLabel,
  StyledTextRegular,
  StyledTextSemiBold,
} from "./resetPageStyles";

export function ResetPage() {
  return (
    <OnBoard
      children={
        <StyledBox>
          <StyledBox>
            <StyledTextSemiBold fontSize="20px">
              Reset Password
            </StyledTextSemiBold>
            <StyledTextRegular fontSize="14px">
              Please provide a new password for your account
            </StyledTextRegular>
          </StyledBox>
          <StyledBox paddingTop="24px">
            <StyledInputLabel required>New password</StyledInputLabel>
            <StyledInputGrid sx={{ display: "flex", alignItems: "center" }}>
              <StyledInputBox component="input" type="password" />
              <Avatar
                src="eye.png"
                sx={{ height: "16px", width: "16px", marginRight: "16px" }}
              />
            </StyledInputGrid>
          </StyledBox>
          <StyledBox paddingTop="24px">
            <StyledInputLabel required>Confirm new password</StyledInputLabel>
            <StyledInputGrid sx={{ display: "flex", alignItems: "center" }}>
              <StyledInputBox component="input" type="password" />
              <Avatar
                src="eye.png"
                sx={{ height: "16px", width: "16px", marginRight: "16px" }}
              />
            </StyledInputGrid>
          </StyledBox>
          <StyledButton>Reset password</StyledButton>
        </StyledBox>
      }
    />
  );
}
