import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const LoginContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const LogInTitle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
export const LoginBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
export const QueryContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  gap: "8px",
});
export const ForgotLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.default,
  fontSize: theme.typography.fontSize.small,
  fontWeight: theme.typography.fontWeight.semiBold,
  textDecoration: "underline",
  textDecorationColor: theme.palette.text.primary,
  textDecorationThickness: "1.5px",
  cursor: "pointer",
}));
