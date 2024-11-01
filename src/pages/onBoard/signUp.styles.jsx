import { Box, Button, Link, styled } from "@mui/material";
import { SSizeMWeight } from "../../components/typography/typography";

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

const LoginLink = styled(({ ...props }) => <Link {...props}>Log in</Link>)(
  ({ theme }) => ({
    color: theme.palette.text.default,
    fontSize: theme.typography.fontSize.small,
    fontWeight: theme.typography.fontWeight.semiBold,
    textDecorationColor: theme.palette.text.default,
    textDecorationThickness: "1px",
  })
);

const QueryContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
});

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
};
