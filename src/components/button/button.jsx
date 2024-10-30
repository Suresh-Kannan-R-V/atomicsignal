import { Button, styled, useTheme } from "@mui/material";
import Theme from "../../themes/theme";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "Poppins",
  color: "#ffffff",
  minWidth: "0px",

  "&.MuiButton-contained": {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "none",
    color: "white",
    border: "none",

    "&:hover": {
      boxShadow: "none",
      border: "none",
    },
  },
  "&.MuiButton-outlined": {
    color: theme.palette.secondary.main,
    border: `solid ${theme.palette.secondary.main} 2px`,
  },
}));

export default StyledButton;
