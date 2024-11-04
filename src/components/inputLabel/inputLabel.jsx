import { InputLabel, styled } from "@mui/material";

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  "& .MuiInputLabel-asterisk": {
    color: theme.palette.text.danger,
  },
  color: theme.palette.text.label,
  fontSize: theme.typography.fontSize.verySmall, // 13px is enough , it is correct for all
}));

export default StyledInputLabel;
