import { Box, Button, Grid2, styled } from "@mui/material";
import { SSizeMWeight } from "../../components/typography/typography";
import { Link } from "react-router-dom";

const SignUpContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const SignUpTitle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const SSOContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const SSOButton = styled(({ content, icon, ...props }) => (
  <Button startIcon={icon} {...props}>
    <Box width={"100%"}>
      <SSizeMWeight content={content} />
    </Box>
  </Button>
))(({ theme }) => ({
  color: theme.palette.text.default,
  textTransform: "none",
  backgroundColor: theme.palette.button.secondary,
  padding: "12px",
  height: "40px",
  borderRadius: "4px",
}));

const OrContainer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "center",
});

const OrBox = styled(Box)({
  position: "relative",
  "::before": {
    display: "block",
    content: '""',
    width: "110px",
    borderBottom: "solid #EBEBEB 1.5px",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-24px,10px)",
    backgroundColor: "red",
  },
  "::after": {
    display: "block",
    content: '""',
    width: "110px",
    borderBottom: "solid #EBEBEB 1.5px",
    position: "absolute",
    top: 0,
    transform: "translate(24px,10px)",
    backgroundColor: "red",
  },
});

const SignUpInputContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const SignUpBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const LoginLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.fontSize.small,
  fontWeight: theme.typography.fontWeight.semiBold,
  textDecoration: "underline",
  textDecorationColor: theme.palette.text.primary,
  textDecorationThickness: "1.5px",
  cursor: "pointer",
}));

const QueryContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
});

//almost there page styles
const SignUpPageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.button.secondary,
  height: "100vh",
  width: "100%",
}));
const SignupBoxLeft = styled(Grid2)(({ theme }) => ({
  margin: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const LeftBox = styled(Box)(({ theme }) => ({
  width: "468px",
  marginTop: "40%",
  height: "368.42px",
}));

export {
  SignUpContainer,
  SignUpTitle,
  SSOContainer,
  SSOButton,
  OrContainer,
  OrBox,
  SignUpInputContainer,
  SignUpBox,
  LoginLink,
  QueryContainer,
  SignUpPageContainer,
  SignupBoxLeft,
  LeftBox,
};
