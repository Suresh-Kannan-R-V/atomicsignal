import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,
  outline: "none",
  height: "40px",
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.placeholder,
    opacity: 1,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize.small,
  },
  "& .MuiOutlinedInput-root": {
    fieldset: {
      border: "solid red 1px",
      borderRadius: "4px",
      borderColor: theme.palette.secondary.disabledOutline,
    },

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default StyledTextField;
