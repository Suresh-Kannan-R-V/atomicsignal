import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  fontSize: theme.typography.fontSize.small,

  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.placeholder,
    opacity: 1,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize.small,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default StyledTextField;
